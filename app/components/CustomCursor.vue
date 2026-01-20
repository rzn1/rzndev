<template>
  <div class="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
    <!-- Cursor Ring -->
    <div ref="ringRef"
      class="fixed w-6 h-6 rounded-full border border-accent-primary/50 flex items-center justify-center transition-transform duration-0 ease-out z-[9999]"
      style="transform: translate(-50%, -50%)">
      <!-- Center Dot -->
      <div class="w-1 h-1 bg-white rounded-full shadow-glow-indigo"></div>
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

  // Check for magnetic elements or interactive elements
  const target = e.target as HTMLElement
  const interactiveElement = target.closest('[data-magnetic], a, button') as HTMLElement

  if (interactiveElement && ringRef.value) {
    const isMagnetic = interactiveElement.hasAttribute('data-magnetic')
    const rect = interactiveElement.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Pull towards center if magnetic
    if (isMagnetic) {
      x = centerX + (e.clientX - centerX) * 0.3
      y = centerY + (e.clientY - centerY) * 0.3
    }

    gsap.to(ringRef.value, {
      width: isMagnetic ? rect.width + 10 : 60,
      height: isMagnetic ? rect.height + 10 : 60,
      borderRadius: isMagnetic ? '12px' : '50%',
      borderColor: 'rgba(99, 102, 241, 0.8)',
      backgroundColor: 'rgba(99, 102, 241, 0.05)',
      duration: 0.4,
      ease: 'power3.out'
    })
  } else if (ringRef.value) {
    gsap.to(ringRef.value, {
      width: 24,
      height: 24,
      borderRadius: '50%',
      borderColor: 'rgba(99, 102, 241, 0.5)',
      backgroundColor: 'transparent',
      duration: 0.4,
      ease: 'power3.out'
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

:global(a),
:global(button) {
  cursor: none !important;
}
</style>
