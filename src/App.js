/** @format */

import "./App.css";
import Heropg from "./Components/Heropg";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className='App bg-neutral'>
      <header className='App-header'>
       
        <Heropg />
        <About />
        <Contact />
      </header>
    </div>
  );
}

export default App;
