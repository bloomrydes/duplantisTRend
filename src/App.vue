
<template>
  <div class="app-container">
    <Sidebar />
    <main class="main-content">
      <router-view /> <!-- This is where your page content will be rendered -->
    </main>
    <Footer/>
  </div>
</template>

<script setup>
import Sidebar from './components/Navbar.vue'; 
import Footer from "./components/Footer.vue";
</script>

<style scoped>

</style>
