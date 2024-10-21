import Navbar from "./Components/Navbar";
import "./App.css";
// import Textform from "./Components/Textform";
import About from "./Components/About";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        {/* <Textform heading="enter the text to analyze" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
