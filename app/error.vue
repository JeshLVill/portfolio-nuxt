<script setup>
const props = defineProps({
  error: Object
})

// Safely clear the error and redirect home
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-[#32224d] text-white px-6">
    <div class="text-center max-w-md">
      <!-- Error Status Code -->
      <h1 class="text-9xl font-black text-[#4a3fff] tracking-wider mb-2 drop-shadow-[0_0_20px_rgba(74,63,255,0.4)]">
        {{ error?.status || '404' }}
      </h1>
      
      <!-- Error Heading -->
      <h2 class="text-3xl font-bold mb-3 tracking-wide">
        {{ error?.status === 404 ? 'Page Not Found' : 'Something Went Wrong' }}
      </h2>
      
      <!-- Description Message -->
      <p class="text-gray-400 mb-8 text-sm md:text-base font-light">
        {{ error?.message || "Oops! The page you are looking for doesn't exist or has been moved." }}
      </p>
      
      <!-- Return Home Button -->
      <button 
        @click="handleError"
        class="btn bg-[#4a3fff] hover:bg-[#3b31cc] border-none text-white font-medium px-8 py-3 rounded-lg shadow-lg shadow-[#4a3fff]/30 transition-all duration-200"
      >
        Back to Home
      </button>
    </div>
  </div>
</template>