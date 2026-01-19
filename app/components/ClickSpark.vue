<template>
  <div class="pointer-events-none fixed inset-0 z-[99999]" ref="sparkContainer">
    <!-- Sparks will be injected here -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'

const sparkContainer = ref<HTMLElement | null>(null)

const createSpark = (x: number, y: number) => {
  if (!sparkContainer.value) return

  const particleCount = 8
  const colors = ['#6366f1', '#ffffff']

  for (let i = 0; i < particleCount; i++) {
    const el = document.createElement('div')
    el.style.position = 'absolute'
    el.style.width = '2px'
    el.style.height = '2px'
    el.style.borderRadius = '50%'
    const color = colors[Math.floor(Math.random() * colors.length)] || '#ffffff'
    el.style.backgroundColor = color
    el.style.left = `${x}px`
    el.style.top = `${y}px`
    el.style.pointerEvents = 'none'

    sparkContainer.value.appendChild(el)

    const angle = Math.random() * Math.PI * 2
    const velocity = 20 + Math.random() * 40

    gsap.to(el, {
      x: Math.cos(angle) * velocity,
      y: Math.sin(angle) * velocity,
      opacity: 0,
      scale: 0,
      duration: 0.5 + Math.random() * 0.3,
      ease: 'power2.out',
      onComplete: () => {
        el.remove()
      }
    })
  }
}

const handleClick = (e: MouseEvent) => {
  createSpark(e.clientX, e.clientY)
}

onMounted(() => {
  window.addEventListener('click', handleClick)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClick)
})
</script>

<style scoped></style>
