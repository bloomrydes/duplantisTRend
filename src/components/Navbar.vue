<template>
  <section>
    <nav class="relative bg-black z-50 w-full">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <router-link class="inline-block text-lg font-bold" to="/">
            <img class="h-[70px] w-auto" src="/logo.jpeg" alt="Logo" />
          </router-link>

          <!-- Menu (Visible on all screens) -->
          <ul class="flex space-x-12">
            <li>
              <router-link class="text-sm lg:text-lg text-white hover:text-orange-100 font-bold cursor-pointer" to="/">Home</router-link>
            </li>
            <li>
              <router-link class="text-sm lg:text-lg text-white hover:text-orange-100 font-bold cursor-pointer" to="/blog-page">Blogs</router-link>
            </li>
            <li>
              <router-link class="text-sm lg:text-lg text-white hover:text-orange-100 font-bold cursor-pointer" to="/products">Products</router-link>
            </li>
          </ul>

          <!-- Subscribe Button -->
          <!-- <div class="flex items-center">
            <router-link class="inline-block py-3 px-4 text-sm lg:text-lg font-semibold text-orange-50 bg-orange-500 border border-orange-500 rounded-md transition duration-300 hover:bg-orange-700" to="/subscribe">Subscribe</router-link>
          </div> -->
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  // Since we no longer need toggle functionality, no JavaScript is required
};
</script>

<style scoped>
/* Add any specific styles if needed */
</style>





