import { useState } from "react";

function Submission() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload
    alert("Submitted: " + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Submission