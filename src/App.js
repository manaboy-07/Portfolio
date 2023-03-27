/** @format */

import "./App.css";
import Heropg from "./Components/Heropg";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className='App bg-neutral'>
      <header className='App-header'>
        <Heropg />
        <About />
        <Contact />
        <Projects />
      </header>
    </div>
  );
}

export default App;
