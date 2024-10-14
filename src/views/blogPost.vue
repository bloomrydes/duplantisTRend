<template>
 
<Header/>
<BlogPost/>
</template>

<script>
import Header from '../components/BlogHeading.vue';
import BlogPost from '../components/BlogPost.vue';
export default {
  components: {
    Header,
    BlogPost
  },
};
</script>