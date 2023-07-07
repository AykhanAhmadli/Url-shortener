import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Task1 from "./pages/Task1/Task1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Task1 />}></Route>
        <Route path="/task2"></Route>
      </Routes>
    </Router>
  );
}

export default App;
