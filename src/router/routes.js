export default [
    {
        path: '/',
        component: () => import('../views/About.vue'),
    },
    {
        path: '/research',
        component: () => import('../views/Research.vue')
    },
    {
        path: '/people',
        component: () => import('../views/People.vue')
    },
    {
        path: '/publications',
        component: () => import('../views/Publications.vue')
    },
    {
        path: '/teaching',
        component: () => import('../views/Teaching.vue')
    },
    {
        path: '/code',
        component: () => import('../views/Code.vue')
    },


]