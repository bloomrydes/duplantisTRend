<template>
  <section class="bg-white dark:bg-gray-500">
    <div class="container px-6 py-10 mx-auto">
      <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white  mb-8">Duplantis Trends Blog</h1>

      <!-- Category Filter -->
      <div class="mb-6">
        <span class="mr-4 text-gray-600 dark:text-gray-400">Filter by category:</span>
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="['px-3 py-1 text-sm font-semibold rounded-full', selectedCategory === category ? 'bg-gray-300' : 'bg-gray-200 hover:bg-gray-300', 'dark:bg-gray-700 dark:text-white']"
        >
          {{ category }}
        </button>
      </div>

      <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
        <div v-for="(post, index) in filteredPosts" :key="index" class="lg:flex">
          <img
            :src="post.image"
            alt=""
            class="object-cover w-full h-56 rounded-lg lg:w-64"
          />
          <div class="flex flex-col justify-between py-6 lg:mx-6">
            <router-link :to="'/post/' + post.id" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white">
              {{ post.title }}
            </router-link>
            <span class="text-sm text-gray-500 dark:text-gray-300">On: {{ post.date }}</span>
            <p class="mt-2 text-gray-600 dark:text-gray-400">{{ post.summary }}</p> <!-- Added summary -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      categories: ['All', 'Productivity', 'Lifestyle', 'Health', 'Technology'], // Add categories
      selectedCategory: 'All', // Default selected category
      blogPosts: [
        {
          id: '1',
          title: 'Behind the Curtain: Insights You Wont Find In Books',
          date: '10 October 2024',
          image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*6m4L8Z0vlNQ32mt2cn-sqw@2x.jpeg',
          content: [
           
            'Discover how Neurozoom can enhance your cognitive function and support your brain health. Learn more here..'
          ],
          category: 'Health', // Category
          summary: 'Learn how to effectively use sticky notes for brainstorming and organizing your thoughts.', // Added summary
        },
   
      ],
    };
  },
  computed: {
    filteredPosts() {
      if (this.selectedCategory === 'All') {
        return this.blogPosts;
      }
      return this.blogPosts.filter(post => post.category === this.selectedCategory);
    },
  },
  mounted() {
    // Save blog posts to localStorage for routing purposes
    localStorage.setItem('blogPosts', JSON.stringify(this.blogPosts));
  },
};
</script>
