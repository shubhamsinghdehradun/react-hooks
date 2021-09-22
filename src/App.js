import "./App.css";
import UseStateHook from "./hooks/useState/UseStateHook";

function App() {
  return (
    <>
      <h2 className="App">React Hooks 2021</h2>
      <div className="nestedComponentsDesigns">
        <UseStateHook />
        <hr />
      </div>
    </>
  );
}

export default App;
