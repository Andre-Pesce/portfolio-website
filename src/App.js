import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Home />
        </Router>
      </header>
    </div>
  );
}

export default App;
