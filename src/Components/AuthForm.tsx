import React, { useState } from 'react'
import { iAuth } from './Interfaces/auth.interface'

interface AuthProps {
    type: string,
    onSupmit: (formData:iAuth) => void
}

const AuthForm:React.FC<AuthProps>  = (type, onSupmit) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

  return (
    <div>
        {/* <h1>{type === 'login' ? 'login' : 'register'}</h1> */}
        <h1>Not functionted yet</h1>
    </div>
  )
}

export default AuthForm
