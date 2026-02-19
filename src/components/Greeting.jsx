import React,{Fragment}  from "react";
const Greeting = (props) => {
  return (
  <div style={{backgroundColor:"red"}}>
      <h1>Hello, {props.name} {props.surname}!</h1>
      <h2>This was not there </h2>
    
      </div>
  )
}

export default Greeting;