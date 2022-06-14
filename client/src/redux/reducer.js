import { ADD_USER, DELETE_USER, GET_USERS } from "./actionTypes";


const init = {
    users:[],
    loading:true,
    msg:null
}


const reducer = (state=init,{type,payload}) => {
  switch (type) {
    case GET_USERS:
        return {
            ...state,loading:false,users:payload
        }
    case ADD_USER:
        return {
            ...state,users:[...state.users,payload]
        }
    case DELETE_USER:
        return {
         ...state,msg:payload.message,users:state.users.filter(el=>el._id!==payload.id)
        }
    default:
        return state
  }
}

export default reducer