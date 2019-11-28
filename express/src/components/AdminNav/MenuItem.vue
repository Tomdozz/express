<template>
  <div>
    <ul class="menu-list">
      <li v-if="isVisible" class="nav-item rounded shadow-sm mb-2">
        <router-link
          exact-active-class="text-success"
          :to="{ name: route.name }"
          class="nav-link"
          >{{ name }}</router-link
        >
      </li>

      <div v-if="route.children && route.children.length">
        <menu-item
          v-for="(r, i) in route.children"
          :key="i"
          :route="r"
          class="ml-3"
        ></menu-item>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'menu-item',
  props: {
    route: {
      type: Object
    }
  },
  computed: {
    isVisible() {
      if (
        this.route.meta &&
        (this.route.meta.visible === undefined || this.route.meta.visible)
      ) {
        return true
      }
      return false
    },
    name() {
      return this.route.name
        .toLowerCase()
        .split('-')
        .map(s => s.charAt(0).toUpperCase() + s.slice(1))
        .join(' ')
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../assets/global.css';

.nav-link {
  text-decoration: none;
  color: var(--txt-color);
  font-family: var(--font-fam);
}
.nav-item {
  margin-top: 20px;
  max-width: 200px;
  padding: 5px;
  background-color: var(--menuitem-bg-color);
  border-radius: 15px;
}
.nav-item:hover {
  background-color: var(--menuitem-bg-color-hover);
}
.menu-list {
  list-style-type: none;
  max-width: 210px;
}
</style>
