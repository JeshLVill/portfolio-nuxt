<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { initAnimations } from '~/assets/animations.js'

const route = useRoute()

// Run on initial load
onMounted(() => {
  setTimeout(initAnimations, 0)
})

// Re-run every time the user navigates to a new page route
watch(() => route.path, () => {
  setTimeout(initAnimations, 0)
})
</script>

<script>
let vantaEffect = null

onMounted(() => {
  // Initialize Vanta Globe background
  if (window.VANTA && window.THREE) {
    vantaEffect = window.VANTA.GLOBE({
      el: "#background",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x823fff,
      backgroundColor: 0x12003c
    })
  }

  // GSAP entrance animation for body fade-in
  if (window.gsap) {
    window.gsap.to("body", { opacity: 1, duration: 1, ease: "power2.out" })
  }
})

onUnmounted(() => {
  if (vantaEffect) vantaEffect.destroy()
})
</script>

<template>
  <div class="relative min-h-screen bg-transparent text-white flex flex-col">
    <div id="background"></div>
    
    <!-- This is your new clean Navbar component -->
    <NavBar />
    
    <!-- Main content area -->
    <main class="flex-1">
      <NuxtPage />
    </main>
  </div>
</template>