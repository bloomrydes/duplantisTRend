import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router"; // Import Vue Router
import Home from "./views/Home.vue"; // Import the Home component
import Blog from "./views/Blog.vue"; // Import the Home component
import BlogPost from "./views/blogPost.vue";
import ProductPage from "./views/ProductPage.vue";
import ProductDetail from "./views/productDetail.vue";
import Sub from "./views/subscribe.vue";
import ArticleOne from "./views/blogs/article1.vue";
import Form from "./views/PostBlog.vue";
import ArticleTwo from "./views/blogs/article2.vue";
import ArticleThree from "./views/blogs/article3.vue";
import ArticleFour from "./views/blogs/article4.vue";
import  Main from "./views/Main.vue";
import ArticleFive from "./views/blogs/article5.vue";
import "./style.css";
import SingleBlog from "./views/SingleBlog.vue";
// Define your routes
const routes = [
  {
    path: "/", // Define the path for the home route
    name: "Home",
    component: Home, // Set the component for the route
  },
  {
    path: "/blog-page", // Define the path for the home route
    name: "Blog",
    component: Blog, // Set the component for the route
  },
  {
    path: "/post/:id",
    name: "BlogPost",
    component: BlogPost,
  },
  {
    path: "/products",
    name: "ProductPage",
    component: ProductPage,
  },
  {
    path: "/product/:id", // Adjust the path according to your needs
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/subscribe", // Adjust the path according to your needs
    name: "Sub",
    component: Sub,
  },
  {
    path: "/blog/article-one", // Adjust the path according to your needs
    name: "ArticleOne",
    component: ArticleOne,
  },
  {
    path: "/blog/article-two", // Adjust the path according to your needs
    name: "ArticleTwo",
    component: ArticleTwo,
  },
  {
    path: "/blog/article-three", // Adjust the path according to your needs
    name: "ArticleThree",
    component: ArticleThree,
  },
  {
    path: "/blog/article-four", // Adjust the path according to your needs
    name: "ArticleFour",
    component: ArticleFour,
  },
  {
    path: "/blog/article-five", // Adjust the path according to your needs
    name: "ArticleFive",
    component: ArticleFive,
  },
  {
    path: "/post/form", // Adjust the path according to your needs
    name: "Form",
    component: Form,
  },
  {
    path: "/main", // Adjust the path according to your needs
    name: "Main",
    component: Main,
  },
  {
    path: "/blog/:id", // Adjust the path according to your needs
    name: "SingleBlog",
    component: SingleBlog,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Use the HTML5 history mode
  routes,
});

const app = createApp(App);

// Use the router
app.use(router);

app.mount("#app");
