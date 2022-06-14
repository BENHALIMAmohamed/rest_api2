import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/action'

const AddUser = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const dispatch = useDispatch()

const reset = () => {
    setFullName("");
    setEmail("");
    setPhone('')
}
 

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            fullName,
            email,
            phone,
        }
        dispatch(addUser(newUser))
        reset()
    }
  return (
    <div>
        <form  onSubmit={handleSubmit} >
            <label>Name</label>
            <input type="text" required value={fullName} onChange={(e)=>setFullName(e.target.value)} />
            <label >Email</label>
            <input type="text" required value={email} onChange={(e)=>setEmail(e.target.value)} />
            <label>Phone</label>
            <input type="text" required value={phone} onChange={(e)=>setPhone(e.target.value)} />
            <button>Add</button>
        </form>
    </div>
  )
}

export default AddUser