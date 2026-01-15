<template>
  <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col items-center">
        <!-- Huge Staggered Text -->
        <div class="huge-text text-center flex flex-col items-center">
          <div class="overflow-hidden">
            <h1 class="hero-line block">BEYOND</h1>
          </div>
          <div class="overflow-hidden">
            <h1 class="hero-line block gradient-text-lusion">VISIONS</h1>
          </div>
          <div class="overflow-hidden mt-2">
            <h1 class="hero-line block text-3xl md:text-5xl font-bold lowercase tracking-normal">WITHIN REACH</h1>
          </div>
        </div>
        
        <!-- CTA and Subtext -->
        <div class="mt-16 flex flex-col items-center gap-12 hero-sub">
          <p class="text-xl md:text-2xl text-text-secondary max-w-2xl text-center leading-relaxed font-medium">
            Crafting immersive digital experiences that bridge the gap between imagination and reality.
          </p>
          
          <div class="flex flex-wrap gap-6 justify-center lg:justify-start">
        <a 
          href="#work" 
          data-magnetic
          class="btn-lusion group inline-block"
        >
          <span class="relative z-10 flex items-center gap-2 pointer-events-none">
            Explore Work
            <div class="w-1.5 h-1.5 bg-accent-cyan rounded-full transition-all duration-500 group-hover:scale-[3] group-hover:shadow-[0_0_15px_rgba(0,217,255,1)]"></div>
          </span>
        </a>
        <a 
          href="#contact" 
          data-magnetic
          class="px-8 py-4 rounded-full border border-white/20 text-white font-black tracking-widest uppercase text-xs hover:bg-white/10 transition-all duration-300 hover:border-white/40 inline-block"
        >
          <span class="pointer-events-none block">Start a Project</span>
        </a>
      </div>
        </div>
      </div>
    </div>
    
    <!-- Lusion-style Scroll Indicator -->
    <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-70 hero-scroll">
      <div class="w-[2px] h-24 bg-text-primary/10 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1/2 bg-accent-blue scroll-dash"></div>
      </div>
      <p class="text-[10px] font-black uppercase tracking-[0.4em] translate-x-[0.2em]">Scroll</p>
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
  tl.from('#home .hero-line', {
    y: 200,
    duration: 1.5,
    stagger: 0.15,
    ease: 'power4.out'
  })
  
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
