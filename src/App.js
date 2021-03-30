import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import {auth, createUserProfileDocument } from './firebase/firebase.util'
import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignUpPage from './pages/sing-in-and-sing-up/sing-in-and-sing-up';

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        currentUser: null 
      }
    }
    
  unsubcribeFromAuth = null;//libera la auth

  //suscripción de user
  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //onsnapshot te recibe una referencia de user
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }//modifique el state de mi currentUser
          });
        });
      }
      this.setState({current: userAuth});//asignación completa
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();//clean
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch> 
      </div>
    )  
  }


}

export default App;
