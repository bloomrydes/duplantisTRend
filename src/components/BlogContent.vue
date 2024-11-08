<template>
  <section class="bg-white dark:bg-gray-500">
    <div class="container px-6 py-10 mx-auto">
      <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white mb-8">Duplantis Trends Blog TEstiiiigngn</h1>

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
            <router-link 
              :to="getPostRoute(post.id)" 
              class="text-xl font-semibold text-gray-800 hover:underline dark:text-white"
            >
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
          title: 'Behind the Curtain: Insights You Won\'t Find In Books',
          date: '10 October 2024',
          image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*6m4L8Z0vlNQ32mt2cn-sqw@2x.jpeg',
          category: 'Lifestyle', // Category
          summary: 'Learn how to effectively use sticky notes for brainstorming and organizing your thoughts.', // Added summary
        },
        {
          id: '2',
          title: 'The Secret to Attracting and Keeping a Man Who Loves You: A Guide to Lasting Commitment',
          date: '2 October 2024',
          image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*2mrLRQORWUlnICf8icb2LA@2x.jpeg',
          category: 'Lifestyle', // Category
          summary: 'How To Make Him Want To Come Back..', // Added summary
        },
        {
          id: '3',
          title: 'Boost Your Brain Health with Simple Lifestyle Hacks 🧠',
          date: '27 September 2024',
          image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*2XNoQNVPXqo2D4nxM7o37A@2x.jpeg',
          category: 'Health', // Category
          summary: 'Discover How Neurozoom Can Enhance Your Cognitive Function And Support Your Brain..', // Added summary
        },
        {
          id: '4',
          title: 'Lost Treasures and Timeless Tales: Unearthing the Rich Tapestry of Benin History',
          date: 'October 16, 2024',
          image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*3P0yqPSzoQIl1o09lTmgZg@2x.jpeg',
          category: 'Lifestyle', // Category
          summary: 'In the heart of West Africa, nestled between lush forests and the banks of the Niger River, lay the majestic Benin Kingdom ..', // Added summary
        },
        {
          id: '5',
          title: 'From Heavy To Healthy',
          date: 'October 22, 2024',
          image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*jm7B_1Y0l9M41A_BlmslKg@2x.jpeg',
          category: 'Health', // Category
          summary: "Empower Your Weight Loss Journey With LeanBiome's Unique Formula..", // Added summary
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
  methods: {
    getPostRoute(postId) {
      switch (postId) {
        case '1':
          return '/blog/article-one';
        case '2':
          return '/blog/article-two';
        case '3':
          return '/blog/article-three';
          case '4':
          return '/blog/article-four';
          case '5':
          return '/blog/article-five';
        default:
          return '/blog'; // Fallback route
      }
    }
  },
  mounted() {
    // Save blog posts to localStorage for routing purposes
    localStorage.setItem('blogPosts', JSON.stringify(this.blogPosts));
  },
};
</script>

