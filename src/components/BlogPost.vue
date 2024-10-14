<!-- BlogPost.vue -->
<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
      <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
        {{ post.title }}
      </h1>
      <span class="text-sm text-gray-500 dark:text-gray-300">On: {{ post.date }}</span>

      <img :src="post.image" alt="" class="object-cover w-full h-96 rounded-lg mt-6" />

      <div class="mt-6 text-gray-700 dark:text-gray-200">
        <p v-for="(paragraph, index) in post.content" :key="index" class="mb-4">
          {{ paragraph }}
        </p>
      </div>

      <router-link to="/blog-page" class="mt-8 text-blue-500 hover:underline">
        Back to blog
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        date: '',
        image: '',
        content: [],
      },
    };
  },
  created() {
    const postId = this.$route.params.id;
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    const post = posts.find((p) => p.id === postId);
    if (post) {
      this.post = post;
    }
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
