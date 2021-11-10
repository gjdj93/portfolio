<template>
  <Menu />
  <router-view/>
</template>

<script>
import Menu from '@/components/Menu'
export default {
  name: 'App',
  components: {
    Menu,
  }
}
</script>

<style>

</style>
