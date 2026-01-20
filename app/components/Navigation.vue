<template>
  <nav class="fixed top-0 left-0 w-full z-[1100] py-8 transition-all duration-500"
    :class="{ 'bg-bg-primary/80 backdrop-blur-2xl py-6': isScrolled }">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <a href="#home" data-magnetic
        class="logo text-2xl font-black tracking-tighter group transition-colors duration-300 text-white">
        RZN<span class="text-accent-primary group-hover:text-accent-tertiary transition-colors duration-300">.</span>DEV
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-14">
        <a v-for="item in navItems" :key="item.name" :href="item.href" data-magnetic class="nav-link"
          @mousemove="handleMagnetic" @mouseleave="resetMagnetic">
          <span class="relative z-10 block pointer-events-none">{{ item.name }}</span>
        </a>
      </div>

      <!-- Mobile Toggle -->
      <button class="menu-toggle flex flex-col gap-[6px] md:hidden bg-none border-none cursor-pointer p-2 z-50 group"
        @click="toggleMenu" aria-label="Toggle menu" data-magnetic>
        <span class="w-[20px] h-[2px] bg-white transition-all duration-300"
          :class="{ 'rotate-45 translate-y-[8px]': menuOpen }"></span>
        <span class="w-[30px] h-[2px] bg-white transition-all duration-300 group-hover:w-[20px]"
          :class="{ 'opacity-0': menuOpen }"></span>
        <span class="w-[20px] h-[2px] bg-white transition-all duration-300"
          :class="{ '-rotate-45 -translate-y-[8px]': menuOpen }"></span>
      </button>

      <!-- Mobile Menu -->
      <transition enter-active-class="transition duration-700 cubic-bezier(0.16, 1, 0.3, 1)"
        enter-from-class="opacity-0 backdrop-blur-0" enter-to-class="opacity-100 backdrop-blur-3xl"
        leave-active-class="transition duration-500 ease-in" leave-from-class="opacity-100 backdrop-blur-3xl"
        leave-to-class="opacity-0 backdrop-blur-0">
        <div v-if="menuOpen"
          class="fixed inset-0 bg-bg-primary/95 md:hidden flex flex-col items-center justify-center z-40 gap-12">
          <a v-for="(item, index) in navItems" :key="item.name" :href="item.href" @click="closeMenu"
            class="mobile-nav-link" :style="{ transitionDelay: `${index * 100}ms` }">
            {{ item.name }}
          </a>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const isScrolled = ref(false)
const menuOpen = ref(false)

const navItems = [
  { name: 'System', href: '#home' },
  { name: 'Profile', href: '#about' },
  { name: 'Journey', href: '#experience' },
  { name: 'Archive', href: '#projects' },
  { name: 'Link', href: '#contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  if (menuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  menuOpen.value = false
  document.body.style.overflow = ''
}

// Magnetic Effect Logic
const handleMagnetic = (e: MouseEvent) => {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  const x = e.clientX - (rect.left + rect.width / 2)
  const y = e.clientY - (rect.top + rect.height / 2)

  gsap.to(target, {
    x: x * 0.3,
    y: y * 0.3,
    duration: 0.3,
    ease: 'power2.out'
  })
}

const resetMagnetic = (e: MouseEvent) => {
  const target = e.currentTarget as HTMLElement
  gsap.to(target, {
    x: 0,
    y: 0,
    duration: 0.6,
    ease: 'elastic.out(1, 0.5)'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-link {
  @apply text-[10px] font-black uppercase tracking-[0.4em] transition-colors duration-500 relative inline-block py-2 text-white/50;
}

.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-full h-[1px] bg-accent-primary scale-x-0 origin-right transition-transform duration-500 ease-out;
}

.nav-link:hover::after {
  @apply scale-x-100 origin-left;
}

.nav-link:hover {
  @apply text-white;
}

.mobile-nav-link {
  @apply text-5xl font-black tracking-tighter text-white/20 hover:text-white transition-all duration-500 uppercase;
}

.v-enter-to .mobile-nav-link {
  @apply text-white/80;
}
</style>
