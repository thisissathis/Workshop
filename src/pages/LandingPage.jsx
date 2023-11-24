import React from 'react'
import LandingPageContent from '../containers/LandingPageContent';
import SignupContainer from '../containers/SignupContainer';
import "./LandingPage.scss"

export default function LandingPage() {
  return (
    <div className="landing-page">
        <LandingPageContent />
        <>
          {true && (<SignupContainer />)}
        </>
    </div>
  )
}
