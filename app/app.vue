<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const scrollProgress = ref(0)
const accentColor = ref('#6366f1')

useHead({
  title: 'Home',
})

useSeoMeta({
  title: 'Home',
  ogTitle: 'rzn.dev - Software Systems Engineer',
  description: 'Immersive developer portfolio showcasing 3D web experiences, robust architecture, and creative engineering.',
  ogDescription: 'Immersive developer portfolio showcasing 3D web experiences, robust architecture, and creative engineering.',
  ogImage: '/projects/audiov.png',
  twitterCard: 'summary_large_image',
})

onMounted(() => {
  // Track global scroll for 3D reactivity
  ScrollTrigger.create({
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => {
      scrollProgress.value = self.progress
    }
  })

  // Dynamic accent color based on section
  const sections = [
    { target: '#home', color: '#6366f1' },
    { target: '#about', color: '#8b5cf6' },
    { target: '#experience', color: '#c084fc' },
    { target: '#projects', color: '#d946ef' },
    { target: '#contact', color: '#f43f5e' }
  ]

  sections.forEach(sec => {
    ScrollTrigger.create({
      trigger: sec.target,
      start: 'top center',
      onEnter: () => accentColor.value = sec.color,
      onEnterBack: () => accentColor.value = sec.color,
    })
  })
})
</script>

<template>
  <div class="app bg-bg-primary">
    <!-- 3D Background with dynamic props -->
    <ThreeBackground :scroll-progress="scrollProgress" :accent-color="accentColor" />

    <!-- Global UI Elements -->
    <CustomCursor />
    <CustomScrollbar />
    <ClickSpark />

    <!-- Navigation -->
    <Navigation />

    <!-- Cinematic Main Content -->
    <main class="relative">
      <HeroSection />

      <!-- Wrapping core info in a pinning-friendly container if needed -->
      <div class="content-wrapper">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
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

.content-wrapper {
  position: relative;
  z-index: 10;
}

/* Cinematic Section Reveal Effect */
.section {
  @apply min-h-screen flex flex-col justify-center;
}
</style>
