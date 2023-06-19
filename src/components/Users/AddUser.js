import Card from "../UI/Card";
//Ref has been added as an alteratvie to use state, state usage is commetning for the time being.
// import React, { useState} from "react";
import React, { useRef } from "react";

import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  //Properties to hold the state of this component when user enter something
  //The defined Event hanlders are responsible for pull the value from event and set it in the state constants

//   const [userName, setUserName] = useState("");
//   const [userAge, setUserAge] = useState("");

  //Now the same use case is going to achieve by using Ref here.
  //Ref are very good to reading values from elments. So its less code compared to the State.
  const nameRef  = useRef();
  const ageRef = useRef();

//   const userNameChangeHandler = (event) => {
//     setUserName(event.target.value);
//   };

//   const useAgeChangeHandler = (event) => {
//     setUserAge(event.target.value);
//   };

  const addUserHandler = (event) => {
    event.preventDefault();

    const nameFromRef = nameRef.current.value;
    const ageFromRef = ageRef.current.value;


    //Adding empty validations for field preventing them from submitting the form
    //Note the trim() function followed by length syntax
    if (nameFromRef.trim().length === 0 || ageFromRef.trim().length === 0) {
      return;
    }
    //Here age is a number but anything read from DOM would be String , so we are doing a 
    //forced conversion to number by adding a + before the variable.
    if (+ageFromRef < 1) {
      return;
    }

    props.onAddUser(nameFromRef, ageFromRef);
    // console.log("Entred Name is :", userName);
    // console.log("Entred Age is :", userAge);

    //setting back to empty once form submitted.
    // setUserName("");
    // setUserAge('')

    //Setting to empty throuhg refs
    nameRef.current.value = '';
    ageRef.current.value = '';

  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="userName">Username :</label>
        <input
          id="userName"
          type="text"
          //Setting back value back from source, (2 way binding)- While using the state way of sotring values
          // Commented to try out the Ref way of recieving values from form
          //   value={userName}
          //   onChange={userNameChangeHandler}

          //Ref is added here in the element
          ref={nameRef}
        ></input>
        <label htmlFor="age">Age (Years) :</label>
        <input
          id="age"
          type="number"
          //Setting back value back from source, (2 way binding)- While using the state way of sotring values
          // Commented to try out the Ref way of recieving values from form
          //   onChange={useAgeChangeHandler}
          //   value={userAge}

          //Ref is added here in the element
          ref={ageRef}
        ></input>

        {/* inbuilt button code  */}
        {/* <button type="submit">Add User</button> */}

        {/* ==================================================================================================================
             The following is a custom component named Button, Please refer the Button.js to see how onCLick, classes and type
             are read from this custom compoent and applies to the in built button. 
             ------------------------------------------------------------------------------------------------------------------*/}
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
