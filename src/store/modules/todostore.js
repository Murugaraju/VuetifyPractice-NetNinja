import db from '../../axio';


const state={
    loading:false,
    status:0,
    created:false,
    data:{
       todos:[],
       
    } ,//always the api success 2xx response,
    error:{
       
    } //always the api 4xx and 5xx response
    
}


const getters={
    //mapping all state keys to respective components getters or extent of data of the componet
    loading:state=>state.loading,
    status:state=>state.status,
    created:state=>state.created,
    data:state=>state.data,
    error:state=>state.error
   
}

//function inside action take first arguement as context which is object
// so you will use object destructuring get commit out of it.

const actions={
    todoListGet({commit}){
        console.log("came in action")
        commit('setLoading')
        db.get('http://localhost:8000/todo/').then(
            (res)=>{
                console.log('printing the response',res,typeof res)
                commit('setTodolist',res.data)
                commit('resetLoading')
            }
        ).
        catch(
            (error)=>{
                console.log('catching error ',error,typeof error)
                commit('resetLoading')

            }
        )
    },
    todoCreate(context,data){
        console.log('Came in todoCreate')
        
        db.post('http://localhost:8000/todo/',data).then(
            (res)=>{
                context.commit('newtodoPush',res.data)
                
                console.log('printing response',res)
            }
        ).catch(
            (error)=>{
                
                context.commit('resetLoading')
                console.log('Came in error of axios',error)
            }
        )
    },
    resetCreated(context,input){
        context.commit('resetCreated',input)
    }
}

//mutation functions are immediate executable

const mutations={
    setTodolist(state,data){
        state.data.todos=[...data]
    },
    setLoading(state){
        console.log('came in setloading')
        state.loading=true
       
        
    },
    resetLoading(state){
        console.log('came in resetloading')
        state.loading=false
        
    },
    newtodoPush(state,data){
        console.log('updated data',data,typeof data)
        let temp=[...state.data.todos]
        temp.push(data)
        state.data.todos=temp
        state.created=true
        console.log('printing todos after update',temp)
    },
    resetCreated(state){
        state.created=false
    }
}

export const Todostore={
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}