import $ from "jquery";
import './App.css';
import Fetch from "./Fetch";

function App() {
  return (
    <div>
      <h1>Return random result for "eminem":</h1>
      <div id="apiDiv"><Fetch /></div>
    </div>
  );
}

export default App;
