import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='signup template d-flex justify-content-center align-items-center vh-100 bg-black'>
    <div className='form_container p-5 rounded bg-white'>
    <form>
    
    <h3>Sign Up</h3>
    
    <div className = 'mb-2'>
        <label htmlFor='fname' className='mb-2'>First Name</label>
        <input type= 'text' placeholder='Enter First Name' className='form-control'/>
    </div>
    <div className = 'mb-2'>
        <label htmlFor='flname'className='mb-2'>Last Name</label>
        <input type= 'text' placeholder='Enter Last Name' className='form-control'/>
    </div>
    <div className = 'mb-2'>
    <label htmlFor='email'className='mb-2'>Email</label>
    <input type= 'email' placeholder='Enter Email Address' className='form-control'/>   
    </div>
    <div className = 'mb-2'>
    <label htmlFor='password'className='mb-2'>Password</label>
        <input type= 'password' placeholder='Enter Password' className='form-control'/>
    </div>
    
    <div className= 'd-grid mb-4'>
        <button className='btn btn-primary'>Sign Up</button>
    </div>
    <p className='text-end mt-2'>
        Already Registered ? <Link to='/' className='ms-2'>Sign in </Link>
    </p>
    </form>
    </div>
    
        </div>
  )
}



export default Signup