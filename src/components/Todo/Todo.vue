<template>
   <div class="Todo">
       
       <v-container class="px-2">
           <h2 class="subheading grey--text ">Todo Experiment</h2>
            <h4 class="grey--text caption ">hi, here will try to do all crud operation with api
        expetially <b>Karti</b> look into it
            </h4>

            <v-row>
                <v-col v-if="data.todos.length==0 && loading"  align='center' cols="12">
                    <v-btn  :loading="loading" icon @click="todoListGet">
                        <v-icon>mdi-refresh</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row justify="end" class="pr-3">
                <TodoCreateDialog/>
            </v-row>
           
            <div>
           <v-card 
         
           flat class="pa-2 my-1 "
           v-for="todo in data.todos"
           :key="todo.id"
           >
               
               <v-row >
                   <v-col cols="12" sm="12" md="5">
                       <div class="caption grey--text">Title</div>
                       <div class="text-capitalize">{{todo.title}}</div>
                   </v-col>
                   <v-col cols="12" sm="7" md="3">
                       <div  class="caption grey--text">urgency</div>
                        <v-chip 
                        dark
                        small
                        :color="todo.urgency=='NR'?'primary':todo.urgency=='ME'?'orange':'red'"
                         >{{urgencyTranslate(todo.urgency)}}</v-chip>

                   </v-col>
                   <v-col col="9" sm="3" md="2">
                       <div class="caption grey--text">target date</div>

                        <div>{{todo.target_date}}</div>
                   </v-col>
                   <v-col cols="3" sm="2" md="2">
                       <div class="caption grey--text">actions</div>
                         <v-btn text icon   class="red--text ">
                             <v-icon >mdi-delete</v-icon>
                         </v-btn>
                          <v-btn text icon  class="primary--text">
                             <v-icon >mdi-pencil</v-icon>
                         </v-btn>
                   </v-col>

                   
               </v-row>
           </v-card>
           </div>
       </v-container>
   </div>
</template>
<script>
//mapping getters and actions from todostore
import {mapGetters, mapActions} from 'vuex';
import TodoCreateDialog from './TodoCreateDialog';
export default {
    name:'Todo',
    components:{
        TodoCreateDialog
    },
    data(){
        return {
            
                todos:[
                {
                    "id": 1,
                    "title": "teste",
                    "urgency": "NR",
                    "target_date": "2020-02-14"
                },
                {
                    "id": 2,
                    "title": "teste",
                    "urgency": "ME",
                    "target_date": "2020-02-14"
                },
                {
                    "id": 3,
                    "title": "teste",
                    "urgency": "IM",
                    "target_date": "2020-02-14"
                }
                ],
        }
    },
    computed:{
        ...mapGetters('Todostore',['loading','status','data','error']),
       
    },
    methods:{
        ...mapActions('Todostore',['todoListGet']),
         urgencyTranslate(input){
            const mapper={
                NR:'Normal',
                IM: 'Immediate',
                ME:'Medium'

            }
            return mapper[input]
        },
        
    },
    watch:{
        loading(n,o){
                console.log('loading new and old',n,o)
        }
    },
    mounted(){
        this.todoListGet()
    }

}
</script>
<style scoped>

</style>