<template>

    <v-dialog v-model='dailog' width="500"> 
        <template v-slot:activator="{on}" >
            <v-btn v-on="on" depressed class="indigo">
                <v-icon left small>mdi-folder</v-icon>
                <span class="text-capitalize">Add new project</span>
            </v-btn>
        </template>
        <v-card>
            <v-card-title dark class="headline green white--text lighten-1">
                Create new project
            </v-card-title>
            <v-card-text>
                <v-form ref='form'>
                    <v-text-field v-model='title' prepend-icon="mdi-folder" :rules="commonrules" label="Title"></v-text-field>
                    <v-textarea v-model='detail' prepend-icon="mdi-pencil" :rules="commonrules" label="Detail"></v-textarea>
                    <v-menu>
                        <template v-slot:activator="{on}">
                            <v-text-field 
                            readonly 
                            label="Due date" 
                            :value="formateDate" 
                            v-on="on" 
                            prepend-icon="mdi-calendar"
                            hint="read-only"
                            persistent-hint
                            ></v-text-field>
                        </template>
                        
                        <v-date-picker v-model="date">

                        </v-date-picker>
                         
                    </v-menu>
                  
                   
                    
                </v-form>
            </v-card-text>
            <v-spacer></v-spacer>
             <v-card-actions>
                 <v-spacer></v-spacer>
                        <v-btn depressed small @click="save"  :loading="loading">Add project</v-btn>
                </v-card-actions>
        </v-card>

    </v-dialog>
    
</template>
<script>
// import format from 'date-fns/format'

// validation creation is simple v-text-field takes rules attribute feed it with array of function return either true or error string
export default {
    name:'Popup',
    data(){
        return{dailog:false,
        date:undefined,
        title:'',
        detail:'',
        commonrules:[
            v=>v.length>=3||'Minimum length 3 required!'
        ],
        loading:false
        }
    },
    computed:{
        formateDate(){
            if(this.date){
                const [year, month, day] = this.date.split('-')
                
                return `${month}/${day}/${year}`
            }else{
                return ''
            }
        }
    },
    methods:{
        save(){
            if(this.$refs.form.validate()){
                console.log('came in after valid dation')
                this.loading=true;
                setTimeout(()=>{
                    this.loading=false;
                    this.dailog=false;
                    this.$emit('projectAdded')
                },4000)
            }
            console.log('came in saves')
        }
    }
}
</script>