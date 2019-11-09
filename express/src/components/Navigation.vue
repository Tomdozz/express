<template>
  <div>
    <p>testing</p>
    <ul>
      <!-- <li v-for="(item, index) in this.menuEntries">item.Name</li> -->
      <li v-for="menuEntry in menuEntries" v-bind:key="menuEntry.id">{{menuEntry.Name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    menuEntries: [
      {
        isActive: true,
        Name: "Buissness idéa",
        id: 1
      },
      {
        isActive: true,
        Name: "Buissness idéa",
        id: 2
      },
      {
        isActive: true,
        Name: "Buissness idéa",
        id: 3
      },
      {
        isActive: true,
        Name: "Buissness idéa",
        id: 4
      }
    ]
  }
};
</script>

<style>
</style>