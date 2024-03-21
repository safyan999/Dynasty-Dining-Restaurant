
import Hero from "./components/Hero.vue";
import OurServices from "./components/OurServices.vue";
import { createWebHistory, createRouter } from "vue-router";

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


    }

];
const router =createRouter(
    {
        history:createWebHistory(),routes
    }
);
export default router