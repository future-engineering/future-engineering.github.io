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
        path: '/members',
        component: () => import('../views/People.vue')
    },
    {
        path: '/publications',
        component: () => import('../views/Publications/Publications.vue'),
        children: [
            {
                path: "/publications",
                component: () => import("../views/Publications/PublicationsList.vue")
            }
        ]
    },
    {
        path: '/news',
        component: () => import('../views/News.vue')
    },
    {
        path: '/links',
        component: () => import('../views/Links.vue')
    },
    {
        path: '/article',
        component: () => import('../views/Article.vue')
    },


]