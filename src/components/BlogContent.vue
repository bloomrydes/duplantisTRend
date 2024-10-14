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
          title: 'How to use sticky notes for problem-solving',
          date: '20 October 2019',
          image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          content: [
            'Sticky notes can help with organizing thoughts...',
            'They allow for flexibility when brainstorming...',
            'In conclusion, sticky notes are a great tool for solving problems...'
          ],
          category: 'Productivity', // Category
          summary: 'Learn how to effectively use sticky notes for brainstorming and organizing your thoughts.', // Added summary
        },
        {
          id: '2',
          title: 'Morning routine to boost your mood',
          date: '25 November 2020',
          image: 'https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          content: [
            'Starting your day with a positive routine can change your whole day...',
            'Begin with mindfulness exercises like meditation or yoga...',
            'Lastly, always eat a healthy breakfast to fuel your body for the day ahead...'
          ],
          category: 'Lifestyle', // Category
          summary: 'Discover how a structured morning routine can enhance your mood and productivity.', // Added summary
        },
        {
          id: '3',
          title: '5 Health Benefits of Staying Hydrated',
          date: '15 January 2021',
          image: 'https://images.unsplash.com/photo-1581579771405-123e3fdf6a4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          content: [
            'Staying hydrated is essential for maintaining health...',
            'It improves physical performance, boosts energy, and helps with digestion...',
            'Make sure to drink enough water throughout the day!'
          ],
          category: 'Health', // Category
          summary: 'Explore the significant health benefits of maintaining proper hydration.', // Added summary
        },
        {
          id: '4',
          title: 'The Future of Technology: What to Expect',
          date: '10 March 2022',
          image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          content: [
            'Technology is evolving at an unprecedented rate...',
            'From AI advancements to sustainable energy solutions, the future looks promising...',
            'Stay informed and adapt to new technologies!'
          ],
          category: 'Technology', // Category
          summary: 'Get insights into upcoming technology trends that will shape our future.', // Added summary
        },
        {
          id: '5',
          title: 'Healthy Eating: Tips for a Balanced Diet',
          date: '5 August 2023',
          image: 'https://images.unsplash.com/photo-1603052872972-3d79c84b37f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          content: [
            'Eating healthy doesn\'t have to be complicated...',
            'Focus on whole foods and balance your meals...',
            'Learn how to meal prep for success!'
          ],
          category: 'Health', // Category
          summary: 'Understand the principles of healthy eating and how to maintain a balanced diet.', // Added summary
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
