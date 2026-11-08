<template>
  <header class="bg-[#823fffc7] text-white px-7 py-6 mb-5 flex justify-between items-center sticky top-0 z-10 backdrop-blur-md h-[78px] box-border">
    <h1 class="text-2xl m-0 font-bold leading-none">
      <NuxtLink to="/" class="text-white no-underline">Jeshurun Villamor</NuxtLink>
    </h1>
    
    <div class="flex items-center gap-3.5 flex-wrap relative">
      <input type="checkbox" id="nav-toggle" class="hidden peer" />
      <label for="nav-toggle" class="hidden w-11 h-11 rounded-full bg-[#4a3fff] border-none cursor-pointer items-center justify-center relative" aria-label="Toggle Navigation">
        <span class="block w-[22px] h-0.5 bg-white rounded-xs relative transition-all duration-200 before:content-[''] before:block before:w-[22px] before:h-0.5 before:bg-white before:rounded-xs before:absolute before:-top-[7px] after:content-[''] after:block after:w-[22px] after:h-0.5 after:bg-white after:rounded-xs after:absolute after:top-[7px]"></span>
      </label>
      
      <nav class="flex gap-4 flex-wrap">
        <NuxtLink 
          to="/" 
          class="inline-block bg-[#4a3fff] text-white px-[18px] py-[10px] rounded-full font-semibold no-underline border border-white/40 transition-all duration-200 hover:bg-[#3326cc] hover:-translate-y-px hover:border-white"
        >
          Home
        </NuxtLink>
        <NuxtLink 
          to="/about" 
          class="inline-block bg-[#4a3fff] text-white px-[18px] py-[10px] rounded-full font-semibold no-underline border border-white/40 transition-all duration-200 hover:bg-[#3326cc] hover:-translate-y-px hover:border-white"
        >
          About
        </NuxtLink>
        <NuxtLink 
          to="/tech-stack" 
          class="inline-block bg-[#4a3fff] text-white px-[18px] py-[10px] rounded-full font-semibold no-underline border border-white/40 transition-all duration-200 hover:bg-[#3326cc] hover:-translate-y-px hover:border-white"
        >
          Tech Stack
        </NuxtLink>
        <NuxtLink 
          to="/certificates" 
          class="inline-block bg-[#4a3fff] text-white px-[18px] py-[10px] rounded-full font-semibold no-underline border border-white/40 transition-all duration-200 hover:bg-[#3326cc] hover:-translate-y-px hover:border-white"
        >
          Certifications
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>