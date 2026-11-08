<script setup>
import { nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { initAnimations } from '~/assets/animations.js'

const route = useRoute()

const animatePage = async () => {
  await nextTick()
  requestAnimationFrame(initAnimations)
}

onMounted(animatePage)
watch(() => route.path, animatePage)
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