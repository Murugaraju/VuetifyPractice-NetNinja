<template>
  <nav>
      <v-snackbar v-model='snackbar' top color="success ">
          <span>Added project</span>
          <v-btn @click="snackbar=false" depressed color="success" fab>
              <v-icon>mdi-close</v-icon>
          </v-btn>
      </v-snackbar>
         <v-navigation-drawer app  dark v-model="drawer" class="indigo">
             <v-row justify="start" class="ml-1 mt-1 hidden-md-and-up">
                 <v-btn @click="drawer=!drawer" depressed fab small class="indigo">
                     <v-icon center>mdi-arrow-left</v-icon>
                 </v-btn>

             </v-row>
            
             <v-col align="center" class="pt-5">

                     <v-avatar size="100">
                         <img src="/avatar-4.png" alt="">
                     </v-avatar>
                        <p class="white--text subheading mt-1">Super Ninja</p>
             </v-col>
              <v-row justify="center" class="my-3">
                 <Popup  @projectAdded="snackbar=true" />
             </v-row>
            <v-list class="indigo ">

            </v-list>
            <v-divider ></v-divider>
            <v-list 
            rounded
            class="indigo"

            >
            <v-subheader>MENU</v-subheader>
                <v-list-item-group v-model="item" color="yellow" >
                    <v-list-item 
                     v-for="(item,i) in items"
                     :key="i"
                     redirect
                     :to="item.route"
                    
                    >
                        <v-list-item-icon>
                            <v-icon  v-text="item.icon"></v-icon>

                        </v-list-item-icon>
                        <v-list-item-content>
                              
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                            
                        </v-list-item-content>
                          
                       
                    </v-list-item>
                    <v-list-item redirect :to="'/Todo'">
                        <v-list-item-icon>
                            <v-icon>mdi-pencil</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                           
                           <v-badge color="purple" inline content="new">
                                <v-list-item-title>Todos</v-list-item-title>
                           </v-badge>
                             
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
      </v-navigation-drawer>
        <v-content class="ma-0 pa-0">
      <v-app-bar app flat  >
          <!-- <v-btn class="green lighten-3" fab depressed>
              <v-icon>mdi-home</v-icon>
              </v-btn> -->
          <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
          <v-toolbar-title >
              
              <span class="text-uppercase grey--text">Thanks</span>
              <span >Ninja</span>

          </v-toolbar-title>
          <v-spacer></v-spacer>
            <v-menu offset-y >
            <template v-slot:activator="{ on }">
                <v-btn
                small
                fab
                class="grey lighten-4 grey--text"
                depressed
                dark
                v-on="on"
                >
                <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                v-for="(item, index) in items"
                :key="index"
                @click="()=>{}"
                >
                <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item>
                <v-list-item
                @click="()=>{}"
                >
                    
              
              <v-list-item-title class="red--text">
                  <span>Logout</span>
                  <v-icon right >mdi-logout</v-icon>
              </v-list-item-title>
              
          
                </v-list-item>
            </v-list>
            </v-menu>
          
      </v-app-bar>
      </v-content>
     
    
  </nav>   

</template>
<script>
import Popup from './Popup';
export default {
   name:'Navbar',
   components:{
       Popup
   },
   data(){
       return{
           snackbar:false,
           drawer:null,
           item: 0,
           items: [
                { text: 'Dashboard', icon: 'mdi-view-dashboard', route:'/dashboard'},
                { text: 'Projects', icon: 'mdi-folder-open', route:'/projects' },
                { text: 'Team', icon: 'mdi-account', route:'/team' },
            ],
       }
   } ,
   watch:{
       item(){
           console.log('came in item')
            if(this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl){
                console.log('came in sm and xs')
                //  this.drawer=!this.drawer
            }
         
    //        
       }

   }
}
</script>