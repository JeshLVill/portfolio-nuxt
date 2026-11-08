<script setup>
import { ref } from 'vue'

const isModalOpen = ref(false)
const modalSrc = ref('')

const openModal = (src) => {
  modalSrc.value = src
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  modalSrc.value = ''
}
</script>

<template>
  <div class="mx-auto flex max-w-[1300px] flex-col gap-5 p-5 text-white">
    <main class="flex-1">
      <section class="mb-6 flex w-full justify-center px-6 text-center">
        <h2 class="text-4xl font-bold uppercase tracking-[0.12em]">Certifications</h2>
      </section>

      <div class="certificates-grid flex flex-wrap justify-center gap-10 p-4">
        <!-- MS Word Certificate Card -->
        <div class="cert-card w-full max-w-[450px] rounded-lg bg-[#493fff59] p-5 text-center shadow-2xl transition-transform hover:scale-105">
          <img 
            src="/images/certificates/word.jpg" 
            class="cert-img block w-full cursor-pointer rounded-lg"
            @click="openModal('/images/certificates/word.jpg')"
            alt="MS Word Associate Certificate"
          >
          <p class="cert-title my-2 text-xl font-bold">MS Word Associate</p>
          <a 
            href="https://www.certiport.com/portal/pages/credentialverification.aspx"
            target="_blank" 
            class="verify-btn mt-3 inline-block rounded-lg bg-[#6215f1c8] px-4 py-2 font-semibold text-white no-underline transition hover:bg-[#493fffa1]"
          >
            Verify Certification
          </a>
        </div>

        <!-- MS PowerPoint Certificate Card -->
        <div class="cert-card w-full max-w-[450px] rounded-lg bg-[#493fff59] p-5 text-center shadow-2xl transition-transform hover:scale-105">
          <img 
            src="/images/certificates/powerpoint.jpg" 
            class="cert-img block w-full cursor-pointer rounded-lg"
            @click="openModal('/images/certificates/powerpoint.jpg')"
            alt="MS PowerPoint Associate Certificate"
          >
          <p class="cert-title my-2 text-xl font-bold">MS PowerPoint Associate</p>
          <a 
            href="https://www.certiport.com/portal/pages/credentialverification.aspx"
            target="_blank" 
            class="verify-btn mt-3 inline-block rounded-lg bg-[#6215f1c8] px-4 py-2 font-semibold text-white no-underline transition hover:bg-[#493fffa1]"
          >
            Verify Certification
          </a>
        </div>
      </div>

      <Teleport to="body">
        <div
          v-if="isModalOpen"
          class="certificate-modal fixed inset-0 flex cursor-pointer items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
          @click.self="closeModal"
        >
          <img
            :src="modalSrc"
            class="max-h-[90vh] max-w-[90vw] rounded shadow-2xl"
            alt="Certificate preview"
            @click.stop
          >
        </div>
      </Teleport>
    </main>
  </div>
</template>

<style scoped>
.certificate-modal {
  position: fixed;
  z-index: 9999;
  inset: 0;
  isolation: isolate;
}
</style>
