import React, { useState, useReducer } from 'react';

import Card from '../UI/Card';
import classes from './Login.module.css';
import Button from '../UI/Button';

//This email reducer added out side of the component function only because it is nothing to do with the
//state of component its just a function reference, so it can be out side of component function. Hence it is as per the 
//following.
const emailReducer = () => {

}

const Login = (props) => {
  //Commenting the useState way of accepting and validating the email inputs to use
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();

  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  //This is a sample reducer usage . useReduce can be replacement to useState for combining states together.
  //useRducer returns a state and dispatcher function. Dispatcher function accepts an ACTION , can be a String or an onbject anything .
  //and updates the state accordingly. the second argument is initial state of the useReducer.  We could pass a third argumnet as well
  //to useReducer and which is going to be an intialFunction , can be used to intialise the state .
  const [emailState, dispatchEmail] = useReducer(emailReducer, { value:'', isValid: false });

  const emailChangeHandler = (event) => {

    //============================================================================================================
    //The following way of setting email and validity check is rewritten with another way using useReducers , hence
    //Commenting the the code below.
    //----------------------------------------------------------------------------------------------------------
    // setEnteredEmail(event.target.value);
    // setFormIsValid(
    //   event.target.value.includes('@') && enteredPassword.trim().length > 6
    // );

    //Reading the value from useReducer state vlaue now.
    // setEnteredEmail(emailState.value);

  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      //event.target.value.trim().length > 6 && enteredEmail.includes('@')
      event.target.value.trim().length > 6 && emailState.isValid
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));

    // setEmailIsValid(emailState.isValid);
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // props.onLogin(enteredEmail, enteredPassword);

    props.onLogin(emailState.value, enteredPassword);

  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            //emailIsValid === false ? classes.invalid : ''
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            //value={enteredEmail}
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
