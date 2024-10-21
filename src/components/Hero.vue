<template>
  <header class="relative w-full h-[38rem] overflow-hidden">
    <video
      autoplay
      loop
      muted
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/public/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="flex items-center justify-center w-full h-full bg-black/60"> <!-- Darker overlay for visibility -->
      <div class="text-center z-10"> <!-- Ensure text is above the video -->
        <h1 class="text-3xl font-semibold text-white lg:text-4xl">
           
          <span class="text-orange-400">Duplantis Trends:</span> <span class="text-blue-900">Discovering the trends shaping our world...</span>
        </h1>
        <router-link to="/products">
          <button class="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-[#1f2937] rounded-md lg:w-auto hover:bg-blue-900 focus:outline-none focus:bg-[#083344] md:text-base md:px-4 md:py-3">
            Buy Now
          </button>
        </router-link>
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
/* Video styling */
video {
  position: absolute; /* Position video absolutely to cover header */
  top: 0;
  left: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  object-fit: cover; /* Ensure video covers area without stretching */
}

/* Overlay */
.header-overlay {
  background: rgba(0, 0, 0, 0.6); /* Use a semi-transparent black overlay */
}
</style>
