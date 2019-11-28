<template>
  <div>
    <AdminTopNavigation />
    <AdminLeftNav />
    <AdminLeftNavbar />
  </div>
</template>

<script>
import AdminTopNavigation from './AdminTopNavigation'
import AdminLeftNavbar from './AdminLeftNavbar'

export default {
  name: 'AdminNav',
  components: {
    AdminTopNavigation,
    AdminLeftNavbar
  }
}
</script>

<style></style>
