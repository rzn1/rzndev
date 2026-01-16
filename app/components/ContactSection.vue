<template>
  <section id="contact" class="section bg-bg-primary/40 relative overflow-hidden">
    <div class="container mx-auto px-6 relative z-10">
      <div class="huge-text mb-24 opacity-100 text-white">
        <h1><HackerText text="CONNECT" /></h1>
      </div>
      
      <div class="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div class="flex-1 contact-text opacity-0">
          <h2 class="text-5xl font-black mb-8 leading-tight tracking-tight text-white">Let's build something <span class="gradient-text-lusion">extraordinary</span> together.</h2>
          <p class="text-xl text-text-secondary leading-relaxed mb-12">
            I'm currently available for freelance projects and full-time opportunities. 
            If you have an idea, let's make it a reality.
          </p>
          
          <div class="flex flex-wrap gap-8">
            <a
              v-for="(social, index) in socials"
              :key="index"
              :href="social.url"
              target="_blank"
              class="text-sm font-black uppercase tracking-[0.2em] text-text-secondary hover:text-accent-blue transition-colors duration-300"
            >
              {{ social.name }}
            </a>
          </div>
        </div>
        
        <div class="flex-1 w-full contact-action opacity-0">
          <div class="lusion-card p-16 text-center border-accent-blue/10 bg-bg-secondary/20 flex flex-col gap-6">
            <h3 class="text-2xl font-bold mb-4 text-white">Ready to start?</h3>
            <a data-magnetic href="mailto:dulinskas3@gmail.com" class="btn-lusion btn-lusion-primary w-full text-lg">
              Say Hello
            </a>
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

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 80%',
    }
  })

  tl.from('#contact .huge-text', {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
  })
  .to('.contact-text', {
    opacity: 1,
    x: 0,
    duration: 1.2,
    ease: 'power3.out'
  }, '-=0.8')
  .to('.contact-action', {
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: 'power4.out'
  }, '-=1')
})

const socials = [
  { name: 'GitHub', url: 'https://github.com/rzn1' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ugnius-dulinskas-036b63377' },
  { name: 'Twitter', url: 'https://x.com/rzngit' },
]
</script>

<style scoped>
.contact-text {
  transform: translateX(-40px);
}
.contact-action {
  transform: scale(0.9);
}
</style>
