import test from 'node:test'
import assert from 'node:assert/strict'
import { deliveryRequest } from '../src/lib/delivery-client.ts'

test('new requests use the latest space version and only published content', async () => {
  let version = 100
  const calls = []
  const transport = async (url, options) => {
    calls.push({ url, options })
    return Response.json(url.pathname.endsWith('/spaces/me')
      ? { space: { id: 123, version } }
      : { stories: [{ content: { title: `Published ${version}` } }] })
  }
  const config = { token: 'public-test-token', region: 'eu', spaceId: '123' }
  const first = await deliveryRequest('stories', { version: 'draft' }, config, transport)
  version = 101
  const second = await deliveryRequest('stories', {}, config, transport)
  assert.notDeepEqual(first, second)
  assert.equal(calls[3].url.searchParams.get('cv'), '101')
  assert.equal(calls[1].url.searchParams.get('version'), 'published')
  assert.ok(calls.every(call => call.options.cache === 'no-store'))
})

test('a token for another space cannot serve content', async () => {
  await assert.rejects(deliveryRequest('stories', {}, { token: 'test', region: 'eu', spaceId: '123' },
    async () => Response.json({ space: { id: 999, version: 1 } })), /different space/)
})
