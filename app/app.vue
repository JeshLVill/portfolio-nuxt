<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { initAnimations } from '~/assets/animations.js'

const route = useRoute()

// Run on initial load
onMounted(() => {
  setTimeout(initAnimations, 100)
})

// Re-run every time the user navigates to a new page route
watch(() => route.path, () => {
  setTimeout(initAnimations, 100)
})

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
  <div>
    <div id="background"></div>

    <!-- Global Header / Navbar -->
    <header>
      <h1>Jeshurun Villamor</h1>
      <div class="header-actions">
        <input type="checkbox" id="nav-toggle" class="nav-toggle-input" aria-hidden="true">
        <label for="nav-toggle" class="nav-toggle" aria-label="Toggle navigation"><span></span></label>
        <nav class="nav-links">
          <NuxtLink class="button home-button" to="/">Home</NuxtLink>
          <NuxtLink class="button about-button" to="/about">About</NuxtLink>
          <NuxtLink class="button techstack-button" to="/tech-stack">Tech Stack</NuxtLink>
          <NuxtLink class="button certificates-button" to="/certificates">Certifications</NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Active Page Renders Here -->
    <NuxtPage />
  </div>
</template>