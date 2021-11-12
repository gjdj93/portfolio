<template>
  <div class="h-screen">
    <Menu @toggleMenu="toggleMenu($event)"/>
    <div class="page flex flex-col md:flex-row h-full transition transform" :class="menuActive ? '-translate-x-64' : ''">
      <Sidebar/>
        <div class="content px-10 flex-auto">
          <transition name="fade" appear>
              <router-view/>
          </transition>
        </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import Sidebar from '@/components/Sidebar'
export default {
  name: 'App',
  components: {
    Menu,
    Sidebar
  },
  data() {
    return {
      menuActive: false
    }
  },
  methods: {
    toggleMenu(status) {
      this.menuActive = status;
    }
  }
}
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
