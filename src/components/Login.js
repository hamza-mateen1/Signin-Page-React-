import React from 'react'
import {Link} from 'react-router-dom'
import '../style.css'

function Login() {
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-black'>
<div className='form_container p-5 rounded bg-white'>
<form>

<h3>Sign In</h3>

<div className = 'mb-2 align-items-left mt-4'>
    <input type= 'email' placeholder='Enter Email Address' className='form-control'/>
</div>

<div className = 'mb-2'>
    <input type= 'password' placeholder='Enter Password' className='form-control'/>
</div>

<div className='mb-2'>
<input type='checkbox' className='custom-control custom-checkbox' id = 'check' />
<label htmlFor='check' className='custom-input-label ms-2'> Remember me</label>
</div>

<div className= 'd-grid mb-4'>
    <button className='btn btn-primary'>Sign in</button>
</div>
<p className='text-end mt-2'>
    Forgot <a href='#'>Password?</a><Link to='/signup' className='ms-2'>Signup</Link>
</p>
</form>
</div>

    </div>
  )
}

export default Login