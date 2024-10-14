<template>
  <section>
    <nav class="relative  bg-gray-800 z-50 w-full">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between">
          <a class="inline-block text-lg font-bold" href="/">
            <!-- Replace the logo image with text-based logo -->
            <img class="h-[120px] w-auto" src="/public/logo.png" alt="Logo" />
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
            <li class="group relative">
              <a class="text-sm text-white hover:text-orange-100 font-medium cursor-pointer" href="/blog-page">Blog</a>
              <!-- Dropdown -->
              <div class="absolute top-full left-0 hidden group-hover:block min-w-max max-w-xs p-4 z-50">
                <div class="w-full max-w-xs bg-white border border-gray-100 rounded-3xl pt-4 pb-4 px-4">
                  <a class="block py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Fitness</a>
                  <a class="block py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Health</a>
                                  <a class="block py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Tech</a>
                </div>
              </div>
            </li>
            <li><a class="text-sm text-white hover:text-orange-100 font-medium" href="#">Solutions</a></li>
            <li><a class="text-sm text-white hover:text-orange-100 font-medium" href="#">Products</a></li>
            <li><a class="text-sm text-white hover:text-orange-100 font-medium" href="#">Articles</a></li>
          </ul>

          <!-- Sign In and Create Account -->
          <div class="hidden lg:block">
            <div class="flex items-center">
              <a class="text-sm font-semibold text-white hover:text-orange-100 mr-6" href="#">Sign In</a>
              <a class="inline-block py-3 px-4 text-sm font-semibold text-orange-50 bg-orange-500 border border-orange-500 rounded-md transition duration-300 hover:bg-orange-700" href="#">Subscribe</a>
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
          <a class="mr-auto text-2xl font-medium" href="#">My Logo</a>
          <button @click="isMenuOpen = false">
            <svg class="h-6 w-6 text-gray-500 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul>
          <li><a class="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#">About Us</a></li>
          <li><a class="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Blog</a></li>
          <li><a class="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Solutions</a></li>
          <li><a class="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Products</a></li>
          <li><a class="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Articles</a></li>
        </ul>
        <div class="py-8 px-6 border-t border-b">
          <a class="text-sm font-semibold text-orange-900 hover:text-orange-600" href="#">Contact Support</a>
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
