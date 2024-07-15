import NavBar from "./components/NavBar/NavBar";
import Home from "./components/HomePage/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import MyWork from "./components/MyWorks/MyWorks";
import Experience from "./components/Experience/Experience";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main-content">
        <Home />
        <div className="scrollable-sections">
          <About />
          <Experience/>
          <Skills/>
          <MyWork />
        </div>
      </div>
    </div>
  );
}

export default App;
