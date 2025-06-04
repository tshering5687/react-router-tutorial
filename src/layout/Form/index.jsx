import { useState} from 'react'
import{ useNavigate } from 'react-router-dom'

// onLogin is props. which we are getting from function or components

export default function Form({onLogin}) {
    const [fullname, setFullname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // Simulate login
        if (fullname && username && password) {
          localStorage.setItem('username', username)
            onLogin()
        navigate('/dashboard')
    }
   }

  return (
    <div>
     <h1>Form</h1>
       <div className='card'>
         <p>Enter your fullname, username and password to simulate a login.</p>

         <form onSubmit={handleSubmit}>
         <div style={{ marginBottom: '1rem' }}>
                <input
                 type="fullname" 
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                placeholder='fullname'
                required
              />
         </div>
           <div style={{ marginBottom: '1rem' }}>
                <input
                 type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username'
                required
              />
         </div>
         <div style={{ marginBottom: '1rem'}}>
            <input
             type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             placeholder='Password'
             required
         />
         </div>
         <button type='submit'>Login</button>
        </form>
     </div>
    </div>
  )
}
