<template>
  <section class="relative py-20 lg:pt-32 bg-[#1f2937] overflow-x-hidden">
    <div class="relative z-10 container mx-auto px-4">
      <h2 class="mt-4 mb-16 text-3xl md:text-2xl text-white font-bold font-heading">Products</h2>

      <!-- Category Filter Dropdown -->
      <div class="mb-8">
        <label for="category" class="text-white">Filter by Category: </label>
        <select v-model="selectedCategory" id="category" class="p-2 rounded-md">
          <option value="">All</option>
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
      </div>

      <!-- Filtered Products -->
      <div class="flex flex-wrap -mx-3">
        <div v-for="product in filteredProducts" :key="product.id" class="w-full lg:w-1/4 px-3 mb-16">
          <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }" class="block mb-10">
            <div class="relative">
              <img class="w-full h-96 object-cover" :src="product.image" :alt="product.title" />
            </div>
            <div class="mt-12">
              <div class="mb-2">
                <h3 class="mb-3 text-3xl text-white font-bold font-heading">{{ product.name }}</h3>
                <p class="text-xl text-white">{{ product.description }}</p>
              </div>
            </div>
          </router-link>
          <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }" class="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200">Buy Now</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LatestProducts',
  data() {
    return {
      selectedCategory: '', // Stores the selected category for filtering
      products: [
        { id: 1, name: 'Tea Burn', category: 'fitness', description: 'It contains ingredients like vitamins, minerals, L-theanine, and caffeine, helping boost..', image: '/1.jpg' },
        { id: 2, name: 'Lean Biome', category: 'health', description: 'LeanBiome contains a variety of powerhouse probiotics to improve overall gut...', image: '/3.jpg' },
        { id: 3, name: 'GlucoBerry', category: 'tech', description: 'GlucoBerry contains optimized maqui berry, a superfood known to support optimal kidney...', image: '/2.jpg' },
        { id: 4, name: 'Sumatra Keto Acv Gummies Slim Belly Tonic', category: 'fitness', description: 'Sumatra Keto Acv Gummies Slim Belly Tonic - Official Formula - Sumatra Slim Belly Tonic Powder Capsules Dietary ...', image: '/4.jpg' },
        { id: 5, name: 'Neuro Zoom', category: 'health', description: 'Experience the support of our capsules in maintaining...', image: '/5.jpg' },
        { id: 6, name: 'The Forever woman', category: 'health', description: 'The Secret to Attracting a Man Who Loves You, Sees You, And Cherishes You Into A Committed...', image: '/6.jpg' },
      ],
    };
  },
  computed: {
    // Get unique categories from the products array
    categories() {
      return [...new Set(this.products.map(product => product.category))];
    },
    // Filter the products based on the selected category
    filteredProducts() {
      if (this.selectedCategory === '') {
        return this.products; // Show all products if no category is selected
      }
      return this.products.filter(product => product.category === this.selectedCategory);
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>


