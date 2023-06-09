import { createRouter, createWebHashHistory } from "vue-router";
import routes from './routes'

let router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})