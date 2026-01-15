<template>
  <section id="about" class="section bg-bg-primary/50 relative overflow-hidden">
    <div class="container mx-auto px-6 relative z-10">
      <div class="huge-text mb-24 opacity-100 text-white">
        <h1><HackerText text="ABOUT" /></h1>
      </div>

      <div class="flex flex-col gap-24">
        <!-- Bio -->
        <div class="max-w-4xl about-bio">
          <p class="text-3xl md:text-5xl font-bold leading-tight mb-8 text-white">
            I'm a developer who bridges <span class="gradient-text-lusion">design and code</span> to create digital
            experiences.
          </p>
          <p class="text-xl text-text-secondary leading-relaxed max-w-2xl">
            With a focus on performance and obsidian aesthetics, I build web applications
            that are as functional as they are beautiful.
          </p>
        </div>

        <!-- Skills Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          <div v-for="(skill, index) in skills" :key="index" class="lusion-card skill-card group">
            <div class="w-14 h-14 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-8 group-hover:scale-110 group-hover:bg-accent-blue/20 transition-all duration-500">
              <component :is="skill.icon" class="w-7 h-7" />
            </div>
            <h3 class="text-xl font-bold mb-4 tracking-tight text-white group-hover:text-accent-blue transition-colors">{{ skill.name }}</h3>
            <p class="text-text-secondary leading-relaxed">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { 
  BoltIcon, 
  PaintBrushIcon, 
  CommandLineIcon, 
  CubeTransparentIcon, 
  RocketLaunchIcon, 
  DevicePhoneMobileIcon 
} from '@heroicons/vue/24/outline'

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#about',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  })

  // 1. Reveal title
  tl.from('#about .huge-text', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })
  
  // 2. Reveal Bio text
  .from('.about-bio > *', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  }, '-=0.6')

  // 3. Reveal Skill Cards one by one
  .from('.skill-card', {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.15, // Sequential feel
    ease: 'power2.out',
    clearProps: 'all'
  }, '-=0.4')
})

const skills = [
  {
    icon: BoltIcon,
    name: 'Frontend',
    description: 'Specializing in Vue.js, Nuxt, and performance-driven UI.',
  },
  {
    icon: PaintBrushIcon,
    name: 'Creative',
    description: 'Blending aesthetics with interactive WebGL experiences.',
  },
  {
    icon: CommandLineIcon,
    name: 'Backend',
    description: 'Robust Node.js solutions and seamless API integrations.',
  },
  {
    icon: CubeTransparentIcon,
    name: '3D Web',
    description: 'Building immersive worlds with Three.js and TresJS.',
  },
  {
    icon: RocketLaunchIcon,
    name: 'Optimization',
    description: 'Ensuring lightning-fast load times and smooth motion.',
  },
  {
    icon: DevicePhoneMobileIcon,
    name: 'Responsive',
    description: 'Flawless experiences across all modern devices.',
  },
]
</script>

<style scoped></style>
