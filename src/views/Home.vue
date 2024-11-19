<template>
 <Hero/>
    <!-- <ProductComponent/>     -->
    <LandingPage/>
    <NewsletterSection/>
    <Testimonials/>

</template>
<script>
  import Hero from '../components/Hero.vue';
// import ProductComponent from  '../components/ProductLine.vue';
import LandingPage from  '../components/LandingPages.vue';
import NewsletterSection from  '../components/NewsLetter.vue';
import Testimonials from '../components/Testimonial.vue';

export default {
  components: {
    Hero,
    // ProductComponent,
    LandingPage,
    NewsletterSection,
    Testimonials,

  }
}
</script>