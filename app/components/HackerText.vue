<template>
  <span 
    class="hacker-text inline-block font-mono"
    @mouseenter="startScramble"
  >
    {{ displayText }}
  </span>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const props = defineProps<{
  text: string
  hoverOnly?: boolean
  speed?: number
}>()

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&'
const displayText = ref(props.text)
let interval: any = null

const startScramble = () => {
  let iteration = 0
  
  clearInterval(interval)
  
  interval = setInterval(() => {
    displayText.value = props.text
      .split('')
      .map((letter, index) => {
        if (index < iteration) {
          return props.text[index]
        }
        return chars[Math.floor(Math.random() * chars.length)]
      })
      .join('')
    
    if (iteration >= props.text.length) {
      clearInterval(interval)
    }
    
    iteration += 1 / 3
  }, 30)
}

onMounted(() => {
  if (!props.hoverOnly) {
    startScramble()
  }
})

// Re-run if text changes
watch(() => props.text, () => {
  startScramble()
})
</script>

<style scoped>
.hacker-text {
  /* Ensure it doesn't jump in size too much */
  min-width: 1ch; 
}
</style>
