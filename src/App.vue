<template>
  <div class="overflow-hidden w-full h-screen bg-gray-900 text-white">
    <div class="page flex flex-col h-full transition duration-500 transform">
      <Header />
      <div class="content relative px-10% flex-auto overflow-auto">
        <!-- <transition name="fade" appear> -->
        <router-view />
        <!-- </transition> -->
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  position: absolute;
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
