
import Hero from "./components/Hero.vue";
import OurServices from "./components/OurServices.vue";
import { createWebHistory, createRouter } from "vue-router";
import Menu from "./components/Menu.vue";
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

    },
    {
        name: 'Menu',
        component:Menu,
        path:'/Menu',

    }

];
const router =createRouter(
    {
        history:createWebHistory(),routes
    }
);
export default router