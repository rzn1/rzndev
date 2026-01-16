<template>
  <footer class="bg-bg-primary py-24 border-t border-white/5 relative z-10">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-12">
        <div class="flex flex-col items-center md:items-start">
          <a href="#home" class="text-2xl font-black tracking-tighter mb-4 text-white">RZN<span class="text-accent-blue">.</span>DEV</a>
          <p class="text-text-secondary text-sm">© {{ currentYear }} rzndev Developer.</p>
        </div>
        
        <div class="flex gap-12 flex-wrap justify-center">
          <a v-for="link in ['Home', 'About', 'Work', 'Contact']" :key="link" :href="`#${link.toLowerCase()}`" class="text-xs font-black uppercase tracking-[0.3em] text-text-secondary hover:text-white transition-colors duration-300">
            {{ link }}
          </a>
        </div>
        
        <button @click="scrollToTop" class="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-bg-primary transition-all group backdrop-blur-md">
          <span class="group-hover:-translate-y-1 transition-transform">↑</span>
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
