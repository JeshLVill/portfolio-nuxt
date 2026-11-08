<template>
  <div class="flex min-h-[calc(100vh-100px)] items-center justify-center px-5 py-16">
    <section id="home" class="home w-full max-w-[520px] rounded-3xl border border-white/20 bg-[#493fff57] p-7 text-center shadow-2xl backdrop-blur-xl">
      <div class="home-content">
        <img src="/images/home/mypic.jpg" alt="Portrait of Jeshurun Villamor" class="home-pic mx-auto mb-6 h-[180px] w-[180px] rounded-full border-4 border-white/50 object-cover">
        <h2 class="mb-4 text-4xl font-bold text-white">Hi, I'm Jeshurun Villamor</h2>
        <p class="mb-7 leading-relaxed text-white">Welcome to my portfolio. Click below to learn more about me.</p>
        <NuxtLink class="button get-started inline-block rounded-full border border-white/40 bg-[#4a3fff] px-7 py-3.5 font-semibold text-white no-underline transition hover:-translate-y-px hover:bg-[#3326cc]" to="/about">Get Started</NuxtLink>
      </div>
    </section>
  </div>
</template>