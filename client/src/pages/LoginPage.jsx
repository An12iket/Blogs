import React from 'react'

const LoginPage = () => {
  return (
    <div>
        <form className='login'>
        <h1>Login</h1>
            <input type="text" placeholder='username' />
            <input type="text" placeholder='password' />
            <button>Login</button>
        </form>
    </div>
  )
}

export default LoginPage