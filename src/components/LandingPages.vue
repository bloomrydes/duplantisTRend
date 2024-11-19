<template>
  <div class="posts-container mb-12">
    <!-- Main Title -->
    <h1 class="text-4xl font-bold text-white mb-6 bg-black p-2 rounded-lg text-center">
      Blog Posts
    </h1>

    <!-- Loading State -->
    <div v-if="loading" class="text-center">
      <p>Loading posts...</p>
    </div>

    <!-- Error State -->
    <div v-if="error" class="text-center text-red-500">
      <p>{{ error }}</p>
    </div>

    <!-- No Posts Available -->
    <div v-if="!loading && !error && posts.length === 0" class="text-center">
      <p>No posts available.</p>
    </div>

    <!-- Display Posts -->
    <div
      v-if="!loading && !error && posts.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      <div
        v-for="post in posts"
        :key="post._id"
        class="post-card bg-white shadow rounded p-4 flex flex-col"
      >
        <!-- Blog Title -->
        <h2 class="text-2xl font-bold text-black mb-2">
          {{ post.title }}
        </h2>

        <!-- Description -->
        <p class="text-gray-600 mb-4 flex-grow">
          {{ post.description }}
        </p>

        <!-- Created At -->
        <p class="text-sm text-gray-500 mb-4">
          Created on: {{ formatDate(post.createdAt) }}
        </p>

        <!-- Read Blog Button -->
        <button
          @click="viewBlog(post._id)"
          class="mt-auto px-4 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-200"
        >
          Read Blog
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [], // Array to store posts
      loading: true, // Boolean to track loading state
      error: null, // Error message
    };
  },
  async created() {
    try {
      // Fetch all posts from the backend
      const response = await axios.get("https://duplantistrendbacken.onrender.com/api/v1/posts"); // Adjust the URL as needed
      this.posts = response.data.posts; // Store posts in the component state
    } catch (error) {
      // Handle errors and set the error message
      this.error = "Failed to fetch posts. Please try again later.";
    } finally {
      // Set loading to false once data has been fetched
      this.loading = false;
    }
  },
  methods: {
    viewBlog(postId) {
      // Redirect to the blog details page or perform an action
      console.log(`View blog with ID: ${postId}`);
      // Example: Navigate to blog details page
      this.$router.push(`/blog/${postId}`);
    },
    formatDate(date) {
      // Format date as day/month/year
      const options = { day: "2-digit", month: "2-digit", year: "numeric" };
      return new Date(date).toLocaleDateString(undefined, options);
    },
  },
};
</script>


<style scoped>
.posts-container {
  padding: 20px;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 54px;
}

.post-card {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-family: 'Playfair Display', serif; /* Apply Playfair Display font */
}

p {
  font-family: 'Cormorant Garamond', serif; /* Apply Cormorant Garamond font */
}

button {
  cursor: pointer;
}
</style>




