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
  <div class="flex flex-col items-center justify-center p-5 bg-[#493fff91] backdrop-blur-md border border-white/20 rounded-[7px] text-white transition-all duration-200 hover:-translate-y-1 shadow-lg">
    <img :src="icon" :alt="name" class="w-[120px] h-[120px] object-contain mb-2.5 transition-transform duration-200 hover:-translate-y-1" />
    <p class="m-0 text-base font-bold tracking-wide">{{ name }}</p>
  </div>
</template>