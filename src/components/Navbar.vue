<template>
  <section>
    <nav class="relative bg-black z-50 w-full">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <router-link class="inline-block text-lg font-bold" to="/">
            <img class="h-[70px] w-auto" src="/logo.jpeg" alt="Logo" />
          </router-link>

          <!-- Hamburger Menu Icon (Mobile) -->
          <div class="lg:hidden">
            <button @click="toggleMenu" class="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          <!-- Menu -->
          <ul
            :class="[
              'flex flex-col lg:flex-row lg:space-x-12 lg:static bg-black lg:bg-transparent w-full lg:w-auto transition-all',
              isMenuOpen ? 'block' : 'hidden lg:block',
            ]"
          >
            <li class="border-b lg:border-none border-gray-600 lg:py-0 py-2">
              <router-link class="text-sm lg:text-lg text-white hover:text-orange-100 font-bold cursor-pointer" to="/">Home</router-link>
            </li>
            <li class="border-b lg:border-none border-gray-600 lg:py-0 py-2">
              <router-link class="text-sm lg:text-lg text-white hover:text-orange-100 font-bold cursor-pointer" to="/blog-page">Blogs</router-link>
            </li>
            <li class="border-b lg:border-none border-gray-600 lg:py-0 py-2">
              <router-link class="text-sm lg:text-lg text-white hover:text-orange-100 font-bold cursor-pointer" to="/products">Products</router-link>
            </li>
            <li class="lg:py-0 py-2">
              <router-link class="text-sm lg:text-lg text-white hover:text-orange-100 font-bold cursor-pointer" to="/flight">Fly Now</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Add specific styles if needed */

/* Adjust for larger screens */
@media (min-width: 1024px) {
  nav ul {
    display: flex;
    align-items: center;
    justify-content: space-between; /* Ensures that the links are spaced out */
  }
  nav ul li {
    padding: 0 16px; /* Adds padding between items */
  }
}
</style>






