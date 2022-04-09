import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../firebase/index";
import NotFound from "@/components/NotFound.vue";
import layout from "@/layout"; // 主页

const routes = [

    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound,
    },

    {
        path: "/",
        name: "layout",
        component: layout,
        redirect: "/index",
        children: [
            {
                path: "/about",
                name: "About",
                component: () => import("../views/AboutPage/About.vue"),
                meta: {
                    reqiresAuth: true,
                },
            },
            {
                path: "profile",
                name: "Profile",
                component: () => import("../views/ProfilePage/Profile.vue"),
                meta: {
                    reqiresAuth: true,
                },
            },
            {
                path: "likeblogs",
                name: "likeblogs",
                component: () => import("../views/ProfilePage/LikeBlogs.vue"),
                meta: {
                    reqiresAuth: true,
                },
            },
            {
                path: "register",
                name: "Register",
                component: () => import("../views/Register.vue"),
            },
            {
                path: "login",
                name: "Login",
                component: () => import("../views/Login.vue"),
            },
            {
                path: "index",
                name: "index",
                component: () => import("../views/Destination/index.vue"),
            },
            {
                path: "attractionListPage/:cityname",
                name: "attractionListPage",
                component: () => import("../views/attractionListPage"),
                props: true
            },
            {
                path: "indivAttractionPage/:cityname/:id",
                name: "indivAttractionPage",
                component: () => import("../views/indivAttractionPager"),
                props: true
            },
            {
                path: "attractionListPage/:id",
                name: "indivAttraction",
                component: () =>
                    import("../views/attractionListPage/indivAttraction"),
                props: true,
            },
            {
                path: "blogListPage/:city",
                name: "blogListPage",
                component: () => import("../views/blogListPage"),
                props: true,
            },
            {
                path: "cityPage/:cityname",
                name: "cityPage",
                component: () => import("../views/cityPage"),
                props: true,
            },
            {
                path: "blog-main",
                name: "blog-main",
                component: () => import("../views/blog-main"),
            },
            {
                path: "commentslisting",
                name: "commentslisting",
                component: () => import("../views/cityPage/CommentsListingPage"),
                props: true,
            },
            {
                path: "indivattraccomments",
                name: "indivattraccomments",
                component: () => import("../views/indivAttractionPager/IndivAttracComments"),
                props: true,
            },
            {
                path: "indivblogcomment",
                name: "indivblogcomment",
                component: () => import("../views/indivBlogPage/indivBlogComment"),
                props: true,
            },
            {
                path: "indivBlogPage/:id",
                name: "indivBlogPage",
                component: () => import("../views/indivBlogPage"),
                props: true,
            },
            {
                path: "myblogs",
                name: "myblogs",
                component: () => import("../views/ProfilePage/MyBlogs"),
                meta: {
                    reqiresAuth: true,
                },
            },
            {
                path: "/createBlog",
                name: "BlogCreate",
                component: () => import("../views/blogCreate/index.vue"),
                meta: {
                    reqiresAuth: true,
                },
            },
            {
                path: "review",
                name: "Review",
                component: () => import("../views/ReviewPage/index.vue"),
            },
            {
                path: "review-feedback",
                name: "ReviewFeedback",
                component: () => import("../views/ReviewPage/feedback.vue"),
               
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    //if is login but wnt to go to login page, then jump to the main page
    if (to.name === "Login" && auth.currentUser) {
        next("/");
        return;
    }
    //if want to see the personal page but do not login, then jump to the login page
    if (
        to.matched.some((record) => record.meta.requiresAuth) &&
        !auth.currentUser
    ) {
        next({ name: "Login" });
        return;
    }

    next();
});

export default router;
