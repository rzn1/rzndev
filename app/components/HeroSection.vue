<template>
  <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden bg-bg-primary">
    <!-- Background Glow -->
    <div class="glow-mesh"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col items-center">
        <!-- Badge -->
        <div
          class="mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md opacity-0 hero-badge flex items-center gap-2">
          <div class="w-1.5 h-1.5 bg-accent-primary rounded-full animate-pulse"></div>
          <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Available for Freelance</span>
        </div>

        <!-- Huge Staggered Text -->
        <div class="huge-text text-center flex flex-col items-center">
          <div class="overflow-hidden">
            <h1 class="hero-line block">BEYOND</h1>
          </div>
          <div class="overflow-hidden">
            <h1 class="hero-line block gradient-text-premium">VISIONS</h1>
          </div>
          <div class="overflow-hidden mt-4">
            <h1 class="hero-line block text-2xl md:text-4xl font-medium tracking-[0.3em] text-white opacity-40">
              ENGINEERING THE UNEXPECTED</h1>
          </div>
        </div>

        <!-- CTA and Subtext -->
        <div class="mt-20 flex flex-col items-center gap-14 hero-sub">
          <p class="text-lg md:text-xl text-text-secondary max-w-2xl text-center leading-relaxed font-normal">
            Software Systems Engineer specializing in robust architecture and immersive digital landscapes.
            Bridging the gap between creative imagination and technical precision.
          </p>

          <div class="flex flex-wrap gap-8 justify-center">
            <a href="#projects" class="btn-premium btn-premium-accent group">
              <span class="relative z-10 flex items-center gap-3">
                Explore Portfolio
                <svg xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
            <a href="#contact" class="btn-premium btn-premium-primary group">
              <span class="relative z-10">Get in Touch</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Premium Scroll Indicator -->
    <div
      class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-40 hero-scroll hover:opacity-100 transition-opacity duration-300 cursor-pointer">
      <div class="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1/2 bg-white scroll-dash"></div>
      </div>
      <p class="text-[9px] font-bold uppercase tracking-[0.6em] translate-x-[0.3em] text-white/60">Scroll</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
