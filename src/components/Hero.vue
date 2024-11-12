<template>
  <header class="relative w-full h-[38rem] overflow-hidden">
    <video
      autoplay
      loop
      muted
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="flex flex-col items-center justify-center w-full h-full bg-black/60">
      <div class="text-center z-10 max-w-3xl px-4"> <!-- Restrict max width and add padding -->
        <h1 class="text-3xl font-semibold text-white lg:text-6xl">
          <span class="text-white">Duplantis Trends:</span>
          <span class="text-orange-400"> Discovering the trends shaping our world...</span>
        </h1>
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
