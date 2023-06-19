// import React, { useState } from 'react';
// import AddUser from './components/Users/AddUser';
// import UsersList from './components/Users/UsersList';

// function App() {

//   //The usersList is 
//   const [usersList, setUsersList] = useState([]);

//   //Handler defined in App and will be pass it the component to collect data from the compoenent , 
//   //where data is collected.
//   const addUserHandler = (userName, age) => {
//   const id = Math.random().toString()  
//     //Here we are using a different form of settter for the state.
//     //setter here accepts a function as parameter , internally react supplies the snapshot of the previous state here 
//     //and that can be used to update the older state wtih the nwe data.
//     //Refer the following code for more details... 
//     setUsersList((pUsersList) => {
//       //Using the spread operator for pulling data from old list.
//       return [...pUsersList, {id: id, uName: userName, uAge: age }];
//     });

//   }
//   return (
//     <div>
//       <AddUser onAddUser={addUserHandler} />
//       <UsersList users={usersList} />
//     </div>
//   );
// }

// export default App;



//==================================================================================================================
//Another App.js version.
//Code below is the login page implementation . Few compoenents from other folders are being used for
//this implementation. 

import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //=====================================================================
  // useEffect Examples ... Different version of useEfect and the way executes.
  //---------------------------------------------------------------------

  //The following version. (VERSION-1)
  //Runs everytime this component function renders.
  useEffect(() => {
    console.log("useEffect version-1 running ...");
  });

  //The following version (VERSION-2)
  //The usage of useEffect here is to run the supplied funtion on load .
  //That happens when we are not declaring any depdencies in the dependency array.

  useEffect(() => {
    const localStoredVal = localStorage.getItem("isLoggedIn");
    console.log("useEffect version-2 running ...");
    if (localStoredVal === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  //The following version (VERSION-3)
  //This executes only when the dependencies suppied in the array changes.
  //Could be an function or an state.
  //That happens when we are declaring depdencies in the dependency array.

  useEffect(() => {
    console.log("useEffect version-3 running ...");
    const localStoredVal = localStorage.getItem("isLoggedIn");
    if (localStoredVal === "1") {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  //The following version (VERSION-4)
  //UseEffect can be used with an another version of it with a mentioned delay .
  //Its called debalancing.

  useEffect(() => {
    //A time out function defined here and for 500 seconds it will wait after a change happened for the
    // state isLoggedIn
    const timerIdentifier = setTimeout(()=> {
      console.log("useEffect version-4 running ...");
      
    }, 500);
    //In this version if we specify a return error function that will used as a clean up function.
    //This will not execture for the frist time but for any subsequent state changes this clean up will be executed first.

    return () => { 
      console.log("CLEAN UP executed from useEffect version-4");
      //Clearing the time out , for the new state.
      clearTimeout(timerIdentifier);
    }
  }, [isLoggedIn]);

  //End of useEffect examples.
  //=============================================================================================================

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    //The floowing code is an example to access the brwsers internal storage.
    localStorage.setItem("isLoggedIn", "1");
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    //removing the item from internal storage.
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;

