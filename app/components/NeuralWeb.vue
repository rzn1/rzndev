<template>
  <TresGroup>
    <!-- Neural Web Lines -->
    <TresLineSegments ref="linesRef">
      <TresBufferGeometry ref="linesGeometryRef" />
      <TresLineBasicMaterial 
        :color="lineColor" 
        :transparent="true" 
        :opacity="0.25" 
        :blending="THREE_CONST.AdditiveBlending"
        :depthWrite="false"
      />
    </TresLineSegments>

    <!-- Neural Nodes (Glow points) -->
    <TresPoints ref="nodesRef">
      <TresBufferGeometry ref="nodesGeometryRef" />
      <TresPointsMaterial
        :size="0.06"
        :color="lineColor"
        :transparent="true"
        :opacity="0.6"
        :blending="THREE_CONST.AdditiveBlending"
        :depthWrite="false"
      />
    </TresPoints>

    <!-- Volumetric Stardust -->
    <TresPoints ref="particlesRef">
      <TresBufferGeometry ref="pointsGeometryRef" />
      <TresPointsMaterial
        :size="0.03"
        color="#ffffff"
        :transparent="true"
        :opacity="0.2"
        :blending="THREE_CONST.AdditiveBlending"
        :depthWrite="false"
      />
    </TresPoints>
  </TresGroup>
</template>

<script setup lang="ts">
import { ref, shallowRef, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

// useRenderLoop and useTresContext are auto-imported by @tresjs/nuxt
const { onLoop } = useRenderLoop()

const THREE_CONST = THREE
const lineColor = '#00d9ff'

const linesRef = shallowRef()
const linesGeometryRef = shallowRef()
const nodesRef = shallowRef()
const nodesGeometryRef = shallowRef()
const particlesRef = shallowRef()
const pointsGeometryRef = shallowRef()

// Mouse smoothing
const mouseX = ref(0)
const mouseY = ref(0)
const targetMouseX = ref(0)
const targetMouseY = ref(0)
const lerpFactor = 0.05

const handleMouseMove = (event: MouseEvent) => {
  targetMouseX.value = (event.clientX / window.innerWidth) * 2 - 1
  targetMouseY.value = -(event.clientY / window.innerHeight) * 2 + 1
}

// Generative Web Configuration
const GRID_SIZE = 12
const NODE_COUNT = GRID_SIZE * GRID_SIZE
const nodes = Array.from({ length: NODE_COUNT }, (_, i) => ({
  baseX: (i % GRID_SIZE - GRID_SIZE / 2) * 2.5,
  baseY: (Math.floor(i / GRID_SIZE) - GRID_SIZE / 2) * 2.5,
  baseZ: (Math.random() - 0.5) * 5,
  x: 0, y: 0, z: 0,
}))

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  
  // Initialize Stardust Particles
  if (pointsGeometryRef.value) {
    const particleCount = 400
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30
    }
    pointsGeometryRef.value.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  }

  // Initialize Web Nodes
  if (nodesGeometryRef.value) {
    const positions = new Float32Array(NODE_COUNT * 3)
    nodesGeometryRef.value.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  }
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})

onLoop(({ elapsed }) => {
  mouseX.value += (targetMouseX.value - mouseX.value) * lerpFactor
  mouseY.value += (targetMouseY.value - mouseY.value) * lerpFactor

  // Update Nodes
  const nodePositions = nodesGeometryRef.value?.attributes.position.array
  if (nodePositions) {
    nodes.forEach((node, i) => {
      const time = elapsed * 0.5
      const noiseX = Math.sin(time + node.baseY * 0.5) * 0.5
      const noiseY = Math.cos(time + node.baseX * 0.5) * 0.5
      
      const dx = mouseX.value * 5 - node.baseX
      const dy = mouseY.value * 5 - node.baseY
      const dist = Math.sqrt(dx * dx + dy * dy)
      const force = Math.max(0, (4 - dist) / 4)
      
      node.x = node.baseX + noiseX + dx * force * 0.5
      node.y = node.baseY + noiseY + dy * force * 0.5
      node.z = node.baseZ + Math.sin(time + i) * 0.8
      
      nodePositions[i * 3] = node.x
      nodePositions[i * 3 + 1] = node.y
      nodePositions[i * 3 + 2] = node.z
    })
    nodesGeometryRef.value.attributes.position.needsUpdate = true
  }

  // Update Lines
  if (linesGeometryRef.value) {
    const linePositions: number[] = []
    for (let i = 0; i < NODE_COUNT; i++) {
      const row = Math.floor(i / GRID_SIZE)
      const col = i % GRID_SIZE
      
      if (col < GRID_SIZE - 1) {
        const next = i + 1
        linePositions.push(nodes[i].x, nodes[i].y, nodes[i].z)
        linePositions.push(nodes[next].x, nodes[next].y, nodes[next].z)
      }
      if (row < GRID_SIZE - 1) {
        const next = i + GRID_SIZE
        linePositions.push(nodes[i].x, nodes[i].y, nodes[i].z)
        linePositions.push(nodes[next].x, nodes[next].y, nodes[next].z)
      }
      if (col < GRID_SIZE - 1 && row < GRID_SIZE - 1) {
        const next = i + GRID_SIZE + 1
        linePositions.push(nodes[i].x, nodes[i].y, nodes[i].z)
        linePositions.push(nodes[next].x, nodes[next].y, nodes[next].z)
      }
    }
    linesGeometryRef.value.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
  }

  // Animate Stardust
  if (particlesRef.value) {
    particlesRef.value.rotation.y = elapsed * 0.02
    particlesRef.value.rotation.z = elapsed * 0.01
    particlesRef.value.position.x = mouseX.value * 0.5
    particlesRef.value.position.y = mouseY.value * 0.5
  }
})
</script>
