<template>
  <div class="py-20 bg-white px-2">
    <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
      <div class="md:flex">
        <div class="w-full p-3">
          <div class="relative border-dotted h-48 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
            <div class="absolute">
              <div class="flex flex-col items-center">
                <i class="fa fa-folder-open fa-4x text-blue-700"></i>
                <span class="block text-gray-400 font-normal">Attach your files here</span>
              </div>
            </div>

            <!-- File input -->
            <input type="file" class="h-full w-full opacity-0" @change="handleFileUpload" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        // Handle file upload (e.g., send it to the server)
        console.log("File selected:", file);
        // You can call an API to upload the file here
      }
    },
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
