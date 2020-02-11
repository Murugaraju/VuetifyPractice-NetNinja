<template>
    <div class="team">
        <h2 class="subheading grey--text ml-2">Team</h2>
        <v-container class="my-5">
            <v-row >
                <v-col cols="12" sm="6" md="4" lg="3" v-for="(person,i) in team" v-bind:key="i">
                    <v-card  flat class="ma-3 text-center">
                       
                       
                           <v-avatar size="100">
                               <img :src="person.avatar" :alt="person.name.substr(0,1)">
                           </v-avatar>
                      
                       <v-card-text>
                           <div class="subheading">
                               {{person.name}}
                           </div>
                           <div class="grey--text">
                               {{person.role}}
                           </div>
                       </v-card-text>
                       <v-card-actions>
                           <v-spacer></v-spacer>
                           <v-btn depressed fab class="white lighten-5 grey--text">
                               <v-icon center >mdi-message</v-icon>
                              
                           </v-btn>
                       </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    name:'Team',
    data(){
        return {
        team: [
        { name: 'The Net Ninja', role: 'Web developer',avatar:'/avatar-1.png' },
        { name: 'Ryu', role: 'Graphic designer' ,avatar:'/avatar-2.png' },
        { name: 'Chun Li', role: 'Web developer' ,avatar:'/avatar-3.png' },
        { name: 'Gouken', role: 'Social media maverick',avatar:'/avatar-4.png' },
        { name: 'Yoshi', role: 'Sales guru', avatar:'/avatar-5.png'}
      ]
        }
    }
}
</script>