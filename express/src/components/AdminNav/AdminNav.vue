<template>
  <div>
    <AdminTopNavigation />
    <AdminLeftNav />
  </div>
</template>

<script>
import AdminTopNavigation from './AdminTopNavigation'
import AdminLeftNav from './AdminLeftNav'

export default {
  name: 'AdminNav',
  components: {
    AdminTopNavigation,
    AdminLeftNav
  }
}
</script>

<style></style>
