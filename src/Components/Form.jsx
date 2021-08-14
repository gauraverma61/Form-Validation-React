import React from 'react'
import './Form.css';

const Form = () => {
    return (
        <form>
            <div className='input_container'>
               <label>First Name</label>
               <input type="text" />
            </div>
            <div className='input_container'>
               <label>Last Name</label>
               <input type="text" />
            </div>
            <div className='input_container'>
               <label>Email</label>
               <input type="text" />
            </div>
            <div className='input_container'>
               <label>City</label>
               <input type="text" />
            </div>
            <button id='btn'>Submit</button>
        </form>
    )
}

export default Form