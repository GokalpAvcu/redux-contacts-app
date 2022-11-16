import { useState }  from 'react'

import {useDispatch} from 'react-redux'
import {addContact} from '../../redux/contactSlice'

function Form() {
    const [name, setName] = useState('')

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault() // yazmamın sebebi sayfayı yenilemesini engellemek

        console.log("hjdjhjjghdhgj");
        dispatch(addContact({name}));

    }
  return (
    <div>
        <form onSubmit={handleSubmit}> 
            <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
        </form>
    </div>
  )
}

export default Form