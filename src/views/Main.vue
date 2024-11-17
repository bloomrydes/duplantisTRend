<template>
  <div class="flex">
    <!-- Main Blog Section -->
    <main class="w-3/4 p-4">
      <Main />
    </main>

    <!-- Aside Section -->
    <aside class="w-1/4 p-4 bg-gray-100 border-l border-gray-300">
      <h2 class="text-xl font-semibold mb-4">Related Posts</h2>
      <ul>
        <li
          v-for="post in relatedPosts"
          :key="post.id"
          class="mb-4 border-b pb-2"
        >
          <h3 class="text-lg font-medium">{{ post.title }}</h3>
          <p class="text-sm text-gray-600">{{ post.description }}</p>
          <button
            class="text-blue-500 hover:underline mt-2"
            @click="goToPost(post.id)"
          >
            Read Blog
          </button>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import Main from "../components/LandingPages.vue";

export default {
  components: {
    Main,
  },
  data() {
    return {
      relatedPosts: [
        {
          id: 1,
          title: "Vue.js Basics",
          description: "Learn the fundamentals of Vue.js in this comprehensive guide.",
        },
        {
          id: 2,
          title: "Advanced Vue Techniques",
          description: "Master advanced concepts and build complex Vue applications.",
        },
        {
          id: 3,
          title: "State Management in Vue",
          description: "Discover state management solutions for scalable Vue apps.",
        },
      ],
    };
  },
  methods: {
    goToPost(postId) {
      // Logic to navigate to the specific blog post
      this.$router.push(`/posts/${postId}`);
    },
  },
};
</script>

<style scoped>
/* Optional styles for layout and presentation */
.flex {
  display: flex;
  flex-wrap: nowrap;
}
main {
  flex: 3;
}
aside {
  flex: 1;
}
</style>


