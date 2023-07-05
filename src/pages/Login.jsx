import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <>
    <div className='container3'>
      <form id='log'>
        <h1>Login</h1>
        <label htmlFor='email'>Email:</label><br />
        <input type='email' id='email' placeholder='Enter email'/><br /><br />
        <label htmlFor='password'>Password:</label><br />
        <input type='password' id='password' placeholder='Enter password'/><br /><br />
        <input type='checkbox' id='check'/>
        <label htmlFor='Show'>Show Password</label><br />
        <button type='SIGN IN' id='Sign'>SIGN IN</button><br /><br />
        <div className='ab'>Forgot <a href='none'>Username/Password</a></div><br />
        <div className='bc'>Don't have an account? <a href='none'>Sign up</a></div>

      </form>
      

    
    </div>
    </>
   
  )
}

export default Login