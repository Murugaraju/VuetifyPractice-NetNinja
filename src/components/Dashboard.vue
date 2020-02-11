<template>
    <div class="dashboard">
         <h2 class="subheading grey--text ml-2">Dashboard</h2>
        <v-container class="my-5">
          <v-row class="mb-3">
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn small v-on="on" @click="sort('title')" depressed  class="grey lighten-3 grey--text ml-3">
                  <v-icon small left>mdi-folder</v-icon>
                  
                  <span class="caption text-lowercase">By project title</span>
              
                </v-btn>
              </template>
              <span>Sort by project title</span>
            </v-tooltip>

            <v-tooltip top>
                <template v-slot:activator="{on}">
                    <v-btn v-on="on" small depressed @click="sort('person')" class="grey lighten-3 grey--text ml-1">
                      <v-icon small left>mdi-account</v-icon>
                      
                      <span class="caption text-lowercase">By project person</span>
                    </v-btn>
                </template>
                <span>Sort by project name</span>
            </v-tooltip>
              

          </v-row>
            <v-card flat class="mb-1"
            v-for="(project,i) in projects"
            :key='i' 
            >
              <v-row :class="`ma-0 pa-3 project ${project.status}`">
                    <v-col cols="12"  md='6'>
                        
                            <div>{{project.title}}</div>
                    </v-col>
                    <v-col cols='6'  sm='4' md='2'>
                       <div class="caption grey--title">Person</div>
                        <div>{{project.person}}</div>
                    </v-col>
                     <v-col cols='6'  sm='4' md='2'>
                       <div class="caption grey--title">Due by</div>
                        <div>{{project.due}}</div>
                    </v-col>
                    <v-col cols='12'  sm='4' md='2' align="right">
                           
                        <div class="right">
                            <v-spacer></v-spacer>
                            <v-chip small  :class="`ma-2 ${project.status} caption white--text`">{{project.status}}</v-chip>
                        </div>
                    </v-col>
              </v-row>
              <v-divider></v-divider>
            </v-card>
        </v-container>
    </div>
</template>
<script>
export default {
    name:"Dashboard",
    data(){
        return {
        projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
        }
       
    },
     methods:{
       sort(projectkey){
         this.projects.sort((a,b)=>a[projectkey]<b[projectkey]?-1:1)
       }
        }

}
// below grid example which I worked on
//  <v-row > 
//              <v-col cols='12'  :xs='12' :sm='12' :md='6' :lg='4'>
//                  <v-btn  outlined block>1</v-btn>
//              </v-col>
//              <v-col cols='12' :xs='12' :sm='12' :md='6'>
//                  <v-btn outlined block>2</v-btn>
//              </v-col>
//               <v-col cols='12' :xs='12' :sm='12' :md='6'>
//                  <v-btn outlined block>2</v-btn>
//              </v-col>
             
//               <v-col cols='12' :xs='12' :sm='12' :md='6'>
//                  <v-btn outlined block>2</v-btn>
//              </v-col>
             
             
//          </v-row>
</script>

<style scoped>
.project.complete{
  border-left: 4px solid rgb(33, 201, 61);
}
.project.ongoing{
  border-left: 4px solid orange
}
.project.overdue{
  border-left: 4px solid rgb(223, 53, 23);
}
.v-chip.complete{
  background:  rgb(33, 201, 61);
}
.v-chip.ongoing{
  background: orange
}
.v-chip.overdue{
  background: rgb(223, 53, 23);
}
</style>