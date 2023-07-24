import "./App.css";
import { Route, Routes } from "react-router";
// import { useNavigate } from "react-router-dom";
import Main from "./components/Main";
import ProjectsPage from "./components/ProjectsPage";
import AboutPage from "./components/AboutPage";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/404" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
