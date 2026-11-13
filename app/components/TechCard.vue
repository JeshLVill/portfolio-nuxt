<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="tech-item flex flex-col items-center justify-center rounded-[7px] border border-white/20 bg-[#493fff91] p-5 text-white shadow-lg backdrop-blur-md transition-all duration-100 hover:-translate-y-1">
    <img :src="icon" :alt="name" class="w-[120px] h-[120px] object-contain mb-2.5 transition-transform duration-200 hover:-translate-y-1" />
    <p class="m-0 text-base font-bold tracking-wide">{{ name }}</p>
  </div>
</template>