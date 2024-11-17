<template>
  <div class="posts-container">
    <!-- Main Title -->
    <h1 class="text-center text-4xl font-bold text-white mb-6 bg-gradient-to-r from-blue-500 via-teal-500 to-purple-600 p-2 rounded-lg">
      Post Details
    </h1>

    <!-- Loading State -->
    <div v-if="loading" class="text-center">
      <p>Loading post...</p>
    </div>

    <!-- Error State -->
    <div v-if="error" class="text-center text-red-500">
      <p>{{ error }}</p>
    </div>

    <!-- No Post Available -->
    <div v-if="!loading && !error && !post" class="text-center">
      <p>No post found.</p>
    </div>

    <!-- Display Post -->
    <div v-if="!loading && !error && post">
      <div class="post-card p-4 mb-4 bg-white shadow rounded">
        <!-- Blog Title with Playfair Display font -->
        <h2 class="blog-title text-3xl font-extrabold text-black bg-clip-text bg-gradient-to-r from-blue-500 mb-4 leading-tight tracking-wide">
          {{ post.title }}
        </h2>

        <!-- Description with Cormorant Garamond font -->
        <p class="description text-gray-600 mt-2">
          {{ post.description }}
        </p>

        <div class="content mt-4" v-html="post.content"></div>
        <hr class="my-4" />
        <p class="text-sm text-gray-500">Created on: {{ new Date(post.createdAt).toLocaleDateString() }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      post: null,  // Store a single post
      loading: true,  // Boolean to track loading state
      error: null,  // Error message
    };
  },
  async created() {
    const postId = this.$route.params.id; // Get the post ID from the route params
    try {
      // Fetch the post by ID from the backend
      const response = await axios.get(`http://localhost:9000/api/v1/posts/${postId}`);
      this.post = response.data.post; // Store the post in the component state
    } catch (err) {
      this.error = err.response?.data?.error || "Failed to fetch the post. Please try again later.";
    } finally {
      this.loading = false; // Set loading to false after the API call
    }
  },
};
</script>

<style scoped>
/* Import the Playfair Display font for blog title */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

/* Import the Cormorant Garamond font for description */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

.posts-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.post-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

h1 {
  font-size: 2rem;
}

h2.blog-title {
  font-family: 'Playfair Display', serif; /* Apply Playfair Display font */
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 10px;
}

p.description {
  font-family: 'Cormorant Garamond', serif; /* Apply Cormorant Garamond font */
  font-size: 1.1rem;
  color: #4b4b4b; /* Darker color for the description */
}

.content {
  font-size: 1rem;
  margin-top: 10px;
}

hr {
  margin-top: 20px;
}
</style>

<!-- 
<style scoped>
/* Import the Playfair Display font for blog title */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

/* Import the Cormorant Garamond font for description */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

.posts-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.post-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

h1 {
  font-size: 2rem;
}

h2.blog-title {
  font-family: 'Playfair Display', serif; /* Apply Playfair Display font */
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 10px;
}

p.description {
  font-family: 'Cormorant Garamond', serif; /* Apply Cormorant Garamond font */
  font-size: 1.1rem;
  color: #4b4b4b; /* Darker color for the description */
}

.content {
  font-size: 1rem;
  margin-top: 10px;
}

hr {
  margin-top: 20px;
}
</style>
 -->
