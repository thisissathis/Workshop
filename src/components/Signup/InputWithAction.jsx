import React, { useState } from 'react';
import Input from '../Input/Input';
import ActionElements from '../Action/ActionElements';

export default function InputWithAction({ onChange, onClick , error}) {
  const [email, setEmail] = useState('');

  const onEmailChange = (event) => {
    setEmail(event.target.value);
    onChange(email);
  };

  const onButtonClick = () => {
    onClick(email);
  };

  return (
    <div className='input-with-action'>
      <Input type="email" error={error} placeholder="Your email address" value={email} onChange={onEmailChange} />
      <ActionElements type="button" onClick={onButtonClick} children="Get Started" />
    </div>
  );
}
