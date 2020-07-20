import React, {Component} from "react";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
  apiKey: "AIzaSyAqEv81FqrgvLdVog9N5bcfUoNVjtswk3U",
  authDomain: "webchat-a085a.firebaseapp.com"
})

class App extends Component {
  state = { isSignIn: false} 
  
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks:{
      signInSuccess: ()=>false
    }
  }

  componentDidMount = () =>{
    firebase.auth().onAuthStateChanged((user)=>{
      this.setState({isSignIn: !!user})
      console.log("user", user);
      
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.isSignIn ? (
          <span>
            <div>yessssssssssss</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button> 
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

export default App;
