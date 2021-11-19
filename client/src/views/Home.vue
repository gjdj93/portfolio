<template>
  <div>
    <div class="text-center">
      <h1 class="text-4xl font-semibold max-w-lg mx-auto">
        Hi! My name is <span class="text-brand">Greg Ottley</span> and I am a
        <span class="text-brand">Developer</span>.
      </h1>
      <p class="tagline">
        Learn more about me by viewing my
        <a class="text-brand hover:underline" href="/resume">resume</a>, check
        out some of my work under
        <a class="text-brand hover:underline" href="/projects">projects</a>, or
        free to shoot me a message by
        <a
          class="text-brand hover:underline"
          href="mailto:hello@gregottley.co.uk"
          >email</a
        >.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.tagline {
  max-width: 30em;
  margin: 2em auto;
  font-weight: 300;
  line-height: 2em;
}
</style>
