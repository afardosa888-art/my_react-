import "./App.css";
import Header from "./components/header";
import Greeting from "./components/Greeting";
import { Tiriye } from "./components/Counter";
import LightSwitch from "./components/ThemeSwitcher";
import Clicker from "./components/Clicker";
import Inputer from "./components/Inputer";
import Submission from "./components/Submission";
import WelcomeMessage from "./components/WelcomeMessage";
import Notification from "./components/Notification";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <>
      <Notification isAdmin = {true} />
      <Dashboard />
      <WelcomeMessage isLoggedIn = {false} />
      <Submission />
      <Inputer />
      <Clicker />
      <Greeting name="Fardosa" surname="Abdirahman" />
      <LightSwitch />
      <Greeting name="Fardosa" surname="Abdirahman" />
      <Header />
      <Header />
      <Header />
      <Tiriye />
    </>
  );
}

export default App;
