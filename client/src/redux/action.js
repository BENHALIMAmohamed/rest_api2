import axios from "axios"
import { ADD_USER, DELETE_USER, EDIT_USER, GET_USERS } from "./actionTypes"



export const getUsers = () =>  async(dispatch) =>  {
try {
    const res = await axios.get("/getUsers")
    console.log(res)
    dispatch({
        type:GET_USERS,
        payload:res.data
    })
} catch (error) {
    alert('get error!')
}
}


export const addUser = (newUser) => async(dispatch) => {
    try {
        const res = await axios.post('/add',newUser)
        dispatch({
            type:ADD_USER,
            payload:res.data
        })
    } catch (error) {
        alert('add error!')
    }
}


export const deleteUser = (x) => async(dispatch)=> {
try {
    const res = await axios.delete(`/deleteUser/${x}`)
    dispatch({
        type:DELETE_USER,
        payload:{
            id:x,
            message:res.data
        }
    })
} catch (error) {
    alert("delete error")
}
}



export const editUser = (editedUser) => async(dispatch)=> {
try {
    const res = await axios.put(`/edit/${editedUser.id}`,editedUser)
    dispatch({
        type:EDIT_USER,
        payload:res.data
    })
} catch (error) {
    alert('edit error')
}
}
