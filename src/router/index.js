import { createRouter, createWebHistory } from "vue-router";
import CartView from "../views/CartView.vue";
import Home from "../views/Home.vue"

const routes = [
    {
        path: "/cart",
        name: "Cart",
        component: CartView
    },
    {
        path: "/",
        name: "Home",
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory('/CW3CST3145/'),
    routes
})

export default router;