<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  verificationUrl: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['preview'])
</script>

<template>
  <article class="cert-card card w-full max-w-[450px] rounded-lg bg-[#493fff59] text-center shadow-2xl transition-transform hover:scale-105">
    <img
      :src="image"
      class="cert-img block w-full cursor-pointer rounded-lg"
      :alt="alt"
      @click="emit('preview', image)"
    >
    <div class="card-body items-center p-5">
      <p class="cert-title my-2 text-xl font-bold">{{ title }}</p>
      <a
        :href="verificationUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="verify-btn btn mt-3 rounded-lg border-0 bg-[#6215f1c8] px-4 py-2 font-semibold text-white no-underline transition hover:bg-[#493fffa1]"
      >
        Verify Certification
      </a>
    </div>
  </article>
</template>
