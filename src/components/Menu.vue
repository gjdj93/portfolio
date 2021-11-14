<template>
  <div :class="order">
    <button class="menu__btn z-50" :class="`${active ? 'menu--active' : ''}`" :title=" `${active ? 'Close' : 'Open'} Menu`" @click="toggleMenu"><span class="line-1"></span><span class="line-2"></span><span class="line-3"></span></button>
    <ul class="menu bg-gray-900 text-white flex flex-col justify-center text-center h-full w-64 max-w-full fixed z-40 top-0 right-0 transition duration-500 transform" :class="active ? 'menu--active' : 'translate-x-full'">
      <li class="menu-item block" v-for="route in routes" :key="route.name">
        <router-link class="transition duration-500" :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { routes } from '@/router'
export default {
  name: 'Menu',
  props: {
    order: {
      type: String,
      required: false,
      default: 'order-3'
    }
  },
  data() {
    return {
      active: false,
      routes: routes
    }
  },
  methods: {
    toggleMenu() {
      let menuActive = !this.active;
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

<style scoped>
  .menu__btn {
    position: relative;
    display: block;
    width: 2em;
    height: 2em;
  }
  .menu__btn span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    display: block;
    width: 100%;
    height: 2px;
    background: #07d48a;
    transform-origin: center;
    transition: opacity .5s, transform .5s;
  }
  .menu__btn .line-1 {
    transform: translateY(-8px);
  }
  .menu__btn .line-3 {
    transform: translateY(8px);
  }

  .menu__btn.menu--active .line-1 {
    transform: translateY(0) rotate(-225deg);
  }
  .menu__btn.menu--active .line-2 {
    transform: translateX(100px);
    opacity: 0;
  }
  .menu__btn.menu--active .line-3 {
    transform: translateY(0) rotate(225deg);
  }
  .menu:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 100%;
    width: 0;
    opacity: 0;
    background: rgba(0,0,0,0.25);
    transition: opacity 500ms ease 0ms, width 0ms ease 500ms;
  }
  .menu.menu--active:before {
    width: 5000em;
    opacity: 1;
    transition: opacity 500ms ease 0ms, width 0ms ease 0ms;
  }
  .menu-item {
    margin: 0 0 1.5em;
  }
  .menu-item:hover a {
    color: #07d48a;
  }
  .router-link-exact-active {
    color: #07d48a;
  }
</style>