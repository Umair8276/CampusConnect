

export const Reducer = (state,action) => {
    switch(action.type){
        case "LOGIN":{
            return {...state,user:action.payload}
           
        }
        case "LOGOUT":
          return {user:[]}
          
        default:
            return state
    }
}

