<template>
  <section class="relative py-20 lg:pt-32 bg-[#1f2937] overflow-x-hidden">
    <div class="relative z-10 container mx-auto px-4">
      <span class="text-2xl text-white">The Latest Product</span>
      <h2 class="mt-4 mb-16 text-4xl md:text-3xl text-white font-bold font-heading">Beauty Product</h2>
      <div class="flex flex-wrap -mx-3">
        <div v-for="product in products" :key="product.id" class="w-full lg:w-1/4 px-3 mb-16">
          <a class="block mb-10" @click.prevent="navigateToProduct(product.id)">
            <div class="relative">
              <img class="w-full h-96 object-cover" :src="product.image" :alt="product.name" />
            </div>
            <div class="mt-12">
              <div class="mb-2">
                <h3 class="mb-3 text-3xl text-white font-bold font-heading">{{ product.name }}</h3>
                <p class="text-xl font-bold font-heading text-white">
                  <span class="text-xs text-gray-200 font-semibold font-heading">{{ product.description }}</span>
                </p>
              </div>
            </div>
          </a>
          <a class="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200" @click.prevent="navigateToProduct(product.id)">
            Buy Now
          </a>
        </div>

        <div class="w-full flex justify-center mt-10">
          <a class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold font-heading py-4 px-12 rounded-md uppercase transition duration-200" href="/products">
            See More
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'LatestProducts',
  data() {
    return {
 products: [
        { id: 1, name: 'Tea Burn', category: 'fitness', description: 'It contains ingredients like vitamins, minerals, L-theanine, and caffeine, helping boost..', image: '/1.jpg' },
        { id: 2, name: 'Lean Biome', category: 'health', description: 'LeanBiome contains a variety of powerhouse probiotics to improve overall gut...', image: '/3.jpg' },
        { id: 3, name: 'GlucoBerry', category: 'tech', description: 'GlucoBerry contains optimized maqui berry, a superfood known to support optimal kidney...', image: '/2.jpg' },
        { id: 4, name: 'Sumatra Keto Acv Gummies Slim Belly Tonic ', category: 'fitness', description: 'Sumatra Keto Acv Gummies Slim Belly Tonic - Official Formula - Sumatra Slim Belly Tonic Powder Capsules Dietary ...', image: '/4.jpg' },
        { id: 5, name: 'Neuro Zoom', category: 'health', description: 'Experience the support of our capsules in maintaining...', image: '/5.jpg' },
        { id: 6, name: 'The Forever woman', category: 'health', description: 'The Secret to Attracting a Man Who Loves You, Sees You, And Cherishes You Into A Committed. But we live in the age of the...', image: '/6.jpg' },
      ],
    };
  },
  methods: {
    navigateToProduct(productId) {
      this.$router.push({ name: 'ProductDetail', params: { id: productId } });
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>

