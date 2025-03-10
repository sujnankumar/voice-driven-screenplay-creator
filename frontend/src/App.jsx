import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/UI/Layout";
import Home from "./components/Home/Home";
import Chatbot from "./components/Chatbot/Chatbot";
import NoPage from "./components/NoPage/NoPage"
import NewMovie from "./components/NewMovie/NewMovie"
import Senti from "./components/Senti/SentimentAnalysis"
import LogIn from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/create" element={<NewMovie />} />
            <Route path="/senti" element={<Senti />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
