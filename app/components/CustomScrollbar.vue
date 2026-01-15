<template>
  <div class="fixed right-4 top-1/2 -translate-y-1/2 h-64 w-[4px] z-[2000] flex flex-col items-center pointer-events-none">
    <!-- Scroll Track -->
    <div class="h-full w-full bg-white/5 relative">
      <!-- Scroll Thumb -->
      <div 
        class="absolute left-[-1px] w-[6px] bg-white transition-transform duration-100 ease-out rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]"
        :style="{ 
          height: `${thumbHeight}px`,
          transform: `translateY(${thumbTop}px)` 
        }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const trackHeight = 256 // Matches h-64 (64 * 4px)
const thumbHeight = 32
const thumbTop = ref(0)

const updateScroll = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight
  const winHeight = window.innerHeight
  
  if (docHeight > winHeight) {
    const scrollPercent = scrollTop / (docHeight - winHeight)
    // Map scroll percentage to the track height minus thumb height
    thumbTop.value = scrollPercent * (trackHeight - thumbHeight)
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
  window.addEventListener('resize', updateScroll)
  updateScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
  window.removeEventListener('resize', updateScroll)
})
</script>

<style scoped>
</style>
