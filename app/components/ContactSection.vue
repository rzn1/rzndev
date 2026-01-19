<template>
  <section id="contact" class="section bg-bg-primary relative overflow-hidden">
    <div class="container mx-auto px-6 relative z-10">
      <div class="huge-text mb-24 opacity-100 text-white">
        <h1>
          <HackerText text="CONNECT" />
        </h1>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div class="lg:col-span-7 contact-text opacity-0">
          <h2 class="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight text-white">READY TO BRING YOUR
            <span class="gradient-text-premium uppercase italic">IDEAS TO LIFE</span>?</h2>
          <p class="text-xl text-text-secondary leading-relaxed mb-12 max-w-xl">
            I'm currently available for selected freelance projects and architectural consultations.
            Whether you have a fully-fledged concept or just the spark of an idea, let's discuss how we can engineer it.
          </p>

          <div class="flex flex-wrap gap-10">
            <a v-for="(social, index) in socials" :key="index" :href="social.url" target="_blank"
              class="group flex flex-col gap-2">
              <span
                class="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-accent-primary transition-colors">{{
                social.name }}</span>
              <span class="h-[1px] w-0 bg-accent-primary group-hover:w-full transition-all duration-500"></span>
            </a>
          </div>
        </div>

        <div class="lg:col-span-5 w-full contact-action opacity-0">
          <div class="premium-card p-12 md:p-16 text-center">
            <div class="mb-8 p-4 rounded-full bg-accent-primary/5 border border-accent-primary/10 inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-accent-primary" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-white">SAY HELLO</h3>
            <p class="text-text-secondary mb-10 text-sm">Direct communication for inquiries and collaborations.</p>
            <a data-magnetic href="mailto:dulinskas3@gmail.com" class="btn-premium btn-premium-accent w-full group">
              <span class="relative z-10 flex items-center justify-center gap-3">
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 transition-transform duration-300 group-hover:-rotate-45" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </span>
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
