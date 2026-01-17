<template>
  <div class="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
    <!-- Cursor Ring -->
    <div 
      ref="ringRef" 
      class="fixed w-8 h-8 rounded-full border border-accent-cyan/40 flex items-center justify-center transition-transform duration-0 ease-out"
      style="transform: translate(-50%, -50%)"
    >
      <!-- Center Dot -->
      <div class="w-1 h-1 bg-accent-cyan rounded-full shadow-[0_0_10px_rgba(0,217,255,0.8)]"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const ringRef = ref<HTMLElement | null>(null)

const onMouseMove = (e: MouseEvent) => {
  let x = e.clientX
  let y = e.clientY

  // Check for magnetic elements
  const target = e.target as HTMLElement
  const magneticElement = target.closest('[data-magnetic]') as HTMLElement
  
  if (magneticElement && ringRef.value) {
    const rect = magneticElement.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // Smoothly pull toward center
    x = centerX + (e.clientX - centerX) * 0.4
    y = centerY + (e.clientY - centerY) * 0.4
    
    gsap.to(ringRef.value, {
      width: rect.width + 20,
      height: rect.height + 20,
      borderRadius: '8px',
      borderColor: 'rgba(0, 217, 255, 0.8)',
      duration: 0.3
    })
  } else if (ringRef.value) {
    gsap.to(ringRef.value, {
      width: 32,
      height: 32,
      borderRadius: '50%',
      borderColor: 'rgba(0, 217, 255, 0.4)',
      duration: 0.3
    })
  }

  if (ringRef.value) {
    gsap.set(ringRef.value, {
      x,
      y
    })
  }
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
})
</script>

<style scoped>
/* Ensure the default cursor is hidden on the body when this component is active */
:global(body) {
  cursor: none !important;
}

:global(a), :global(button) {
  cursor: none !important;
}
</style>
