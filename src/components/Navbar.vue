<template>
  <section>
    <nav class="relative bg-black z-50 w-full">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between">
          <a class="inline-block text-lg font-bold" href="/">
            <!-- Replace the logo image with text-based logo -->
            <img class="h-[70px] w-auto" src="/public/logo.jpeg" alt="Logo" />
          </a>
          <!-- Mobile Menu Button -->
          <div class="lg:hidden">
            <button @click="isMenuOpen = !isMenuOpen" class="flex w-12 h-12 items-center justify-center bg-orange-50 hover:bg-orange-100 rounded-md transition duration-200">
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
              <a class="text-sm lg:text-lg text-white hover:text-orange-100 font-lg cursor-pointer" href="/blog-page">Blogs</a>
            </li>
            <li>
              <a class="text-sm lg:text-lg text-white hover:text-orange-100 font-lg cursor-pointer" href="/products">Products</a>
            </li>
          </ul>

          <!-- Subscribe Button -->
          <div class="hidden lg:block">
            <div class="flex items-center">
              <a class="inline-block py-3 px-4 text-sm lg:text-lg font-semibold text-orange-50 bg-orange-500 border border-orange-500 rounded-md transition duration-300 hover:bg-orange-700" href="/subscribe">Subscribe</a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="fixed inset-0 w-5/6 max-w-md z-50 bg-white border-r overflow-y-auto">
      <div @click="isMenuOpen = false" class="fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav class="py-6 px-10 h-full">
        <div class="flex items-center mb-16">
          <a class="mr-auto text-2xl lg:text-3xl font-lg" href="#">My Logo</a>
          <button @click="isMenuOpen = false">
            <svg class="h-6 w-6 text-gray-500 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul>
          <li><a class="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg lg:text-2lg" href="/blog-page">Blogs</a></li>
          <li><a class="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg lg:text-2lg" href="/products">Products</a></li>
        </ul>
        <div class="py-8 px-6 border-t border-b">
          <a class="text-sm lg:text-lg font-semibold text-orange-900 hover:text-orange-600" href="/subscribe">Subscribe</a>
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
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=K2D:wght@100;200;300;400;500;600;700;800&display=swap");

.k2d-regular {
  font-family: "K2D", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
