import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router"; // Import Vue Router
import Home from "./views/Home.vue"; // Import the Home component
import Blog from "./views/Blog.vue"; // Import the Home component
import BlogPost from "./views/blogPost.vue";
import ProductPage from "./views/ProductPage.vue";
import "./style.css";

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
