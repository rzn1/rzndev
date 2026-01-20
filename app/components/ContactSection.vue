<template>
  <section id="contact" class="min-h-screen bg-bg-primary relative overflow-hidden flex items-center justify-center py-32">
    <div class="container mx-auto px-6 relative z-10 text-center">
      <div class="mb-16 flex flex-col items-center">
        <div class="w-16 h-[1px] bg-accent-primary mb-12"></div>
        <h2 class="text-[12vw] md:text-[8vw] font-black text-white leading-none tracking-tighter uppercase mb-8">
          LEAVE A <span class="gradient-text-premium italic">MARK.</span>
        </h2>
        <p class="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Open for architectural collaborations and technical leadership. <br/>
          Secure your terminal link below.
        </p>
      </div>

      <!-- Main CTA -->
      <div class="mb-24">
        <a 
          href="mailto:rzn.dev@proton.me"
          class="inline-block group relative"
        >
          <div class="absolute -inset-8 bg-accent-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <span class="text-3xl md:text-6xl font-black text-white group-hover:text-accent-primary transition-colors duration-500 border-b-2 border-white/10 group-hover:border-accent-primary pb-4">
            rzn.dev@proton.me
          </span>
        </a>
      </div>

      <!-- Social Grid -->
      <div class="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-500 social-links">
        <a 
          v-for="social in socials" 
          :key="social.name" 
          :href="social.url"
          target="_blank"
          class="text-[10px] font-black uppercase tracking-[0.5em] text-white hover:text-accent-primary transition-all flex items-center gap-4"
        >
          <span class="w-2 h-2 rounded-full border border-white/20"></span>
          {{ social.name }}
        </a>
      </div>
    </div>

    <!-- Geometric Footer Hint -->
    <div class="absolute bottom-12 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-t from-accent-primary to-transparent opacity-20"></div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

const socials = [
  { name: 'GitHub', url: 'https://github.com/rzn1' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ugnius-dulinskas-036b63377' },
  { name: 'Twitter', url: 'https://x.com/rzngit' },
]

onMounted(() => {
  gsap.from('.social-links a', {
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 80%',
    },
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.1,
    ease: 'power3.out'
  })
})
</script>

<style scoped>
</style>
