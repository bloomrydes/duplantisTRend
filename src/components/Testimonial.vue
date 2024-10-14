<template>
<section class="py-24" x-data="{ showContent: false }">
  <div class="container mx-auto px-4">
    <h1 class="text-center text-4xl lg:text-5xl font-bold font-heading mb-6 max-w-md mx-auto">Testimonials from our users</h1>
    <p class="text-center text-gray-600 mb-20">See what they have to say about us</p>
    <div class="flex flex-wrap mb-20 lg:mb-40 -mx-4">
      
      <!-- Testimonial Card 1 -->
      <div class="w-full lg:w-1/3 p-4">
        <div class="border border-orange-500 p-8 rounded-t-3xl rounded-br-3xl mb-8">
          <div class="mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 30 22" fill="none">
              <path d="M13.1971 4.75862C10.9375 4.89655 9.11058 5.47127 7.71635 6.48276C6.37019 7.49425 5.57692 8.87356 5.33654 10.6207..." fill="#FF7100"></path>
            </svg>
          </div>
          <h2 class="text-lg font-bold font-heading mb-4">I've been more productive with Solstice</h2>
          <p class="text-gray-600 text-sm">I've been more productive and my academic performance is getting better every semester.</p>
        </div>
        <div class="flex items-center gap-4">
          <div class="rounded-full bg-orange-50 overflow-hidden w-12 h-12">
            <img class="object-cover w-full h-full" src="https://i.pinimg.com/736x/b3/80/0f/b3800f28ee75b685b5ac8800257c87e7.jpg" alt="User image" />
          </div>
          <div>
            <h2 class="font-semibold text-base mb-1">Steven Klein</h2>
            <p class="text-gray-500 text-sm">Student</p>
          </div>
        </div>
      </div>

      <!-- Testimonial Card 2 -->
      <div class="w-full lg:w-1/3 p-4">
        <div class="border border-orange-500 p-8 rounded-t-3xl rounded-br-3xl mb-8">
          <div class="mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 30 22" fill="none">
              <path d="M13.1971 4.75862C10.9375 4.89655 9.11058 5.47127 7.71635 6.48276C6.37019 7.49425 5.57692 8.87356 5.33654 10.6207..." fill="#FF7100"></path>
            </svg>
          </div>
          <h2 class="text-lg font-bold font-heading mb-4">What a great learning experience</h2>
          <p class="text-gray-600 text-sm">Yesterday I had my first day to study. What a great experience learning something so useful in simple ways!</p>
        </div>
        <div class="flex items-center gap-4">
          <div class="rounded-full bg-amber-200 overflow-hidden w-12 h-12">
            <img class="object-cover w-full h-full" src="https://i.pinimg.com/736x/b3/80/0f/b3800f28ee75b685b5ac8800257c87e7.jpg" alt="User image" />
          </div>
          <div>
            <h2 class="font-semibold text-base mb-1">Elena Rae</h2>
            <p class="text-gray-500 text-sm">Student</p>
          </div>
        </div>
      </div>

      <!-- Testimonial Card 3 -->
      <div class="w-full lg:w-1/3 p-4">
        <div class="border border-orange-500 p-8 rounded-t-3xl rounded-br-3xl mb-8">
          <div class="mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 30 22" fill="none">
              <path d="M13.1971 4.75862C10.9375 4.89655 9.11058 5.47127 7.71635 6.48276C6.37019 7.49425 5.57692 8.87356 5.33654 10.6207..." fill="#FF7100"></path>
            </svg>
          </div>
          <h2 class="text-lg font-bold font-heading mb-4">My favorite platform for learning</h2>
          <p class="text-gray-600 text-sm">I found Solstice to be the best tool for learning and improving my academic skills.</p>
        </div>
        <div class="flex items-center gap-4">
          <div class="rounded-full bg-orange-50 overflow-hidden w-12 h-12">
            <img class="object-cover w-full h-full" src="https://i.pinimg.com/736x/b3/80/0f/b3800f28ee75b685b5ac8800257c87e7.jpg" alt="User image" />
          </div>
          <div>
            <h2 class="font-semibold text-base mb-1">John Doe</h2>
            <p class="text-gray-500 text-sm">Designer</p>
          </div>
        </div>
      </div>

      

    </div>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
/* Ensure all text and images are consistent in size */
.text-lg {
  font-size: 1.125rem;
}
.w-12 {
  width: 3rem;
}
.h-12 {
  height: 3rem;
}
</style>
