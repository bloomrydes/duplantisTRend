<template>
  <section>
    <nav class="relative bg-black z-50 w-full">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between">
          <router-link class="inline-block text-lg font-bold" to="/">
            <img class="h-[70px] w-auto" src="/logo.jpeg" alt="Logo" />
          </router-link>

          <!-- Mobile Menu Button -->
          <div class="lg:hidden">
            <button @click="toggleMenu" class="flex w-12 h-12 items-center justify-center bg-orange-50 hover:bg-orange-100 rounded-md transition duration-200">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M3 6H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M3 18H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
          </div>

          <!-- Desktop Menu -->
          <ul class="hidden lg:flex space-x-12">
            <li>
              <router-link class="text-sm lg:text-lg text-white hover:text-orange-100 font-lg cursor-pointer" to="/blog-page">Blogs</router-link>
            </li>
            <li>
              <router-link class="text-sm lg:text-lg text-white hover:text-orange-100 font-lg cursor-pointer" to="/products">Products</router-link>
            </li>
          </ul>

          <!-- Subscribe Button -->
          <div class="hidden lg:block">
            <div class="flex items-center">
              <router-link class="inline-block py-3 px-4 text-sm lg:text-lg font-semibold text-orange-50 bg-orange-500 border border-orange-500 rounded-md transition duration-300 hover:bg-orange-700" to="/subscribe">Subscribe</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="fixed inset-0 w-5/6 max-w-md z-50 bg-gray-800 border-r overflow-y-auto">
      <div @click="toggleMenu" class="fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav class="py-6 px-10 h-full">
        <div class="flex items-center mb-16">
          <router-link class="mr-auto text-2xl lg:text-3xl font-lg" to="/" @click="toggleMenu">
            <img class="h-[70px] w-auto" src="/logo.jpeg" alt="Logo" />
          </router-link>
          <button @click="toggleMenu">
            <svg class="h-6 w-6 text-gray-500 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul>
          <li>
            <router-link 
              class="block py-4 px-5 text-gray-100 hover:bg-orange-50 rounded-lg lg:text-2lg" 
              to="/blog-page" 
              @click="closeMenuAndNavigate('/blog-page')">Blogs</router-link>
          </li>
          <li>
            <router-link 
              class="block py-4 px-5 text-gray-100 hover:bg-orange-50 rounded-lg lg:text-2lg" 
              to="/products" 
              @click="closeMenuAndNavigate('/products')">Products</router-link>
          </li>
        </ul>
        <div class="py-8 px-6 border-t border-b">
          <router-link class="text-sm lg:text-lg font-semibold text-orange-500 hover:text-orange-500" to="/subscribe" @click="closeMenuAndNavigate('/subscribe')">Subscribe</router-link>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggle the menu open/close
    },
    closeMenuAndNavigate(route) {
      this.isMenuOpen = false; // Close the menu
      this.$router.push(route); // Navigate to the specified route
      this.showDubbingMessage(route); // Show the dubbing message
    },
    showDubbingMessage(route) {
      // Simple alert for dubbing message
      alert(`Navigating to ${route}`); // Replace this with a custom toast if desired
    },
  },
};
</script>

<style scoped>
/* Add any specific styles if needed */
</style>




