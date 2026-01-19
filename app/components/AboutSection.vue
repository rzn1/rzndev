<template>
  <section id="about" class="section bg-bg-primary relative overflow-hidden">
    <div class="container mx-auto px-6 relative z-10">
      <div class="huge-text mb-24 opacity-100 text-white flex justify-end">
        <h1>
          <HackerText text="ABOUT" />
        </h1>
      </div>

      <div class="flex flex-col gap-24">
        <!-- Bio -->
        <div class="max-w-4xl about-bio">
          <p class="text-3xl md:text-5xl font-bold leading-tight mb-8 text-white">
            I'm a Software Systems Engineer who bridges <span class="gradient-text-premium">robust architecture</span>
            and <span class="italic text-white/40">immersive design</span> to create digital
            experiences.
          </p>
          <p class="text-xl text-text-secondary leading-relaxed max-w-2xl border-l-2 border-accent-primary pl-8">
            With a focus on performance, security, and scalable systems, I build web applications
            that are as functional as they are beautiful. My approach combines technical precision with creative
            experimentation.
          </p>
        </div>

        <!-- Skills Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div v-for="(skill, index) in skills" :key="index" class="premium-card skill-card group">
            <div
              class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-8 group-hover:bg-accent-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-glow-indigo">
              <component :is="skill.icon" class="w-7 h-7" />
            </div>
            <h3
              class="text-xl font-bold mb-4 tracking-tight text-white group-hover:text-accent-primary transition-colors">
              {{ skill.name }}</h3>
            <p class="text-text-secondary leading-relaxed text-sm">{{ skill.description }}</p>
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
