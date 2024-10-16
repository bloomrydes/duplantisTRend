<template>
  <section class="relative py-12 lg:pt-22 bg-[#ffff] overflow-x-hidden">
    <div class="relative z-10 container mx-auto px-4">
      
      <h2 class="mt-4 mb-16 text-4xl md:text-2xl text-black font-bold font-heading">Latest Blogs</h2>
      <div class="flex flex-wrap -mx-3">
        <div class="w-full lg:w-1/4 px-3 mb-16 lg:mb-0" v-for="(blog, index) in blogs" :key="blog.id">
          <router-link :to="{ name: 'BlogPost', params: { id: blog.id } }" class="block mb-10"> <!-- Use router-link for navigation -->
            <div class="relative">
              <img class="w-full h-64 object-cover" :src="blog.image" alt="Blog Post Title" />
            </div>
            <div class="mt-4">
              <h3 class="mb-3 text-2xl text-black font-bold font-heading">
                {{ blog.title }}
              </h3>
              <p class="text-gray-400 mb-2">{{ blog.description }}</p>
              <span class="text-sm text-gray-500">Published on {{ blog.date }}</span>
            </div>
            <div class="flex justify-center mt-4">
              <span class="inline-block ml-2 cursor-pointer" title="Read Here">
                <img src="/link.png" alt="Read Icon" class="h-6 w-6 mx-2" />
              </span>
              <span class="inline-block ml-2 cursor-pointer" title="Read in Medium">
                <img src="/medium.png" alt="Link Icon" class="h-6 w-6 mx-2" />
              </span>
            </div>
          </router-link> <!-- Closing router-link tag -->
        </div>

        <div class="w-full flex justify-center mt-10">
          <a class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold font-heading py-4 px-12 rounded-md uppercase transition duration-200" href="#">
            See More
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogComponent",
  data() {
    return {
      blogs: [
        {
          id: 1,
          title: "Behind the Curtain: Insights You Wont Find In Books",
          description: "Discover how Neurozoom can enhance your cognitive function and support your brain health. Learn more here!",
          date: "July , 2024",
          image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*6m4L8Z0vlNQ32mt2cn-sqw@2x.jpeg",
        },
        // {
        //   id: 2,
        //   title: "Hydration: The Key to Performance",
        //   description: "Discover how Neurozoom can enhance your cognitive function and support your brain health. Learn more here!",
        //   date: "July 11, 2024",
        //   image: "https://i.pinimg.com/564x/fe/9f/c5/fe9fc53618e47885bf815cb9a2699b75.jpg",
        // },
        // {
        //   id: 3,
        //   title: "Surfing: Tips for Beginners",
        //   description: "Essential tips for getting started with surfing this summer.",
        //   date: "July 10, 2024",
        //   image: "https://i.pinimg.com/564x/fe/9f/c5/fe9fc53618e47885bf815cb9a2699b75.jpg",
        // },
        // {
        //   id: 4,
        //   title: "Fitness Gear: Must-Haves for Summer",
        //   description: "A guide to the essential fitness gear you need for summer sports.",
        //   date: "July 9, 2024",
        //   image: "https://i.pinimg.com/564x/fe/9f/c5/fe9fc53618e47885bf815cb9a2699b75.jpg",
        // },
      ],
    };
  },
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>

