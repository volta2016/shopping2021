import React from 'react'
import {link} from 'react-router-dom';
import { auth }  from '../../firebase/firebase.util';
import { ReactComponent as logo } from '../../assets/crown.svg'
import './header.scss'

const Header = ({ currentUser }) =>  (
  <div className="header">
    <link className="options" to="/">
      <logo className="logo" />
    </link>
    <link className="options" to="/">
      SHOP
    </link>
    <link className="options" to="/">
      CONTACT
    </link>
    {current ? (
      <div className="option" onClick={() => auth.signOut()}>
        SIGN PUT
      </div>
    ) : (
      <link to="/singin" />
    )
    
    }
   
  </div>
  
);




export default Header;


// const Header = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }//tema de lógica con parentesis

//const Header = () =>  ( ) //para tema visuales 

