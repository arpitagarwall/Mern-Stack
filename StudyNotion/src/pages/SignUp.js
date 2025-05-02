import React from 'react'
import Template from '../components/Template'
import signUpImg from '../assets/signup.png'

function SignUp({setIsLoggedIn}) {
  return (
    <Template title="Join the millions learning to code with StudyNotion for free" desc1="Build skills for today, tomorrow and beyond." 
    desc2="Education to future-proof your career." image={signUpImg} formtype="signup" setIsLoggedIn={setIsLoggedIn}>
    </Template>
  )
}

export default SignUp