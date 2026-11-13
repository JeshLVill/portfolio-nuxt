<script setup>
const url = useRequestURL()


const title = 'About | Jeshurun Villamor'
const description = 'Learn more about Jeshurun Villamor, a passionate developer with expertise in Java, JavaScript, Python, and more. Discover his journey, skills, and projects in the world of software development.'


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
})
</script>
<template>
  <div class="mx-auto flex max-w-[1300px] flex-col gap-5 p-5 text-white">
    <main class="flex-1">
      <section class="mb-6 flex w-full justify-center px-6 text-center">
        <h2 class="text-4xl font-bold uppercase tracking-[0.12em]">About</h2>
      </section>
      <div class="about-content mx-auto w-full max-w-[1100px]">
        <div class="about-grid grid gap-6">
          <AboutCard
            title="About Me"
            content="As a passionate developer, I actively seek out new technologies and enjoy working on interactive projects. I have developed applications as a Java programmer, and built systems based on GUIs and databases. These experiences created opportunities to strengthen my programming and problem solving skills. I prefer to build well-designed projects and think about the interactive experiences of the users. I strive to improve my creativity and technical expertise in all my work, beyond programming projects."
          />
          <AboutCard
            title="Aspirations"
            content="I intend to become an accomplished software developer with an aspiration to work in game development. I have a keen interest in designing games and other digital products that can be enjoyed by many people while at the same time upgrading my programming, design, and development skills. My dream for the future is to work in interesting projects that are both creative and technological."
          />
        </div>
      </div>
    </main>
  </div>
</template>