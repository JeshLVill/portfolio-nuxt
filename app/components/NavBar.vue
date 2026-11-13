<script setup>
import { ref, watch } from 'vue'

const isMenuOpen = ref(false)
const route = useRoute()

watch(() => route.path, () => {
  isMenuOpen.value = false
})
</script>

<template>
  <header class="navbar relative sticky top-0 z-10 mb-5 flex min-h-[78px] items-center justify-between bg-[#823fffc7] px-5 py-4 text-white backdrop-blur-md sm:px-7">
    <h1 class="m-0 text-2xl font-bold leading-none">
      <NuxtLink to="/" class="text-white no-underline">Jeshurun Villamor</NuxtLink>
    </h1>

    <div>
      <button
        type="button"
        class="btn btn-circle flex h-11 w-11 items-center justify-center border-0 bg-[#4a3fff] md:hidden"
        aria-label="Toggle navigation"
        :aria-expanded="isMenuOpen"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span
          class="relative block h-0.5 w-[22px] bg-white transition-transform duration-200 before:absolute before:-top-[7px] before:left-0 before:block before:h-0.5 before:w-[22px] before:bg-white before:content-[''] after:absolute after:top-[7px] after:left-0 after:block after:h-0.5 after:w-[22px] after:bg-white after:content-['']"
          :class="{ 'rotate-45 before:rotate-90 before:top-0 after:opacity-0': isMenuOpen }"
        />
      </button>

      <nav
        class="nav-links absolute left-0 top-full hidden w-full flex-col gap-3 rounded-b-2xl border border-white/20 bg-[#823fffc7] p-4 shadow-xl backdrop-blur-md md:static md:flex md:w-auto md:flex-row md:gap-4 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none"
        :class="{ '!flex': isMenuOpen }"
      >
        <NuxtLink 
          to="/" 
          class="btn inline-block rounded-full border border-white/40 bg-[#4a3fff] px-[18px] py-[10px] font-semibold text-white no-underline transition-all duration-200 hover:-translate-y-px hover:border-white hover:bg-[#3326cc]"
        >
          Home
        </NuxtLink>
        <NuxtLink 
          to="/about" 
          class="btn inline-block rounded-full border border-white/40 bg-[#4a3fff] px-[18px] py-[10px] font-semibold text-white no-underline transition-all duration-200 hover:-translate-y-px hover:border-white hover:bg-[#3326cc]"
        >
          About
        </NuxtLink>
        <NuxtLink 
          to="/tech-stack" 
          class="btn inline-block rounded-full border border-white/40 bg-[#4a3fff] px-[18px] py-[10px] font-semibold text-white no-underline transition-all duration-200 hover:-translate-y-px hover:border-white hover:bg-[#3326cc]"
        >
          Tech Stack
        </NuxtLink>
        <NuxtLink 
          to="/certificates" 
          class="btn inline-block rounded-full border border-white/40 bg-[#4a3fff] px-[18px] py-[10px] font-semibold text-white no-underline transition-all duration-200 hover:-translate-y-px hover:border-white hover:bg-[#3326cc]"
        >
          Certifications
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>