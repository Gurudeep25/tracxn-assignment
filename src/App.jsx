import React from 'react'
import CareersForm from './CareersForm'
import './App.css'
import EmailVerification from './EmailVerification'

const App = () => {
  return (
    <div>
      <h1 className='heading'>Careers Page form</h1>
      <h2>New Applicant ?</h2> 
      <CareersForm />
      <EmailVerification />
    </div>
  )
}

export default App