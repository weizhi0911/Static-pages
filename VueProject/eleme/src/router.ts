<<<<<<< HEAD
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Order from './views/Order.vue';
import LineItem from './views/LineItem.vue';
import Shop from './views/Shop.vue';

import My from './views/My.vue';
import Find from './views/Find.vue';
=======
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Order from "./components/Order.vue";
import My from "./views/My.vue";
import Find from "./views/Find.vue";
>>>>>>> c9d2e0a6ce021fc9e366e8fbf905c3d6a35960d7

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/',
      redirect: '/home',

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/my',
      name: 'my',
      component: My,

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/find',
      name: 'find',
      component: Find,

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/order',
      name: 'order',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './components/Order.vue'),
    },
    {
      path: '/lineItem',
      name: 'lineItem',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Lineitem.vue'),
    },
    {
      path: '/shop',
      name: 'shop',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Shop.vue'),
    },
    {
      path: '/merchant',
      name: 'merchant',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './components/Merchant.vue'),
    },
    {
      path: '/shopfooter',
      name: 'shopfooter',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './components/ShopFooter.vue'),
    },
    {
      path: '/affirm',
      name: 'affirm',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Affirm.vue'),
    },



  ],
});
