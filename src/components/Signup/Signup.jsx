import React, { useState } from 'react';
import InputWithAction from './InputWithAction';
import "./Signup.scss";


export default function Signup() {
    const [error, seterror] = useState("")
    
    const emailValidator = (email) => {
        // Regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            return true;
        } else {
            return false;
        }
    };

    const processEmailToAccess = (email) => {
        if (emailValidator(email)) {
            window.location.href = 'https://app.loch.one/welcome';
        } else {
            seterror("The provided email address not valid, Please check and update!")
        }
    };

    const checkEmailAddress= (email) => {
        if (emailValidator(email)) {
            console.log("This is Valid email Address",email )
            seterror("");
        } else {
            seterror("The provided email address not valid, Please check and update!")
        }
    };
    
  return (
    <div className='signup-component'>
        <div className='signup-header'> 
            Sign up for exclusive access.
        </div>
        <div className='signup-actions'>
            <InputWithAction onChange={checkEmailAddress} onClick={processEmailToAccess} error={error}/>
            {
                error ?
                    <span  className='signup-error-message'>{error}</span>
                :
                    <span  className='signup-info'>You’ll receive an email with an invite link to join.</span>
            }
        </div>
    </div>
  )
}
