import React from 'react'

const Login:React.FC = () => {
  return (
    <div className='App'>
        <form action="submit">
            <input type="text" placeholder='Enter your e-mail'/>
            <input type="text" placeholder='Enter your password'/>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Login
