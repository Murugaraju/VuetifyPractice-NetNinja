<template>
    <v-dialog v-model="dialog" width="700">
        <template  v-slot:activator="{on}">
            <v-btn v-on="on" class="mx-2" small depressed fab dark color="green">
                    <v-icon dark>mdi-plus</v-icon>
                </v-btn>
        </template>
        <v-card class="pa-3" >
            <v-card-title dark class="indigo white--text">Create Todo</v-card-title>
            <v-card-text>
                <v-form :ref="'todoform'">
                    <v-text-field
                    v-model="todocreate.title"  
                    :rules="[(v)=>v.length>=3?true:'Minimum 3 character length required!',]"
                    prepend-icon="mdi-alarm" 
                    label="Title">
                    </v-text-field>
                    <v-select
                    v-model="todocreate.urgency"
                    prepend-icon="mdi-run"
                    :items="urgencyItems"
                    label="Urgency"
                    
                    >
                    </v-select>
                    <v-menu>
                        <template v-slot:activator="{on}">
                            <v-text-field 
                            :rules="[(v)=>v!=undefined||'Select the target date!']"
                            readonly 
                            label="Target date" 
                            v-model="todocreate.target_date" 
                            v-on="on" 
                            prepend-icon="mdi-calendar"
                            hint="yyyy-mm-dd"
                            persistent-hint
                            ></v-text-field>
                        </template>
                        
                        <v-date-picker v-model="todocreate.target_date">

                        </v-date-picker>
                         
                    </v-menu>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                        :loading="createLoading"
                         @click="save" dark depressed class="primary">Create</v-btn>
                        <v-btn @click="dialog=!dialog" outlined>Cancel</v-btn>
                        
                    </v-card-actions>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
    name:'TodoCreateDialog',
    data(){
        return{
            dialog:false,
            createLoading:false,
            urgencyItems:['Normal','Medium','Immediate'],
            todocreate:{
                title:'',
                urgency:'Normal',
                target_date:''
            }
        }
    },
    computed:{
        ...mapGetters('Todostore',['loading','status','error','data','created'])
    },
    methods:{
        ...mapActions('Todostore',['todoCreate','resetCreated']),
        save(){
                if(this.$refs.todoform.validate()){
                    console.log("printinf form",this.todocreate)
                    //loading animation for create
                    this.createLoading=true;
                    const mapper={
                        Normal:'NR',
                        Immediate:'IM',
                        Medium:'ME'
                    }
                    let temp={...this.todocreate,urgency:mapper[this.todocreate['urgency']]}
                    this.todoCreate(temp) 
                }
                
        }
    },
    watch:{
        created(newValue){
            if(newValue==true){
                
                //stop animation loading
                this.createLoading=false

                this.dialog=false
                // setTimeout(()=>{this.resetCreated()},500)
                this.$refs.todoform.reset();
                //seting todocreate to default
                this.todocreate={
                                    title:'',
                                    urgency:'Normal',
                                    target_date:''
                                }
                console.log('printing todo form after reset',this.todocreate)
                //Todo store setting created bolian false and this watched wonts do because,
                // we are checking new value change that to true only
                this.resetCreated()
              
            }
        }
    },
    mounted(){
        console.log('TodoCreateDialog mounted',this)
    }
}
</script>