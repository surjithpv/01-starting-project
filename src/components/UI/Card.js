import React from "react"
import classes from './Card.module.css'

const Card = (props) => {
  //======================================================================================================
  //The following code basically allows to take CSS classes mentioned in the CSS module file
  //Along with this component. If the children of this card component has classes put in there
  //then this code will not pick it so another verion of the same code is put in place commenting
  //the following code.
  //------------------------------------------------------------------------------------------------------

  //Code - Snippet
  // return(<div className={classes.card}>{props.children}</div>)

  //=========================================================================================================
  //Make a note of the class name attribute below, its syntax is in such a way to get the child component class names
  //through props and ammending)it with the Card specific classes.
  //Note :  Using Template Literals for this. Its actaully a back quote  like  ` ,  Strange I neve used to before :)
  //---------------------------------------------------------------------------------------------------------
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
}
export default Card