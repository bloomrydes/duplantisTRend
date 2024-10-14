<template>
  <header>
    <div class="w-full h-[38rem] bg-no-repeat bg-contain bg-center" 
         style="background-image: url('https://i.pinimg.com/enabled_lo/564x/1d/3d/97/1d3d97d43240402170152e61579464f4.jpg');">
      <div class="flex items-center justify-center w-full h-full bg-gray-900/40">
        <div class="text-center">
          <h1 class="text-3xl font-semibold text-white lg:text-4xl">Exploring the  
            <span class="text-orange-400">Duplantis Trend:</span>A New Era in Entertainment
          </h1>
          <button class="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-[#1f2937] rounded-md lg:w-auto hover:bg-blue-900 focus:outline-none focus:bg-[#083344]">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
.bg-no-repeat {
  
  background-size: contain; /* Ensures the image fits within the container */
  background-position: center;
  background-repeat: no-repeat; /* Explicitly prevents the image from repeating */
}
</style>
