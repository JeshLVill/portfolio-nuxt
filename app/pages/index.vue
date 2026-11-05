<!-- pages/index.vue -->
<template>
  <div>
    <div id="background"></div>

    <header>
      <h1>Jeshurun Villamor</h1>
      <div class="header-actions">
        <input type="checkbox" id="nav-toggle" class="nav-toggle-input" aria-hidden="true">
        <label for="nav-toggle" class="nav-toggle" aria-label="Toggle navigation"><span></span></label>
        <nav class="nav-links">
          <NuxtLink class="button home-button" to="/">Home</NuxtLink>
          <NuxtLink class="button about-button" to="/about">About</NuxtLink>
          <NuxtLink class="button techstack-button" to="/tech-stack">Tech Stack</NuxtLink>
          <NuxtLink class="button certificates-button" to="/certificates">Certifications</NuxtLink>
        </nav>
      </div>
    </header>

    <section class="home" id="home">
      <div class="home-content">
        <img src="/images/mypic.jpg" alt="Portrait of Jeshurun Villamor" class="home-pic">
        <h2>Hi, I'm Jeshurun Villamor</h2>
        <p>Welcome to my portfolio. Click below to learn more about me.</p>
        <NuxtLink class="button get-started" to="/about">Get Started</NuxtLink>
      </div>
    </section>
  </div>
</template>