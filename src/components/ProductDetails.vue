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
          description: 'It consists of vitamins, minerals and other important nutrients to ramp up your immunity andturbocharge your metabolism.Tea Burn is 100% naturally formulated without any colours, stimulants, preservatives, or adulteratedsubstances. It is also sent for a quality check in third-party labs to get a power-packed supplement.', 
          createdAt: '2024-10-10', 
          image: '/1.jpg',
          buyLink: 'https://tinyurl.com/3kuh69pt' // Add a link for purchasing
        },
        { 
          id: 3, 
          name: 'GlucoBerry', 
          category: 'tech', 
          description: 'Support Optimal Blood Health: GlucoBerry supplement is loaded with powerful antioxidant support fromour custom blend of Maqui Berry, Biotin, Gymnema leaf extract, and Chromium.Superstar Kidney Support: GlucoBerry contains optimized maqui berry, a superfood known to supportoptimal kidney function, especially in effectively draining excess substances from your blood. This helpsmaintain balanced levels throghout the day.Doctor-Formulated: Dr. Mark Weis and his team designed this blend for maximum health support, based on real-world results. Just take one small capsule each day. Manufactured in the USA. Vegetarian and vegan-friendly. Rigorously tested for purity and effectiveness.', 
          createdAt: '2024-09-15', 
          image: '/2.jpg',
          buyLink: 'https://tinyurl.com/y7pe9kw7' // Add a link for purchasing
        },
        { 
          id: 2, 
          name: 'LeanBiome', 
          category: 'health', 
          description: 'Powerful Probiotics for Gut Support: LeanBiome is a 9-strain probiotic supplement containing 20 billionCFUs (colony-forming units). This unique blend of gut-supporting ingredients is scientifically shown tosupport your fitness journey. It works by rebalancing the gut microbiome to reduce fat storage, givingyou an added boost to achieve your health goals.Research-Backed Ingredients: LeanBiome contains a variety of powerhouse probiotics to improve overallgut health. The key probiotics that rebalance your microbiome include lactobacillus gasseri, lactobacillusrhamnosus, and lactobacillus fermentum. It also contains Greenselect Phytosome, a caffeine-free greentea extract formulated with absorption-boosting technology.', 
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
          description: 'Enhance Cognitive Performance: Neuro Zoom capsules are carefully crafted with a unique formula designed to accelerate thinking speed, optimize focus, promote healthy memory and creativity. Holistic Cognitive Support: Neuro Zoom is your comprehensive solution for total cognitive well-being. This nootropic formula not only increases brain power but also provides efficient support for enhanced memory and improved concentration.All-Natural Brain Boost: Neuro Zoom is made from safe and pure ingredients, ensuring a brain health supplement that supports concentration and focus. Our advanced formula is designed for complete cognitive support.', 
          createdAt: '2024-07-28', 
          image: '/5.jpg',
          buyLink: 'https://example.com/buy/5' // Add a link for purchasing
        },
        { 
          id: 6, 
          name: 'The Forever Woman', 
          category: 'health', 
          description: "You want to be loved and cherished by a man. You want a man who feels like you're too important to him to lose you.But we live in the age of the 'hookup culture' where casual, friend with benefits situationships have become the norm.Maybe you get into a situation where you give your everything only to be taken for granted, have the guy pull away, and eventually disappear on your altogether. This makes you feel confused, frustrated, and feeling like you doubt yourself and your own worth..wondering if you'll ever get into the relationship you want.If you’re having a hard time with men and dating, it’s not your fault. We live in a culture that encourages superficial relationships and discourages anything meaningful.I believe there’s a better way for men and women to get into and stay in committed relationships that last. That’s why I put together a proven path that will help you get into the relationship you want. It’s called, 'The Forever Woman.'",
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
