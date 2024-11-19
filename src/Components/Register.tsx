import React from 'react'

const Register:React.FC = () => {
  return (
    <div className='App'>
        <form action="submit">
            <input type="text" placeholder='Your name'/>
            <input type="text" placeholder='Your e-mail'/>
            <input type="text" placeholder='Create your password'/>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register
