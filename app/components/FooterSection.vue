<template>
  <footer class="bg-bg-primary py-24 border-t border-white/5 relative z-10">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-12">
        <div class="flex flex-col items-center md:items-start">
          <a href="#home" class="text-2xl font-black tracking-tighter mb-4 text-white uppercase">RZN<span
              class="text-accent-primary">.</span>DEV</a>
          <p class="text-white/20 text-[10px] font-bold uppercase tracking-[0.4em]">© {{ currentYear }} •
            All rights reserved.</p>
        </div>

        <div class="flex gap-12 flex-wrap justify-center">
          <a v-for="link in navLinks" :key="link.name" :href="link.href"
            class="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors duration-300">
            {{ link.name }}
          </a>
        </div>

        <button @click="scrollToTop"
          class="w-14 h-14 flex items-center justify-center border border-white/10 rounded-2xl bg-white/5 hover:bg-accent-primary hover:border-accent-primary hover:scale-110 transition-all group backdrop-blur-3xl shadow-glow-indigo">
          <svg xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-white transition-transform group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
