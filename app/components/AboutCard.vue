<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <article class="about-box card rounded-3xl border border-white/20 bg-[#473dff61] text-lg shadow-2xl">
    <div class="card-body p-7 md:p-9">
      <h2 class="card-title mb-4 text-3xl">{{ title }}</h2>
      <p class="leading-7 text-[#f5f5ff]">{{ content }}</p>
    </div>
  </article>
</template>
