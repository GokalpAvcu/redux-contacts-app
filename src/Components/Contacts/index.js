import React from 'react'
import Form from './Form'
import List from './List'

function Contacts() {
  return (
    <div id="container" className='center'>
        <h1>Contacts</h1>
        <Form/>
        <List/>
    </div>
  )
}

export default Contacts