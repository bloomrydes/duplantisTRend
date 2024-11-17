<template>
  <!-- Component -->
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div class="p-6 bg-white border-b border-gray-200">
          <form @submit.prevent="handleSubmit">
            <div class="mb-4">
              <label class="text-xl text-gray-600">
                Title <span class="text-red-500">*</span>
              </label></br>
              <input 
                type="text" 
                class="border-2 border-gray-300 p-2 w-full" 
                v-model="formData.title" 
                required 
              />
            </div>

            <div class="mb-4">
              <label class="text-xl text-gray-600">
                Description
              </label></br>
              <input 
                type="text" 
                class="border-2 border-gray-300 p-2 w-full" 
                v-model="formData.description" 
                placeholder="(Optional)" 
              />
            </div>

            <div class="mb-8">
              <label class="text-xl text-gray-600">
                Content <span class="text-red-500">*</span>
              </label></br>
              <textarea id="editor" class="h-96"></textarea>
            </div>

            <div class="flex p-1">
              <button type="submit" class="p-3 bg-blue-500 text-white hover:bg-blue-400">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"; // Import axios

export default {
  data() {
    return {
      formData: {
        title: "",
        description: "",
        content: "",
      },
    };
  },
  mounted() {
    // Initialize CKEditor when the component is mounted
    const script = document.createElement("script");
    script.src = "https://cdn.ckeditor.com/4.16.0/standard/ckeditor.js";
    script.onload = () => {
      CKEDITOR.replace("editor");
    };
    document.head.appendChild(script);
  },
  methods: {
    handleSubmit() {
      // Get the editor content
      this.formData.content = CKEDITOR.instances.editor.getData();

      // Log the form data
      console.log("Form Data:", this.formData);

      // Post data to backend API
      axios
        .post("http://localhost:9000/api/v1/post", this.formData)
        .then((response) => {
          console.log("Post Created:", response.data);
          // You can handle a successful response here
          alert("Form submitted successfully!");
        })
        .catch((error) => {
          console.error("Error posting data:", error);
          // Handle error appropriately
          alert("There was an error submitting the form.");
        });
    },
  },
};
</script>


<style scoped>
/* Scoped styling */
.h-96 {
  height: 24rem; /* Tailwind class for height adjustment */
}
</style>
