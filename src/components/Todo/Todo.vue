<template>
   <div class="Todo">
       
       <v-container class="px-2">
           <h2 class="subheading grey--text ">Todo Experiment</h2>
            <h4 class="grey--text caption ">hi, here will try to do all crud operation with api
        expetially <b>Karti</b> look into it
            </h4>

            <v-btn block :loading="loading" outlined @click="todoListGet">Experiment</v-btn>


           <v-card>
               <v-row>
                   <v-col cols="12" sm="12" md="5">
                       <v-btn block outlined >
                          todo tile goes here
                       </v-btn>
                   </v-col>
                   <v-col cols="12" sm="7" md="3">
                         <v-btn block outlined >
                          urgency details here
                       </v-btn>
                   </v-col>
                   <v-col col="9" sm="5" md="3">
                         <v-btn block outlined >
                             due date for the todo
                       </v-btn>
                   </v-col>
                   <v-col cols="3" sm="12" md="1">
                         <v-btn block outlined >
                          btns
                       </v-btn>
                   </v-col>

                   
               </v-row>
           </v-card>
       </v-container>
   </div>
</template>
<script>
//mapping getters and actions from todostore
import {mapGetters, mapActions} from 'vuex';
export default {
    name:'Todo',
    date(){
        return {

        }
    },
    computed:{
        ...mapGetters('Todostore',['loading','status','data','error'])
    },
    methods:{
        ...mapActions('Todostore',['todoListGet'])
    },
    watch:{
        loading(n,o){
                console.log('loading new and old',n,o)
        }
    }
}
</script>
<style scoped>

</style>