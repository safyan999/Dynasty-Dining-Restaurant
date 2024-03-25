
import Hero from "./components/Hero.vue";
import OurServices from "./components/OurServices.vue";
import { createWebHistory, createRouter } from "vue-router";
import About from "./components/About.vue"
const routes=[
    {
        name: 'Hero',
        component:Hero,
        path:'/',

    },
    {
        name: 'OurServices',
        component:OurServices,
        path:'/OurServices',

    },
    {
        name: 'About',
        component:About,
        path:'/About',

    }

];
const router =createRouter(
    {
        history:createWebHistory(),routes
    }
);
export default router