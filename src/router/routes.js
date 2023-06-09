export default [
    {
        path: '/',
        component: () => import('../views/About.vue'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/research',
        component: () => import('../views/Research.vue'),
        meta: {
            title: "研究方向"
        }
    },
    {
        path: '/members',
        component: () => import('../views/People.vue'),
        meta: {
            title: "课题组成员"
        }
    },
    {
        path: '/publications',
        component: () => import('../views/Publications/Publications.vue'),
        meta: {
            title: "科学研究"
        }

    },
    {
        path: '/news',
        component: () => import('../views/News.vue'),
        meta: {
            title: "新闻中心"
        }
    },
    {
        path: '/links',
        component: () => import('../views/Links.vue'),
        meta: {
            title: "联系我们"
        }
    },
    {
        path: '/article',
        component: () => import('../views/Article.vue'),
        meta: {
            title: "科学研究"
        }
    },


]