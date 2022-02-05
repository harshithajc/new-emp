
import React, { useState } from 'react'
import'bootstrap/dist/css/bootstrap.min.css'



function Login(props) {
  const [userDetailes, setUserDetailes] = useState({
    email: '',
    password: ''
  })

  const [isEmailValid, setEmailValid] = useState(true)
  const [emailError, setemailError] = useState('')

  const [isPasswordValid, setPasswordValid] = useState(true)
  const [passwordError, setpasswordError] = useState('')

  const login = ((event) => {
    console.log(event);
    event.preventDefault()
    console.log(userDetailes);

    const isValidEmail = validateEmail(userDetailes.email)
    const isValidPass = validatePass(userDetailes.password)

    if ((isValidEmail && userDetailes.email) && (isValidPass && userDetailes.password)) {
      console.log(props);
      props.history.push('/home')
    } else {
      alert('Data is not valid')
    }
  })

  const validateEmail = ((email) => {
    let empty2 = /^$/
    const letter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (empty2.test(email)) {
      setEmailValid(false)
      setemailError('Please fill the form')
      return false
    } else if (letter.test(email)) {
      setEmailValid(true)
      setemailError('')
      return true
    } else {
      setEmailValid(false)
      setemailError('Email shold be strong')
      return false
    }
  })

  const validatePass = ((password) => {
    const empty1 = /^$/
    const letter2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

    if (empty1.test(password)) {
      setPasswordValid(false)
      setpasswordError('Please fill the field')
      return false
    } else if (letter2.test(password)) {
      setPasswordValid(true)
      setpasswordError('')
      return true
    } else {
      setPasswordValid(false)
      setpasswordError('Password should be strong')
      return false
    }
  })



  const handleChange = ((event) => {
    console.log(event.target.name);
    const userDetailesCopy = { ...userDetailes }
    userDetailesCopy[event.target.name] = (event.target.value)
    setUserDetailes(userDetailesCopy)
  })

  return (
    <div >
      <form onSubmit={login} >
        <div className='format'>
        <h4 className='show'>Sign in to your account </h4>
            <div  className='text'>
    
            <label style={{margin:'10px'}}>Email address: </label>
            <br />
           
            <input  className ='subformat' type='email' name="email" id="emailId" placeholder="Enter your email address..."
              onChange={(event) => {
                handleChange(event)
              }}
              value={userDetailes.email} />
              <br></br>
            {!isEmailValid ? <span style={{ color: 'red', fontSize: '9px' }}>{emailError}</span> : null}

           <br />
          <br/>
            <label >Password:</label>
            <a href='#' >Forgot password?</a>
            <br></br>
            <input  className ='subformat' type='Password' name="password" id="passwordId" placeholder="Enter your password..."
              onChange={(event) => {
                handleChange(event)
              }}
              value={userDetailes.password} />
              <br></br>
            {!isPasswordValid ? <span style={{ color: 'red', fontSize: '9px' }}>{passwordError}</span> : null}
                <br/>
                <br/>
                <span></span>
                 <input className ='subformat' type='submit' value='Sign in' id='button'/>
          </div> 


            

           <div className='set'>
            
           <p id='texter' >New User? <a href="#">Create an account</a>.</p>
          
           </div>
          
        </div>
      </form>

    </div>
  )
}

export default Login