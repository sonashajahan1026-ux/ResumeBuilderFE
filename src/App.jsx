import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ResumeGenerator from "./pages/ResumeGenerator";
import Form from "./pages/Form";
import History from "./pages/History";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pnf from "./pages/Pnf"

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resumeGen" element={<ResumeGenerator />} />
        <Route path="/form" element={<Form/>}/>
        <Route path="/history" element={<History />} />
        <Route path="*" element={<Pnf/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;