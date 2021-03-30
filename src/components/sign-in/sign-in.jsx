import React from 'react'

import FormInput from '../form-input/form-input';
import './sign-in.scss'
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle } from '../../firebase/firebase.util';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    //prevengo la acion y limpio las prop
    this.setState({email: '', password: ''})
  };

  handleChange = event => {
    const {value, name} = event.target;
    this.setState({[name]: value})
  };
  
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an acount</h2>
        <span>Sign in with your email password</span>
        
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput 
            name='password'
            type='password'
            handleChange={this.handleChange}
            value={this.state.password}
            label='password'
            required
          />

          <div className='buttons'>
            <CustomButton type='submit'>Sing in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sing in With Google</CustomButton>
            {/* //def de alias como props */}
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
