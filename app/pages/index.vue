<script setup>
const url = useRequestURL()

const title = 'Home | Jeshurun Villamor'
const description = 'Welcome to the portfolio of Jeshurun Villamor, a passionate developer with expertise in Java, JavaScript, Python, and more. Explore my projects, certifications, and tech stack.'

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
  ogImage: `${url.origin}/images/home/mypic.jpg`, 
  ogImageAlt: 'Jeshurun Villamor portrait image',
})
</script>

<template>
  <div class="flex min-h-[calc(100vh-100px)] items-center justify-center px-5 py-16">
    <HomeCard />
  </div>
</template>