import Navbar from "./Components/Navbar";
import "./App.css";
import Textform from "./Components/Textform";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Textform heading="enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
