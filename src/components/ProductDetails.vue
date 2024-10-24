<template>
  <section class="container mx-auto py-20 px-4 lg:px-0">
    <div v-if="product" class="bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="lg:flex lg:space-x-8">
        <!-- Product Image -->
        <img class="w-full lg:w-1/2 h-96 object-cover" :src="product.image" alt="Product Image">

        <!-- Product Details -->
        <div class="p-6 lg:w-1/2 lg:p-0 lg:flex lg:flex-col lg:justify-center">
          <h2 class="text-3xl font-bold mb-4">{{ product.name }}</h2>
          <p class="text-gray-700 mb-4">{{ product.description }}</p>
          <button @click="buyNow" class="bg-blue-500 text-white py-2 px-4 rounded mt-4">Buy Now</button>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <p class="text-gray-500">Product not found.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductDetail',
  data() {
    return {
      product: null,
      products: [
        { 
          id: 1, 
          name: 'Tea Burn', 
          category: 'fitness', 
          description: 'This tennis racket is made with high-quality materials and is designed for professional use. It provides excellent balance and durability.', 
          createdAt: '2024-10-10', 
          image: '/1.jpg',
          buyLink: 'https://tinyurl.com/3kuh69pt' // Add a link for purchasing
        },
        { 
          id: 3, 
          name: 'GlucoBerry', 
          category: 'tech', 
          description: 'A surfing board with the latest technology, providing enhanced stability and performance on the water.', 
          createdAt: '2024-09-15', 
          image: '/2.jpg',
          buyLink: 'https://tinyurl.com/y7pe9kw7' // Add a link for purchasing
        },
        { 
          id: 2, 
          name: 'LeanBiome', 
          category: 'health', 
          description: 'An advanced beauty serum with natural ingredients to help nourish and rejuvenate your skin.', 
          createdAt: '2024-09-25', 
          image: '/3.jpg',
          buyLink: 'https://tinyurl.com/462t9yeb' // Add a link for purchasing
        },
        { 
          id: 4, 
          name: 'Sumatra Keto Acv Gummies Slim Belly Tonic', 
          category: 'fitness', 
          description: 'Sumatra Keto Acv Gummies Slim Belly Tonic - Official Formula - Sumatra Slim Belly Tonic Powder Capsules Dietary Supplement Blue, Sumatra Tonic Belly Pills, Raspberry Ketones', 
          createdAt: '2024-08-12', 
          image: '/4.jpg',
          buyLink: 'https://tinyurl.com/537b94av' // Add a link for purchasing
        },
        { 
          id: 5, 
          name: 'Neuro Zoom', 
          category: 'tech', 
          description: 'Wireless headphones with advanced noise-canceling features, providing a premium sound experience.', 
          createdAt: '2024-07-28', 
          image: '/5.jpg',
          buyLink: 'https://example.com/buy/5' // Add a link for purchasing
        },
        { 
          id: 6, 
          name: 'The Forever Woman', 
          category: 'health', 
          description: 'A complete nutrition pack designed to support your overall health and wellness.', 
          createdAt: '2024-07-10', 
          image: '/6.jpg',
          buyLink: 'https://tinyurl.com/2mma6ky4' // Add a link for purchasing
        },
      ]
    };
  },
  created() {
    const productId = this.$route.params.id; // assuming your route is set up to pass this
    this.product = this.products.find(product => product.id == productId);
  },
  methods: {
    buyNow() {
      if (this.product && this.product.buyLink) {
        // Redirect to the buy link when the button is clicked
        window.location.href = this.product.buyLink;
      }
    }
  }
}
</script>

<style scoped>
/* Add any additional styles here */
</style>
