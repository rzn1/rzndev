<template>
  <section id="tech-stack" class="section relative overflow-hidden">
    <!-- Background Grid Effect -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="huge-text mb-24 opacity-100 flex justify-start text-white">
        <h1><HackerText text="ARSENAL" /></h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Category Card -->
        <div 
          v-for="(category, index) in techCategories" 
          :key="index"
          class="tech-category group"
        >
          <div class="lusion-card h-full p-8 relative overflow-hidden bg-bg-primary/50 backdrop-blur-sm border border-white/5 hover:border-accent-blue/30 transition-all duration-500">
            <!-- Header -->
            <div class="flex items-center gap-4 mb-8">
              <div class="w-12 h-12 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue group-hover:scale-110 group-hover:bg-accent-blue/20 transition-all duration-500">
                <component :is="category.icon" class="w-6 h-6" />
              </div>
              <h3 class="text-2xl font-bold text-white tracking-wide group-hover:text-accent-blue transition-colors">{{ category.title }}</h3>
            </div>

            <!-- Tech List -->
            <div class="flex flex-wrap gap-3">
              <div 
                v-for="(tech, tIndex) in category.items" 
                :key="tIndex"
                class="tech-item relative"
              >
                <div class="px-4 py-2 rounded bg-white/5 border border-white/10 text-sm font-medium text-text-secondary group-hover/item:text-white group-hover/item:border-accent-blue/50 group-hover/item:bg-accent-blue/10 transition-all duration-300 hover:scale-105">
                  {{ tech }}
                </div>
              </div>
            </div>

            <!-- Decorative corner -->
            <div class="absolute top-0 right-0 w-16 h-16 rounded-bl-md bg-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
import { CodeBracketIcon, ServerIcon, WrenchScrewdriverIcon, PaintBrushIcon, CubeTransparentIcon, CommandLineIcon } from '@heroicons/vue/24/outline'

const techCategories = [
  {
    title: 'Frontend Core',
    icon: CodeBracketIcon,
    items: ['Vue 3', 'Nuxt 3', 'TypeScript', 'React', 'HTML5', 'CSS3/SCSS']
  },
  {
    title: 'Styling & UI',
    icon: PaintBrushIcon,
    items: ['Tailwind CSS', 'Sass', 'Framer Motion', 'Bootstrap', 'Material UI']
  },
  {
    title: 'Creative Coding',
    icon: CubeTransparentIcon,
    items: ['Three.js', 'GSAP', 'WebGL', 'Canvas API', 'TresJS']
  },
  {
    title: 'Backend & Data',
    icon: ServerIcon,
    items: ['Node.js', 'Express', 'Firebase', 'Supabase', 'MongoDB', 'PostgreSQL']
  },
  {
    title: 'Tools & DevOps',
    icon: CommandLineIcon,
    items: ['Git', 'Docker', 'Vite', 'Webpack', 'GitHub Actions', 'Vercel']
  },
  {
    title: 'Design',
    icon: WrenchScrewdriverIcon,
    items: ['Figma', 'Adobe XD', 'Photoshop', 'Blender', 'Prototyping']
  }
]

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#tech-stack',
      start: 'top 70%',
    }
  })

  // Title Reveal
  tl.from('#tech-stack .huge-text', {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
  })

  // Cards Reveal
  gsap.from('.tech-category', {
    scrollTrigger: {
      trigger: '#tech-stack',
      start: 'top 60%',
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out'
  })
})
</script>

<style scoped>
/* Optional: Add custom hover effects or specific responsive tweaks here */
</style>
