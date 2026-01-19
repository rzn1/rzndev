<template>
  <section id="projects" class="section bg-bg-primary relative overflow-hidden">
    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div class="huge-text text-white">
          <h1 class="opacity-10 leading-none">WORKS</h1>
          <h2 class="text-5xl md:text-7xl font-black mt-[-0.5em] relative z-10">
            <HackerText text="PROJECTS" />
          </h2>
        </div>
        <p class="text-text-secondary max-w-sm text-right mb-4 border-r-2 border-accent-primary pr-6 py-2">
          A selection of technical challenges and creative solutions I've engineered.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div v-for="(project, index) in projects" :key="index"
          class="premium-card group flex flex-col p-6 project-card transition-all duration-500 hover:-translate-y-2">
          <!-- Project Header -->
          <div class="flex justify-between items-start mb-8">
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in project.tags" :key="tag"
                class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-accent-primary group-hover:bg-accent-primary/10 transition-colors">{{
                  tag }}</span>
            </div>
            <div class="flex gap-4">
              <a v-if="project.github" :href="project.github" target="_blank"
                class="text-white/40 hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a v-if="project.demo" :href="project.demo" target="_blank"
                class="text-white/40 hover:text-accent-primary transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Project Title & Image -->
          <div class="relative overflow-hidden rounded-2xl mb-8 flex-1 group/img">
            <img :src="project.image" :alt="project.title"
              class="w-full aspect-video object-cover transition-all duration-700 scale-100 group-hover:scale-110 opacity-60 group-hover:opacity-100">
            <div class="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60">
            </div>
          </div>

          <h3
            class="text-3xl font-black mb-4 tracking-tight group-hover:text-accent-primary transition-colors duration-500 uppercase">
            {{ project.title }}</h3>
          <p class="text-text-secondary text-base leading-relaxed mb-6">{{ project.description }}</p>

          <div class="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
            <span class="text-[10px] font-black uppercase tracking-widest text-white/30">{{ project.year || '2024'
            }}</span>
            <span
              class="w-8 h-[1px] bg-white/10 group-hover:w-16 group-hover:bg-accent-primary transition-all duration-500"></span>
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
  // Staggered reveal for project cards
  gsap.from('#projects .project-card', {
    scrollTrigger: {
      trigger: '#projects',
      start: 'top 70%',
    },
    opacity: 0,
    y: 60,
    duration: 1.2,
    stagger: 0.2,
    ease: 'power4.out',
    clearProps: 'all'
  })
})

const projects = [
  {
    title: 'AudioV',
    description: 'Dynamic audio engineering portfolio with real-time waveform visualization and immersive 3D interfaces.',
    tags: ['Next.js', 'Three.js', 'GSAP'],
    year: '2024',
    image: '/projects/audiov.png',
    demo: 'https://audiomix-ecru.vercel.app/',
    github: 'https://github.com/rzn1/AudioV',
  },
  {
    title: 'FutureRP',
    description: 'Comprehensive web ecosystem for a large-scale gaming community, featuring real-time data integration.',
    tags: ['Vue 3', 'Nuxt', 'Node.js'],
    year: '2024',
    image: '/projects/futurerp-web.png',
    demo: 'https://futurerp-website.vercel.app/',
    github: null,
  },
  {
    title: 'Anmaran',
    description: 'Premium corporate platform for industrial services, focused on performance and conversion-driven design.',
    tags: ['SEO', 'Optimization', 'Tailwind'],
    year: '2023',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000',
    demo: 'https://www.anmaran.lt',
    github: null,
  },
  {
    title: 'Furnitexpo',
    description: 'E-commerce showcase for luxury furniture manufacturing, emphasizing high-fidelity product imagery.',
    tags: ['Branding', 'Web Dev', 'UI/UX'],
    year: '2023',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000',
    demo: 'https://www.furnitexpo.lt',
    github: null,
  },
]
</script>

<style scoped></style>
