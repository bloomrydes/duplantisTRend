<template>
  <section class="py-24" x-data="{ showContent: false }">
    <div class="container mx-auto px-4">
      <h1 class="text-center text-4xl lg:text-5xl font-bold font-heading mb-6 max-w-md mx-auto">
        Testimonials from our happy customers
      </h1>
      <p class="text-center text-gray-600 mb-20">
        Hear what our customers have to say about our products
      </p>
      <div class="flex flex-wrap mb-20 lg:mb-40 -mx-4">
        <!-- Testimonial Card 1: Tea Burn -->
        <div class="w-full lg:w-1/3 p-4">
          <div class="border border-orange-500 p-8 rounded-t-3xl rounded-br-3xl mb-8">
            <div class="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 30 22" fill="none">
                <path d="M13.1971 4.75862C10.9375 4.89655 9.11058 5.47127 7.71635 6.48276..." fill="#FF7100"></path>
              </svg>
            </div>
            <h2 class="text-lg font-bold font-heading mb-4">
              Tea Burn is my new morning ritual!
            </h2>
            <p class="text-gray-600 text-sm">
              After adding Tea Burn to my daily routine, I feel energized and more focused throughout the day. It's become a staple in my life.
            </p>
          </div>
          <div class="flex items-center gap-4">
            <div class="rounded-full bg-orange-50 overflow-hidden w-12 h-12">
              <img
                class="object-cover w-full h-full"
                src="https://i.pinimg.com/736x/b3/80/0f/b3800f28ee75b685b5ac8800257c87e7.jpg"
                alt="User image"
              />
            </div>
            <div>
              <h2 class="font-semibold text-base mb-1">Sarah Johnson</h2>
              <p class="text-gray-500 text-sm">Fitness Enthusiast</p>
            </div>
          </div>
        </div>

        <!-- Testimonial Card 2: Lean Biome -->
        <div class="w-full lg:w-1/3 p-4">
          <div class="border border-orange-500 p-8 rounded-t-3xl rounded-br-3xl mb-8">
            <div class="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 30 22" fill="none">
                <path d="M13.1971 4.75862C10.9375 4.89655 9.11058 5.47127 7.71635 6.48276..." fill="#FF7100"></path>
              </svg>
            </div>
            <h2 class="text-lg font-bold font-heading mb-4">
              Lean Biome improved my digestion!
            </h2>
            <p class="text-gray-600 text-sm">
              Lean Biome has significantly improved my gut health. I feel lighter, more energized, and overall better. Highly recommend it!
            </p>
          </div>
          <div class="flex items-center gap-4">
            <div class="rounded-full bg-orange-50 overflow-hidden w-12 h-12">
              <img
                class="object-cover w-full h-full"
                src="https://i.pinimg.com/736x/b3/80/0f/b3800f28ee75b685b5ac8800257c87e7.jpg"
                alt="User image"
              />
            </div>
            <div>
              <h2 class="font-semibold text-base mb-1">Elena Rae</h2>
              <p class="text-gray-500 text-sm">Satisfied Customer</p>
            </div>
          </div>
        </div>

        <!-- Testimonial Card 3: GlucoBerry -->
        <div class="w-full lg:w-1/3 p-4">
          <div class="border border-orange-500 p-8 rounded-t-3xl rounded-br-3xl mb-8">
            <div class="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 30 22" fill="none">
                <path d="M13.1971 4.75862C10.9375 4.89655 9.11058 5.47127 7.71635 6.48276..." fill="#FF7100"></path>
              </svg>
            </div>
            <h2 class="text-lg font-bold font-heading mb-4">
              GlucoBerry is a game changer!
            </h2>
            <p class="text-gray-600 text-sm">
              After trying GlucoBerry, I noticed a significant improvement in my overall energy levels. It's a fantastic product that works wonders.
            </p>
          </div>
          <div class="flex items-center gap-4">
            <div class="rounded-full bg-orange-50 overflow-hidden w-12 h-12">
              <img
                class="object-cover w-full h-full"
                src="https://i.pinimg.com/736x/b3/80/0f/b3800f28ee75b685b5ac8800257c87e7.jpg"
                alt="User image"
              />
            </div>
            <div>
              <h2 class="font-semibold text-base mb-1">John Doe</h2>
              <p class="text-gray-500 text-sm">Tech Enthusiast</p>
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

