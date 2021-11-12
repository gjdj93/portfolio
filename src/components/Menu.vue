<template>
  <button class="fixed top-20 right-20 z-50" :title=" `${active ? 'Close' : 'Open'} Menu`" @click="toggleMenu">Button</button>
  <ul class="menu bg-blue-800 text-white flex flex-col justify-center text-center h-full w-64 fixed z-40 top-0 left-full transition transform" :class="active ? '-translate-x-full' : ''">
    <li class="menu-item block"><router-link to="/">Home</router-link></li>
    <li class="menu-item block"><router-link to="/about">About</router-link></li>
  </ul>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      active: false,
    }
  },
  methods: {
    toggleMenu() {
      let menuActive = !this.active;
      this.$emit('toggleMenu', menuActive);
      return this.active = menuActive;
    }
  },
  mounted() {
    this.toggleMenu()
  },
  watch: {
    '$route' () {
      this.toggleMenu()
    }
  }
}
</script>

<style>

</style>