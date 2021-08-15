import React, {useState} from 'react';
import {signInWithGoogle} from './repository/auth/auth-google';
import firebase from 'firebase';

const App = () => {
  const [user, setUser] = useState<firebase.User | null>();

  const login = () => {
    signInWithGoogle().then(res => {
      setUser(res.user)
    })
  }

  return (
    <>
      <h1>hello {user?.uid}</h1>
      <button onClick={login}>login</button>
    </>
  );
}

export default App;
