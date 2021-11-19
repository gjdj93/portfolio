<template>
  <div class="header flex flex-row justify-between items-center py-4 px-10%">
    <h1 class="order-1 text-xl font-bold"><a href="/">Greg</a></h1>
    <Menu />
    <Social />
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import Social from "@/components/Social";
export default {
  name: "Header",
  components: {
    Menu,
    Social,
  },
};
</script>

<style scoped></style>
