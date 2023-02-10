/** @format */

import "./App.css";
import Heropg from "./Components/Heropg";
import About from "./Components/About";

function App() {
  return (
    <div className='App bg-neutral'>
      <header className='App-header'>
        <Heropg />
        <About />
      </header>
    </div>
  );
}

export default App;
