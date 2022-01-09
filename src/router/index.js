import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Page from "@/components/Page/Page.vue";
import Post from "@/components/Post/Post.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        // Assuming you're using the default permalink structure for posts
        path: '/:year/:month/:day/:postSlug',
        name: 'Post',
        component: Post,
    },
    {
        path: '/:pageSlug',
        name: 'Page',
        component: Page,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
