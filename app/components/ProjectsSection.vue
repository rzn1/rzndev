<template>
  <section id="projects" ref="triggerRef"
    class="h-screen bg-bg-primary overflow-hidden relative border-y border-white/5">
    <div ref="wrapperRef" class="flex h-full items-center px-[10vw]">
      <!-- Header Slide -->
      <div class="flex-shrink-0 w-[40vw] flex flex-col justify-center pr-20 slide">
        <h2 class="text-[8vw] font-black leading-none uppercase tracking-tighter text-white/10 mb-[-0.2em]">Selected
        </h2>
        <h3
          class="text-[10vw] font-black leading-none uppercase tracking-tighter text-white italic gradient-text-premium ml-[0.5em]">
          Works</h3>
        <p class="text-text-secondary mt-12 max-w-sm text-lg leading-relaxed border-l-2 border-accent-primary pl-8">
          A deep dive into high-performance engineering and creative vision. Scroll to navigate the archive.
        </p>
      </div>

      <!-- Project Slides -->
      <div v-for="(project, index) in projects" :key="index"
        class="flex-shrink-0 w-[80vw] md:w-[60vw] h-[70vh] px-10 slide relative group">
        <div
          class="premium-card w-full h-full flex flex-col overflow-hidden p-0 border-none group-hover:scale-[1.02] transition-transform duration-700">
          <div class="absolute inset-0 bg-bg-primary/40 group-hover:bg-transparent transition-colors duration-700 z-10">
          </div>

          <!-- Image -->
          <img :src="project.image" :alt="project.title"
            class="absolute inset-0 object-cover w-full h-full scale-110 group-hover:scale-100 transition-transform duration-1000">

          <!-- Content Overlay -->
          <div class="relative z-20 mt-auto p-12 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-transparent">
            <div class="flex flex-wrap gap-4 mb-6">
              <span v-for="tag in project.tags" :key="tag"
                class="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-accent-primary">{{
                  tag }}</span>
            </div>
            <h4
              class="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter transform group-hover:-skew-x-12 transition-transform duration-500">
              {{ project.title }}</h4>
            <div class="flex items-center justify-between">
              <p class="text-text-secondary max-w-md text-lg">{{ project.description }}</p>
              <div class="flex gap-6">
                <a v-if="project.demo" :href="project.demo" target="_blank"
                  class="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-bg-primary transition-all shadow-glow-indigo">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Numbering -->
          <div class="absolute top-12 right-12 z-20">
            <span class="text-[8vw] font-black text-white/5 leading-none uppercase italic">{{ (index +
              1).toString().padStart(2, '0') }}</span>
          </div>
        </div>
      </div>

      <!-- End Slide -->
      <div class="flex-shrink-0 w-max flex flex-col justify-center pl-24 pr-[20vw] slide">
        <h5 class="text-2xl font-black text-white/20 uppercase tracking-[0.4em] mb-4">The End</h5>
        <a href="#contact"
          class="text-5xl md:text-8xl font-black text-white hover:text-accent-primary transition-colors underline decoration-accent-primary underline-offset-8 whitespace-nowrap">Start
          the next mission.</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const triggerRef = ref<HTMLElement | null>(null)
const wrapperRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!wrapperRef.value || !triggerRef.value) return

  const scrollWidth = wrapperRef.value.scrollWidth

  gsap.to(wrapperRef.value, {
    x: () => -(scrollWidth - window.innerWidth),
    ease: 'none',
    scrollTrigger: {
      trigger: triggerRef.value,
      start: 'top top',
      end: () => `+=${scrollWidth}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    }
  })
})

const projects = [
  {
    title: 'AudioV',
    description: 'Bespoke high-fidelity architectural visualization for professional audio creators.',
    tags: ['WebGL', 'Creative', 'Architecture', 'Three.js'],
    image: '/projects/audiov.png',
    demo: 'https://audiomix-ecru.vercel.app/',
  },
  {
    title: 'FutureRP',
    description: 'Next-generation community ecosystem with real-time distributed systems.',
    tags: ['Full-Stack', 'Systems', 'GameDev'],
    image: '/projects/futurerp-web.png',
    demo: 'https://futurerp-website.vercel.app/',
  },
  {
    title: 'VYSN',
    description: 'Anchor your digital presence to the physical world. Capturing high-fidelity augmented experiences in a cinematic, glassmorphic interface.',
    tags: ['React Native', 'AR', 'Supabase', 'Design'],
    image: '/projects/vysn.png',
    demo: null,
  },
]
</script>

<style scoped></style>
