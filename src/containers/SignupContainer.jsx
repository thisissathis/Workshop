import React from 'react'
import Signup from '../components/Signup/Signup'
import "./PageContent.scss";
import "../pages/LandingPage.scss";

export default function SignupContainer() {
  return (
    <div className="signup-container">
      <Signup/>
    </div>
  )
}
