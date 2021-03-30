import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {auth, createUserProfileDocument} from '../../firebase/firebase.util';
import './sign-up.scss'


class SingUp extends React.Component  {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    
    if(password !== confirmPassword) {
      alert('password don`t mathc')
      return;
    }//en caso que sean diferentes match de pass

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email, 
        password
      );//des de firebase

      await createUserProfileDocument(user, {displayName});//queda el guardado del nombre

      this.setState({
        displayName: '',
        email: '',
        password: '',

      });//clean property
    } catch(error) { 
      console.log(error)
    }
  };
  
  handleChange = event => {
    const { name, value} = event.target
    this.setState({[name]: value})
  };

  render() {
    const { displayName, email, password, confirmPassword} = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have account</h2>
        <span></span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

export default SingUp;
