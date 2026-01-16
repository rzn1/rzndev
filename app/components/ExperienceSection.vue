<template>
  <section id="experience" class="section relative overflow-hidden">
    <div class="container mx-auto px-6 relative z-10">
      <div class="huge-text mb-24 opacity-100 flex justify-end md:justify-start text-white">
        <h1><HackerText text="JOURNEY" /></h1>
      </div>

      <div class="relative max-w-4xl mx-auto">
        <!-- The Circuit Line -->
        <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2 origin-top">
          <div class="timeline-progress h-full w-full bg-accent-blue origin-top scale-y-0"></div>
        </div>

        <!-- Experience Items -->
        <div class="flex flex-col gap-24 relative">
          <div 
            v-for="(job, index) in experiences" 
            :key="index"
            class="experience-item relative md:w-1/2 flex flex-col gap-4"
            :class="[
              index % 2 === 0 ? 'md:self-start md:pr-16 md:text-right md:items-end' : 'md:self-end md:pl-16 md:text-left md:items-start',
              'self-end pl-12 md:pl-0' /* Mobile: always right of line */
            ]"
          >
            <!-- Timeline Node (Dot) -->
            <div 
              class="absolute top-0 w-4 h-4 rounded-full border-2 border-accent-blue bg-bg-primary z-10 timeline-node transition-colors duration-500"
              :class="[
                index % 2 === 0 ? 'md:-right-[9px]' : 'md:-left-[9px]',
                '-left-[25px] md:auto' /* Mobile positioning */
              ]"
            ></div>

            <!-- Date -->
            <span class="text-accent-cyan font-mono text-sm tracking-widest uppercase mb-1 block">{{ job.period }}</span>
            
            <!-- Content Card -->
            <div class="lusion-card p-8 w-full hover:border-accent-blue/30 group">
              <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-accent-blue transition-colors">{{ job.role }}</h3>
              <h4 class="text-lg text-text-secondary font-medium mb-4">{{ job.company }}</h4>
              <p class="text-text-secondary/80 leading-relaxed mb-6 text-sm">{{ job.description }}</p>
              
              <!-- Tech Stack Tags -->
              <div class="flex flex-wrap gap-2" :class="index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'">
                <span 
                  v-for="tech in job.stack" 
                  :key="tech" 
                  class="px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/60 bg-white/5"
                >
                  {{ tech }}
                </span>
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

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#experience',
      start: 'top 70%',
    }
  })

  // Title Reveal
  tl.from('#experience .huge-text', {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
  })

  // Timeline Progress Line Animation
  gsap.to('.timeline-progress', {
    scrollTrigger: {
      trigger: '#experience',
      start: 'top 60%',
      end: 'bottom 80%',
      scrub: 1,
    },
    scaleY: 1,
    ease: 'none'
  })

  // Experience Items Reveal
  const items = document.querySelectorAll('.experience-item')
  items.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out'
    })
    
    // Light up the node when item is active
    const node = item.querySelector('.timeline-node')
    gsap.to(node, {
      scrollTrigger: {
        trigger: item,
        start: 'top 60%',
        end: 'bottom 60%',
        toggleActions: 'play reverse play reverse'
      },
      backgroundColor: '#00d9ff', // accent-blue
      boxShadow: '0 0 15px #00d9ff'
    })
  })
})

const experiences = [
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Self-Employed',
    period: '2020 - Present',
    description: 'Delivering custom web and software solutions for diverse clients. Specializing in high-performance websites, game server infrastructure, and scalable backend architectures.',
    stack: ['Vue 3', 'Nuxt', '.NET', 'Node.js']
  },
  {
    role: 'Full-Stack Developer',
    company: 'Zenith Roleplay LLC',
    period: '02/2025 - Present',
    description: 'Working remotely as a Full-Stack Developer, building and maintaining core game features and web integrations.',
    stack: ['Full-Stack', 'Remote', 'Game Dev']
  },
  {
    role: 'Founder & Lead Developer',
    company: 'FutureRP',
    period: '2020 - 2024',
    description: 'Founded and led a GTA V roleplay server community. Managed a team of 20+ staff and served 1000+ users. Architected the entire backend in C# (.NET Core) and frontend in VueJS, handling high-concurrency game logic and database interactions.',
    stack: ['C#', '.NET Core', 'VueJS', 'Node.js', 'MySQL']
  },
  {
    role: 'Full-Stack Developer',
    company: 'UndefinedRP',
    period: '05/2024 - 09/2024',
    description: 'Remote Full-Stack position focusing on game server development and web infrastructure.',
    stack: ['Full-Stack', 'Remote']
  },
  {
    role: 'Oracle Programming Intern',
    company: 'Ingenious IT',
    period: '03/2024 - 04/2024',
    description: 'Actively worked with the Java language, creating and improving business management systems. Gained experience in object-oriented programming principles and their practical application.',
    stack: ['Java', 'OOP', 'Business Systems']
  }
]
</script>

<style scoped>
/* Mobile adjustments for timeline positioning */
@media (max-width: 768px) {
  .timeline-progress, .circuit-line {
    left: 0;
  }
}
</style>
