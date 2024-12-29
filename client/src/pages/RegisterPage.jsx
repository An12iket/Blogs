import React from 'react'

const RegisterPage = () => {
  return (
    <div>
      <form className='register'>
        <h1>Register</h1>
            <input type="text" placeholder='username' required/>
            <input type="text" placeholder='password' required />
            <button>Register</button>
        </form>
    </div>
  )
}

export default RegisterPage
