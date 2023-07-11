import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Task1 from "./pages/Task1/Task1";
import Redirect from "./pages/Redirect";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Task1 />}></Route>
        <Route path="/:url" element={<Redirect />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
