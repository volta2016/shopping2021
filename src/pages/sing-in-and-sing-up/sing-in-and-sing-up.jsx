import React from 'react';
import './sing-in-and-sing-up.scss';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sing-up';
import { signInWithGoogle } from '../../firebase/firebase.util';

const SignInAndSignUpPage = () => {
  return (
    <div className='sign-in-and-sign-up '>
      <SignIn />
      <SignUp />
    </div>
  )
}



export default SignInAndSignUpPage;
