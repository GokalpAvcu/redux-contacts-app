import { useState }  from 'react'

import {nanoid} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux'
import {addContact} from '../../redux/contactSlice'

function Form() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const dispatch = useDispatch(); // dispatch kullanmamın sebebi redux ile bağlantı kurmak

    const handleSubmit = (e) => {
        e.preventDefault() // yazmamın sebebi sayfayı yenilemesini engellemek

        if(!name ) return false;
        
        dispatch(addContact({ id: nanoid(), name}));
        setName('');

    };
  return (
    <div>
        <form onSubmit={handleSubmit}> 
            <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input placeholder="phone number" value={number} onChange={(e) => setNumber(e.target.value)} type="text" />
        </form>
    </div>
  )
}

export default Form