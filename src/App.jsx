import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import DetailPage from "./pages/DetailPage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <Navbar />

      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projectpage" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
