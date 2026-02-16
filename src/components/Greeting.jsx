import React,{Fragment}  from "react";
const Greeting = (props) => {
  return (
  <>
      <h1>Hello, {props.name} {props.surname}!</h1>
      <h2>This was not there </h2>
    
      </>
  )
}

export default Greeting;