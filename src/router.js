import VueRouter from 'vue-router';
import Vue from 'vue';

import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Team from './components/Team';
import Todo from '@/components/Todo/Todo';
Vue.use(VueRouter)

const routes=[
    {
        path:"/",
        redirect:"/dashboard",
        // children:[
        //     {
        //         path:'/home',
        //         component:Home
        //     }
        // ]

    },
    {
        path:'/dashboard',
        component:Dashboard
    },
    {
        path:'/projects',
        name:'projects',
        component:Projects
    },
    {
        path:'/team',
        name:'team',
        component:Team
    },
    {
        path:'/Todo',
        name:'todo',
        component:Todo,

    },
    {
        path:'**',
        redirect:'/dashboard'
    }

]

const router = new VueRouter({
    mode:'history',
 
    routes, 
})


export default router;