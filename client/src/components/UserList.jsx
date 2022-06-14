import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getUsers } from '../redux/action'
import EditUser from './EditUser'

const UserList = () => {
    const {users,loading} = useSelector(state=>state)
    const dispatch = useDispatch()

    useEffect(() => {
     
    dispatch(getUsers())
     
    }, [])
    
  return (
    <div style={{marginTop:"2%",display:"flex",justifyContent:"space-around",flexWrap:"wrap"}} >
        {
            loading ? <h2>loading...</h2>
            :
            users.map(el=>
                <div  style={{border:"1px solid black",width:"350px"}} >
                    <h2> {el.fullName} </h2>
                    <p>  {el.email}  </p>
                    <p> {el.phone} </p>
                    <button  onClick={()=>dispatch(deleteUser(el._id))} >Delete</button>
                    <EditUser  user={el} />
                </div>
                )
        }
    </div>
  )
}

export default UserList