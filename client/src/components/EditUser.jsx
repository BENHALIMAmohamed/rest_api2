import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editUser, getUsers } from '../redux/action';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const EditUser = ({user}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [fullName, setFullName] = useState(user.fullName)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault();
        const editedUser = {
            id:user._id,
            fullName,
            email,
            phone,
        }
        dispatch(editUser(editedUser))
        dispatch(getUsers())
        closeModal()
    }
  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
        <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}

        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form  onSubmit={handleSubmit} >
            <label>Name</label>
            <input type="text" required value={fullName} onChange={(e)=>setFullName(e.target.value)} />
            <label >Email</label>
            <input type="text" required value={email} onChange={(e)=>setEmail(e.target.value)} />
            <label>Phone</label>
            <input type="text" required value={phone} onChange={(e)=>setPhone(e.target.value)} />
            <button>Confirm</button>
        </form>
      </Modal>
    </div>
  )
}

export default EditUser