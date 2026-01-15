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

<script setup lang="ts">
</script>

<style>
/* Global styles are imported via nuxt.config.ts */
.app {
  position: relative;
  min-height: 100vh;
}
</style>
