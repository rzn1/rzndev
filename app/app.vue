<script setup lang="ts">
useHead({
  title: 'Home',
})

useSeoMeta({
  title: 'Home',
  ogTitle: 'rzn.dev - Software Systems Engineer',
  description: 'Immersive developer portfolio showcasing 3D web experiences, robust architecture, and creative engineering.',
  ogDescription: 'Immersive developer portfolio showcasing 3D web experiences, robust architecture, and creative engineering.',
  ogImage: '/projects/audiov.png', // TODO: Replace with a dedicated social share image
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineWebSite({
    name: 'rzn.dev Portfolio',
  }),
  definePerson({
    name: 'rzn.dev',
    sameAs: [
      'https://github.com/rzn1'
    ]
  })
])
</script>

<template>
  <div class="app">
    <!-- 3D Background -->
    <ThreeBackground />
    <!-- Global UI Elements -->
    <CustomCursor />
    <CustomScrollbar />
    <ClickSpark />
    
    <!-- Navigation -->
    <Navigation />
    
    <!-- Main Content -->
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<style>
/* Global styles are imported via nuxt.config.ts */
.app {
  position: relative;
  min-height: 100vh;
}
</style>
