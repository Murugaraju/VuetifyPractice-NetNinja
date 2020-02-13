import Vuex from 'vuex';
import Vue from 'vue';
import {Todostore} from './modules/todostore';

Vue.use(Vuex)

//  I always making the mistake of Vuex.Store, capital S instead store
export const store=new Vuex.Store( {
   
        modules:{
            Todostore,
        }
   
    })

