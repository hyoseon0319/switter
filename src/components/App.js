import React, { useState, useEffect } from 'react';
import AppRouter from './Router'
import { authService } from '../firebase'

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
   authService.onAuthStateChanged((user) => {
     if(user) {
       setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
     } else {
       setUserObj(null);
     }
     setInit(true);
   })
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    console.log(authService.currentUser);
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  }

  // 유저의 로그인 여부를 알 수 있게 됨
  // setInterval(() => {
  //   console.log(authService.currentUser);
  // }, 2000);

  return (
    <>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        />
      ) : (
        "Initializing..."
      )}
    </>
  );
  }
  
  export default App;
  