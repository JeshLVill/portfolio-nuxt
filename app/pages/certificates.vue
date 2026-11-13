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
const url = useRequestURL()

const title = 'Certifications | Jeshurun Villamor'
const description = 'Certifications earned by Jeshurun Villamor: Word Associate, PowerPoint Associate'

useHead({
  title,
  link: [{ rel: 'canonical', href: url.href }],
})

useSeoMeta({
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: url.href,
  ogImage: `${url.origin}/images/certificates/word.jpg`,
  ogImageAlt: 'Microsoft Office Specialist Word Associate badge',
})
</script>

<template>
  <div class="mx-auto flex max-w-[1300px] flex-col gap-5 p-5 text-white">
    <main class="flex-1">
      <section class="mb-6 flex w-full justify-center px-6 text-center">
        <h2 class="text-4xl font-bold uppercase tracking-[0.12em]">Certifications</h2>
      </section>

      <div class="certificates-grid flex flex-wrap justify-center gap-10 p-4">
        <CertificateCard
          image="/images/certificates/word.jpg"
          title="MS Word Associate"
          alt="MS Word Associate Certificate"
          verification-url="https://www.certiport.com/portal/pages/credentialverification.aspx"
          @preview="openModal"
        />
        <CertificateCard
          image="/images/certificates/powerpoint.jpg"
          title="MS PowerPoint Associate"
          alt="MS PowerPoint Associate Certificate"
          verification-url="https://www.certiport.com/portal/pages/credentialverification.aspx"
          @preview="openModal"
        />
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
