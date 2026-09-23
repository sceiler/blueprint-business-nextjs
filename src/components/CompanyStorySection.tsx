'use client'

import NextImage from 'next/image'
import { Alert, Box, Container, Stack, Typography } from '@mui/material'
import { brandAsset, companyStory } from '@/content/about-content'

export default function CompanyStorySection() {
  return (
    <Box component="section" sx={{ bgcolor: 'grey.50', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 6, md: 8 }}
          alignItems="center"
        >
          <Box sx={{ flex: 1, width: '100%' }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >
              <NextImage
                src={brandAsset.src}
                alt={brandAsset.alt}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </Box>
          </Box>

          <Stack spacing={3} sx={{ flex: 1 }}>
            <Typography
              variant="overline"
              color="primary.main"
              sx={{ fontWeight: 700, letterSpacing: 1.5 }}
            >
              {companyStory.eyebrow}
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
              {companyStory.heading}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {companyStory.tagline}
            </Typography>

            <Stack spacing={2.5}>
              {companyStory.sections.map((section) => (
                <Box key={section.heading}>
                  <Typography variant="h6" sx={{ mb: 0.5 }}>
                    {section.heading}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {section.body}
                  </Typography>
                </Box>
              ))}
            </Stack>

            <Alert severity="info" variant="outlined" sx={{ mt: 1 }}>
              {companyStory.demoNotice}
            </Alert>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
