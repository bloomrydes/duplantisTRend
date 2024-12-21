

<template>
 <Hero/>

    <BlogComponent/>
    <NewsletterSection/>
    <Testimonials/>

</template>
<script>
  import Hero from '../components/Hero.vue';
// import ProductComponent from  '../components/ProductLine.vue';
import BlogComponent from  '../components/Blog.vue';
import NewsletterSection from  '../components/NewsLetter.vue';
import Testimonials from '../components/Testimonial.vue';

export default {
  components: {
    Hero,
    // ProductComponent,
    BlogComponent,
    NewsletterSection,
    Testimonials,

  }
}
</script>