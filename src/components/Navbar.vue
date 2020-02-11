<template>
  <nav>
         <v-navigation-drawer app   v-model="drawer" class="orange lighten-1">
            <v-list class="orange lighten-1">

            </v-list>
            <v-divider ></v-divider>
            <v-list 
            rounded
            class="orange lighten-1"

            >
            <v-subheader>MENU</v-subheader>
                <v-list-item-group v-model="item" color="indigo" >
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
                            <v-list-item-title v-text="item.text">home</v-list-item-title>
                        </v-list-item-content>
                          
                       
                    </v-list-item>
                </v-list-item-group>
            </v-list>
      </v-navigation-drawer>
        <v-content class="ma-0 pa-0">
      <v-app-bar app flat >
          <!-- <v-btn class="green lighten-3" fab depressed>
              <v-icon>mdi-home</v-icon>
              </v-btn> -->
          <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
          <v-toolbar-title >
              
              <span class="text-uppercase grey--text">Todo</span>
              <span >Ninja</span>

          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn  depressed  >
              
              <span class="text-capitalize">Logout</span>
              <v-icon right >mdi-logout</v-icon>
          </v-btn>
      </v-app-bar>
      </v-content>
     
    
  </nav>   

</template>
<script>
export default {
   name:'Navbar',
   data(){
       return{
           drawer:true,
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
           console.log(this.drawer)
    
          this.drawer=!this.drawer
    //        
       }

   }
}
</script>