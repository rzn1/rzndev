<template>
  <section id="work" class="section bg-bg-secondary/80 relative overflow-hidden">
    <!-- Dark transition floor -->
    <div class="absolute top-0 left-0 w-full h-32 pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="huge-text mb-24 opacity-100 flex justify-end text-white">
        <h1><HackerText text="PROJECTS" /></h1>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="lusion-card group flex flex-col p-0 overflow-hidden project-card h-[500px] transition-transform duration-100 ease-out will-change-transform"
          @mousemove="handleTilt($event, index)"
          @mouseleave="resetTilt(index)"
          :style="cardStyles[index]"
        >
          <!-- Cinematic Image -->
          <div class="relative w-full aspect-video bg-bg-primary overflow-hidden border-b border-white/5">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60"></div>
            
            <!-- Link Overlay -->
            <div class="absolute inset-0 bg-bg-primary/80 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-md">
              <a :href="project.demo" target="_blank" data-magnetic class="px-8 py-3 bg-white text-bg-primary font-bold rounded-full hover:scale-105 transition-transform">Live</a>
              <a :href="project.github" target="_blank" data-magnetic class="px-8 py-3 border border-white text-white font-bold rounded-full hover:bg-white hover:text-bg-primary transition-all">Code</a>
            </div>
          </div>
          
          <div class="p-10 relative">
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="tag in project.tags" :key="tag" class="text-[10px] font-black uppercase tracking-widest text-accent-cyan/80">{{ tag }}</span>
            </div>
            <h3 class="text-3xl font-black mb-4 tracking-tight text-white group-hover:text-accent-blue transition-colors duration-500">{{ project.title }}</h3>
            <p class="text-text-secondary text-lg leading-relaxed mb-0">{{ project.description }}</p>
            
            <!-- Subtle accent light -->
            <div class="absolute bottom-0 right-0 w-32 h-32 bg-accent-blue/5 blur-3xl rounded-full pointer-events-none group-hover:bg-accent-blue/10 transition-colors"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const cardStyles = ref<Record<number, any>>({})

const handleTilt = (e: MouseEvent, index: number) => {
  const card = e.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  
  const rotateX = ((y - centerY) / centerY) * -5 // Max 5deg tilt
  const rotateY = ((x - centerX) / centerX) * 5
  
  cardStyles.value[index] = {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
    zIndex: 10
  }
}

const resetTilt = (index: number) => {
  cardStyles.value[index] = {
    transform: 'perspective(1000px) rotateX(0) rotateY(0) scale(1)',
    zIndex: 1,
    transition: 'transform 0.5s ease-out'
  }
}

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#work',
      start: 'top 70%', // Start earlier for smoother entrance
    }
  })

  // Title reveal
  tl.from('#work .huge-text', {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
  })

  // Staggered reveal for project cards
  gsap.from('#work .project-card', {
    scrollTrigger: {
      trigger: '#work',
      start: 'top 70%', // Start earlier for smoother entrance
    },
    opacity: 0,
    y: 60,
    scale: 0.95,
    duration: 1,
    stagger: 0.15,
    ease: 'power3.out',
    clearProps: 'all' // Clean up inline styles after animation
  })
})

const projects = [
  {
    title: 'E-Commerce Fusion',
    description: 'High-performance commerce engine with a focus on minimalist UX and seamless transitions.',
    tags: ['NUXT', 'GSAP', 'STRIPE'],
    image: '/projects/audiov.png',
    demo: 'https://audiomix-ecru.vercel.app/',
    github: 'https://github.com/rzn1/AudioV',
  },
  {
    title: 'Kinetic 3D Engine',
    description: 'Experimental WebGL interaction library for creative developers.',
    tags: ['TRESJS', 'THREE.JS', 'WEBGL'],
    image: '/projects/futurerp-web.png',
    demo: '#',
    github: '#',
  },
  {
    title: 'Minimalist TaskOS',
    description: 'A distraction-free productivity tool built with focus-driven design principles.',
    tags: ['VUE 3', 'TAILWIND', 'FIREBASE'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000',
    demo: '#',
    github: 'https://github.com/rzn1/world-tag',
  },
  {
    title: 'AI Aesthetic Lab',
    description: 'Generative AI interface exploring the intersection of art and machine learning.',
    tags: ['OPENAI', 'PINIA', 'VITEST'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    demo: '#',
    github: '#',
  },
]
</script>

<style scoped>
</style>
