import { useState } from "react";

function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div style={{backgroundColor:"brown"}}>
      <h2>{loggedIn ? "You are logged in ✅" : "You are logged out ❌"}</h2>

      <button onClick={() => setLoggedIn(!loggedIn)}>Toggle Status</button>
    </div>
  );
}

export default Dashboard;
