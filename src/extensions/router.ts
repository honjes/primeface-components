import {createRouter, createWebHistory} from "vue-router"
import Showcase from "../sites/Showcase.vue"

const routes = [
    { path: '/', component: Showcase, name: "showcase", default: true},
    { path: '/test', component: Showcase, name: "test"},
    { path: '/test2', component: Showcase, name: "test2"},
    { path: '/test3', component: Showcase, name: "test3"},
]

const router = createRouter({
    history: createWebHistory(""),
    routes,
})

export default router