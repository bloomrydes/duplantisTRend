<template>
  <header class="header-bg h-8 flex items-center justify-center text-white text-sm font-bold">
    Home / Blogs
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.header-bg {
  width: 100%;
  height: 140px; /* Height of 30px */
  background-image: url('https://i.pinimg.com/474x/ee/5b/8f/ee5b8fd6b23bc781ba85aeef4778aa7d.jpg'); /* Replace with your background image URL */
  background-size: cover; /* Cover to fit the entire div */
  background-position: center;
}
</style>
