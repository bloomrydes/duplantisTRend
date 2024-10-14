<template>
  <section class="relative py-20 lg:pt-32 bg-[#1f2937] overflow-x-hidden">
    <div class="relative z-10 container mx-auto px-4">
      <!-- Filter and Sort Options -->
      <div class="flex justify-between mb-8">
        <div>
          <label class="text-white mr-4">Filter by Category:</label>
          <select v-model="selectedCategory" class="py-2 px-4 rounded-md">
            <option value="all">All</option>
            <option value="health">Health</option>
            <option value="fitness">Fitness</option>
            <option value="tech">Tech</option>
          </select>
        </div>

        <div>
          <label class="text-white mr-4">Sort by:</label>
          <select v-model="sortOrder" class="py-2 px-4 rounded-md">
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      <!-- Product Cards -->
      <div class="flex flex-wrap -mx-3">
        <div v-for="product in filteredAndSortedProducts" :key="product.id" class="w-full lg:w-1/4 px-3 mb-16">
          <a class="block mb-10" href="#">
            <div class="relative">
              <span class="absolute bottom-0 left-0 ml-6 mb-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-red-500 rounded-full text-red-500">-15%</span>
              <img class="w-full h-96 object-cover" :src="product.image" alt="Product Image">
            </div>
            <div class="mt-12">
              <div class="mb-2">
                <h3 class="mb-3 text-3xl text-white font-bold font-heading">{{ product.name }}</h3>
                <p class="text-xl font-bold font-heading text-white">
                  <span>${{ product.price }}</span>
                  <span class="text-xs text-gray-500 font-semibold font-heading line-through">\${{ product.originalPrice }}</span>
                </p>
              </div>
            </div>
          </a>
          <a class="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200" href="#">Buy Now</a>
        </div>
      </div>

      <div class="w-full flex justify-center mt-10">
        <a class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold font-heading py-4 px-12 rounded-md uppercase transition duration-200" href="#">
          See More
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      selectedCategory: 'all',
      sortOrder: 'latest',
      products: [
        { id: 1, name: 'Tennis racket Sanks 2', category: 'fitness', price: 295.30, originalPrice: 330.90, createdAt: '2024-10-10', image: 'https://i.pinimg.com/736x/27/5d/06/275d062ceada6c584616dd462fc3571e.jpg' },
        { id: 2, name: 'VONeon Board Surfing', category: 'tech', price: 295.30, originalPrice: 330.90, createdAt: '2024-09-15', image: 'https://i.pinimg.com/564x/fe/9f/c5/fe9fc53618e47885bf815cb9a2699b75.jpg' },
        { id: 3, name: 'Beauty Serum', category: 'health', price: 250.30, originalPrice: 300.00, createdAt: '2024-09-25', image: 'https://i.pinimg.com/564x/d6/4c/9c/d64c9c4e5a6c2327acf5aa98b5d22ddb.jpg' },
        // Add more products as needed
      ],
    };
  },
  computed: {
    filteredAndSortedProducts() {
      let filteredProducts = this.products;

      // Filter by category
      if (this.selectedCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === this.selectedCategory);
      }

      // Sort by time
      filteredProducts = filteredProducts.sort((a, b) => {
        if (this.sortOrder === 'latest') {
          return new Date(b.createdAt) - new Date(a.createdAt);
        } else {
          return new Date(a.createdAt) - new Date(b.createdAt);
        }
      });

      return filteredProducts;
    }
  }
}
</script>

<style scoped>
/* Add any additional styles here */
</style>
