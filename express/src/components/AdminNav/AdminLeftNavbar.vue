<template>
  <div class="leftNav">
    <nav class="nav"></nav>
    <menu-item v-for="(r, i) in routes" :key="i" :route="r"></menu-item>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  components: {
    MenuItem: () => import('./MenuItem')
  },
  computed: {
    routes() {
      return this.$router.options.routes
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../assets/global.css';

.leftNav {
  /* background-color: aqua; */
  position: relative;
  top: var(--topnav-height);
}
</style>
