import React from "react";
import Card from "../UI/Card";
import classes from './UsersList.module.css'

//This component is meant to add it to the App component. So that 'lifting the state up' from AddUsers component to 
//UsersList component can be tried out. Please refer the usage of this in app and the subsequent use of useState hook.
const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.uName} ({user.uAge} Years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
