<template>
  <section id="about" class="min-h-screen bg-bg-primary relative overflow-hidden flex items-center py-32 md:py-0">
    <!-- Massive Background Typography -->
    <div class="absolute top-1/2 left-0 -translate-y-1/2 w-full pointer-events-none select-none overflow-hidden">
      <div class="text-[25vw] font-black text-white/[0.02] whitespace-nowrap about-bg-scroll uppercase">DISCOVERY •
        EVOLUTION • ARCHITECTURE •</div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <!-- Left Column: Manifesto -->
        <div class="lg:col-span-7 about-text">
          <div class="flex items-center gap-4 mb-12">
            <div class="w-12 h-[1px] bg-accent-primary"></div>
            <span class="text-[10px] font-black uppercase tracking-[0.5em] text-accent-primary">Profile.Identity</span>
          </div>

          <h2
            class="text-6xl md:text-[7vw] font-black text-white leading-[0.9] tracking-tighter uppercase mb-12 italic">
            Engineering <br />
            <span class="text-white/20">The Digital</span> <br />
            <span class="gradient-text-premium uppercase">Frontier.</span>
          </h2>

          <div class="max-w-xl space-y-8">
            <p class="text-xl md:text-2xl text-text-secondary leading-relaxed font-normal">
              I am a Software Systems Engineer specializing in the convergence of <span
                class="text-white font-bold italic underline decoration-accent-primary underline-offset-4">robust
                architecture</span> and <span class="text-white font-bold">immersive interaction</span>.
            </p>
            <p class="text-lg text-text-secondary/60 leading-relaxed border-l border-white/10 pl-8">
              My mission is to transcend traditional web boundaries, building scalable systems that don't just
              function—they evoke a sense of presence.
            </p>
          </div>
        </div>

        <!-- Right Column: Bento Stats/Tech -->
        <div class="lg:col-span-5 grid grid-cols-2 gap-4 about-bento">
          <div
            class="premium-card p-8 flex flex-col justify-between h-48 group hover:border-accent-primary/40 transition-colors">
            <span
              class="text-[10px] font-black uppercase tracking-widest text-white/20 group-hover:text-accent-primary transition-colors">Stack.Core</span>
            <div class="text-3xl font-black text-white">VUE/NUXT</div>
          </div>
          <div
            class="premium-card p-8 flex flex-col justify-between h-48 group hover:border-accent-primary/40 transition-colors mt-8">
            <span
              class="text-[10px] font-black uppercase tracking-widest text-white/20 group-hover:text-accent-primary transition-colors">Stack.Back</span>
            <div class="text-3xl font-black text-white">.NET/NODE</div>
          </div>
          <div
            class="premium-card p-8 flex flex-col justify-between h-48 group hover:border-accent-primary/40 transition-colors">
            <span
              class="text-[10px] font-black uppercase tracking-widest text-white/20 group-hover:text-accent-primary transition-colors">Stack.3D</span>
            <div class="text-3xl font-black text-white">THREE.JS</div>
          </div>
          <div
            class="premium-card p-8 flex flex-col justify-between h-48 group hover:border-accent-primary/40 transition-colors mt-8">
            <span
              class="text-[10px] font-black uppercase tracking-widest text-white/20 group-hover:text-accent-primary transition-colors">Status.Active</span>
            <div class="text-3xl font-black text-white italic">FREELANCE</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

onMounted(() => {
  // Bio Entrance
  gsap.from('.about-text > *', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 70%',
    },
    opacity: 0,
    x: -50,
    duration: 1.2,
    stagger: 0.15,
    ease: 'power4.out'
  })

  // Bento Entrance
  gsap.from('.about-bento > div', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 70%',
    },
    opacity: 0,
    y: 50,
    duration: 1.2,
    stagger: 0.1,
    ease: 'power3.out'
  })

  // Background text scrolling
  gsap.to('.about-bg-scroll', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 2,
    },
    xPercent: -20,
    ease: 'none'
  })
})
</script>

<style scoped>
.about-bg-scroll {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.05);
}
</style>
