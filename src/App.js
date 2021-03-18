import { render } from '@testing-library/react';
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import {auth, createUserProfileDocument } from './firebase/firebase.util'
import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';

class App extends React {
    constructor() {
      super()
    }
    
    this.state = {
      currentUser: null 
    }
  }

  unsubcribeFromAuth = null;

  //suscripción de user
  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const useRef = await createUserProfileDocument(userAuth);
        //onsnapshot te recibe una referencia de user
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }//modifique el state de mi currentUser
          });
          console.log(this.state)
        });
      }
      this.setState({current: userAuth});
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <switch>
          <Route exxact='/' >
        </switch> 
      </div>
    )
    
  }


}

export default App;
