<script setup>
const url = useRequestURL()

const title = 'Tech Stack | Jeshurun Villamor'
const description = 'Explore the tech stack of Jeshurun Villamor, including programming languages, frameworks, and tools used in development projects.'

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
  <div class="max-w-[1300px] mx-auto p-5 flex flex-col gap-5 text-white">
    <!-- Page Heading -->
    <div class="w-full flex justify-center items-center max-w-[1280px] mx-auto mb-6 px-6 text-center">
      <h2 class="text-white text-[clamp(2rem,2.5vw,2.6rem)] tracking-[0.12em] uppercase font-bold m-0">
        Tech Stack
      </h2>
    </div>

    <!-- Tech Grid -->
    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <TechCard name="Java" icon="/images/tech-stack/java.png" />
      <TechCard name="JavaScript" icon="/images/tech-stack/javascript.png" />
      <TechCard name="Python" icon="/images/tech-stack/python.png" />
      <TechCard name="HTML" icon="/images/tech-stack/html.png" />
      <TechCard name="CSS" icon="/images/tech-stack/css.png" />
      <TechCard name="Git" icon="/images/tech-stack/git.png" />
      <TechCard name="GitHub" icon="/images/tech-stack/github.png" />
      <TechCard name="PostgreSQL" icon="/images/tech-stack/postgresql.png" />
      <TechCard name="VS Code" icon="/images/tech-stack/vscode.png" />
      <TechCard name="C" icon="/images/tech-stack/c.png" />
    </div>
  </div>
</template>