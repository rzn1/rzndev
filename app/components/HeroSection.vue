<template>
  <section id="home"
    class="h-screen flex items-center justify-center relative overflow-hidden bg-bg-primary perspective-container">
    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col items-center">
        <!-- Floating Badge -->
        <div
          class="mb-12 px-6 py-2 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl opacity-0 hero-badge flex items-center gap-3">
          <div class="relative w-2 h-2">
            <div class="absolute inset-0 bg-accent-primary rounded-full animate-ping opacity-75"></div>
            <div class="relative w-2 h-2 bg-accent-primary rounded-full"></div>
          </div>
          <span class="text-[11px] font-black uppercase tracking-[0.4em] text-white/50">System.Initialized</span>
        </div>

        <!-- Radical Typography -->
        <div class="relative hero-title-container">
          <h1 class="hero-main-title text-center">
            <span
              class="block text-[15vw] md:text-[18vw] font-black leading-none tracking-tighter text-white/5 hero-bg-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none uppercase">Architect</span>
            <div class="relative z-10 flex flex-col items-center">
              <div class="overflow-hidden mb-[-0.2em] transform -skew-x-12">
                <span
                  class="hero-line block text-[12vw] md:text-[14vw] font-black leading-tight uppercase italic gradient-text-premium">Beyond</span>
              </div>
              <div class="overflow-hidden transform skew-x-12">
                <span
                  class="hero-line block text-[12vw] md:text-[14vw] font-black leading-tight uppercase text-white">Visions</span>
              </div>
            </div>
          </h1>
        </div>

        <!-- Radical CTA -->
        <div class="mt-24 flex flex-col items-center gap-16 hero-sub">
          <div class="flex flex-wrap gap-12 justify-center items-center">
            <a href="#projects" class="group relative">
              <div
                class="absolute -inset-4 bg-accent-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              </div>
              <span
                class="relative z-10 text-[10px] font-black uppercase tracking-[0.8em] text-white/40 group-hover:text-white transition-all">Explore_Archive</span>
            </a>
            <div class="w-12 h-[1px] bg-white/10 hidden md:block"></div>
            <a href="#contact" class="group relative">
              <span
                class="relative z-10 text-[10px] font-black uppercase tracking-[0.8em] text-white/40 group-hover:text-white transition-all">Establish_Link</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Cinematic Overlays -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary pointer-events-none opacity-50">
    </div>
    <div
      class="absolute top-0 left-0 w-full h-full border-[20px] md:border-[40px] border-bg-primary z-50 pointer-events-none">
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  const tl = gsap.timeline()

  // Staggered reveal of hero lines (Main Entrance)
  tl.from('#home .hero-badge', {
    opacity: 0,
    y: -20,
    duration: 1,
    ease: 'power3.out'
  })
    .from('#home .hero-line', {
      y: 200,
      duration: 1.5,
      stagger: 0.15,
      ease: 'power4.out'
    }, '-=0.5')

    // Fade in subtext and CTAs
    .from('#home .hero-sub > *', {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out'
    }, '-=0.8')

  // Scroll Discovery - Depth Dive Effect
  gsap.to('#home .huge-text', {
    scrollTrigger: {
      trigger: '#home',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
    scale: 0.8,
    z: -500,
    opacity: 0,
    y: -100,
    filter: 'blur(10px)',
    ease: 'none'
  })

  // CTA Scroll Parallax
  gsap.to('#home .hero-sub', {
    scrollTrigger: {
      trigger: '#home',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.5,
    },
    y: -50,
    opacity: 0,
    ease: 'none'
  })

  // Animation for the scroll dash
  gsap.to('.scroll-dash', {
    y: 100,
    duration: 2,
    repeat: -1,
    ease: 'power1.inOut'
  })
})
</script>

<style scoped>
.hero-line {
  will-change: transform;
}
</style>
