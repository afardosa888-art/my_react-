import "./App.css";
import Header from "./components/header";
import Greeting from "./components/Greeting";
function App() {
  return (
    <>
      <Greeting name="Fardosa" surname="Abdirahman" />
      <Greeting />
      <Header />
      <Header />
      <Header />
      <Header />
    </>
  );
}

export default App;
