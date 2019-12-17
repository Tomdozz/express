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
  /* margin-top: 20px;
  max-width: 200px;
  padding: 5px;*/

  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 30px 30px 80px 1px rgba(55, 84, 170, 0.178),
    -30px -30px 80px 1px #ffffff, inset 4px 4px 20px 1px #cccccc;
  background-color: #f1f3f6;

  /* background-color: var(--menuitem-bg-color); */
  border-radius: 108px;
  padding: 10px;
  /* box-shadow: (30px 30px 80px 0px rgba(55, 84, 170, 0.1)); */
}
.nav-item:hover {
  background-color: var(--menuitem-bg-color-hover);
}
.menu-list {
  list-style-type: none;
  max-width: 210px;
}
</style>
