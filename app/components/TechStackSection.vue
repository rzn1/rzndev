<template>
  <section id="tech-stack" class="section bg-bg-primary relative overflow-hidden">
    <!-- Sophisticated background pattern -->
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none">
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="huge-text mb-24 opacity-100 flex justify-start text-white">
        <h1>
          <HackerText text="ARSENAL" />
        </h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Category Card -->
        <div v-for="(category, index) in techCategories" :key="index" class="tech-category group">
          <div class="premium-card h-full p-8 md:p-10">
            <!-- Header -->
            <div class="flex items-center gap-5 mb-10">
              <div
                class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-accent-primary group-hover:scale-110 transition-all duration-500 shadow-glow-indigo">
                <component :is="category.icon" class="w-6 h-6" />
              </div>
              <h3
                class="text-xl font-black text-white tracking-widest uppercase group-hover:text-accent-primary transition-colors">
                {{ category.title }}</h3>
            </div>

            <!-- Tech List -->
            <div class="flex flex-wrap gap-2">
              <div v-for="(tech, tIndex) in category.items" :key="tIndex" class="tech-item">
                <div
                  class="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-[11px] font-bold uppercase tracking-widest text-text-secondary hover:text-white hover:border-white/20 transition-all duration-300">
                  {{ tech }}
                </div>
              </div>
            </div>
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
    items: ['Vue 3', 'Nuxt', 'TypeScript', 'React', 'React Native', 'HTML5/CSS3']
  },
  {
    title: 'Backend & Data',
    icon: ServerIcon,
    items: ['C#', '.NET Core', 'Node.js', 'Python', 'EF Core', 'SQL']
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
    title: 'Tools & DevOps',
    icon: CommandLineIcon,
    items: ['Git', 'Docker', 'VS Studio', 'Vite', 'NPM', 'GitHub Actions']
  },
  {
    title: 'Design',
    icon: WrenchScrewdriverIcon,
    items: ['Figma', 'Prototyping', 'Adobe XD', 'Photoshop']
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
