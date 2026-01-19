<template>
  <div class="fixed inset-0 -z-10 bg-bg-primary overflow-hidden">
    <ClientOnly>
      <TresCanvas window-size :clear-color="'#020202'" :power-preference="'high-performance'">
        <TresPerspectiveCamera :position="[0, 0, 10]" :look-at="[0, 0, 0]" />
        <TresAmbientLight :intensity="0.5" />

        <!-- Interactive Neural Web Logic -->
        <NeuralWeb />
      </TresCanvas>
    </ClientOnly>
    <div class="premium-vignette"></div>
    <div class="film-grain"></div>
  </div>
</template>

<script setup lang="ts">
import NeuralWeb from './NeuralWeb.vue'
</script>

<style scoped>
.film-grain {
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.015;
  pointer-events: none;
  z-index: 40;
}
</style>
