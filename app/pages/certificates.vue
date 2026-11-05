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
  <div class="container">
    <main>
      <section class="page-heading">
        <h2>Certifications</h2>
      </section>

      <div class="certificates-grid">
        <!-- MS Word Certificate Card -->
        <div class="cert-card">
          <img 
            src="/images/WordCertificate.jpg" 
            class="cert-img"
            @click="openModal('/images/WordCertificate.jpg')"
            alt="MS Word Associate Certificate"
          >
          <p class="cert-title">MS Word Associate</p>
          <a 
            href="https://www.certiport.com/portal/pages/credentialverification.aspx"
            target="_blank" 
            class="verify-btn"
          >
            Verify Certification
          </a>
        </div>

        <!-- MS PowerPoint Certificate Card -->
        <div class="cert-card">
          <img 
            src="/images/PowerPointCertificate.jpg" 
            class="cert-img"
            @click="openModal('/images/PowerPointCertificate.jpg')"
            alt="MS PowerPoint Associate Certificate"
          >
          <p class="cert-title">MS PowerPoint Associate</p>
          <a 
            href="https://www.certiport.com/portal/pages/credentialverification.aspx"
            target="_blank" 
            class="verify-btn"
          >
            Verify Certification
          </a>
        </div>
      </div>

      <!-- Image Preview Modal -->
      <div 
        v-if="isModalOpen" 
        @click="closeModal"
        class="modal-overlay"
      >
        <img :src="modalSrc" class="modal-content">
      </div>
    </main>
  </div>
</template>

<style scoped>
.certificates-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  padding: 1rem;
}

.cert-card {
  width: 100%;
  max-width: 450px;
  padding: 1.25rem;
  text-align: center;
  background-color: rgba(73, 63, 255, 0.35);
  border-radius: 0.5rem;
  box-shadow: 0 25px 50px -12px rgba(73, 63, 255, 0.4);
  transition: transform 0.3s ease;
  cursor: pointer;
  margin: 1.5rem;
}

.cert-card:hover {
  transform: scale(1.05);
}

.cert-img {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  cursor: pointer;
  display: block;
}

.cert-title {
  display: block;
  font-weight: 700;
  color: #ffffff;
  padding-top: 0.5rem;
  margin: 0.5rem 0;
  font-size: 1.5rem;
}

.verify-btn {
  display: inline-block;
  margin-top: 0.75rem;
  padding: 0.5rem 1rem;
  background-color: #6215f1c8;
  color: #ffffff;
  font-weight: 600;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.verify-btn:hover {
  background-color: #493fffa1;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  cursor: pointer;
}

.modal-content {
  max-width: 90%;
  max-height: 90%;
  border-radius: 0.25rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
</style>