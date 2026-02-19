import { useState } from "react";

function LightSwitch() {
  const [isOn, setIsOn] = useState(false);

// eslint-disable-next-line no-unused-vars
  let isFemale = false

!isFemale
  return (
    
    <div style={{backgroundColor:"blue", padding:"2px"}}>
      <h2>{isOn ? "💡 Light ON" : "🌙 Light OFF"}</h2>
      <button onClick={() => setIsOn(!isOn)}>Switch</button>
    </div>
  );
}

export default LightSwitch;
