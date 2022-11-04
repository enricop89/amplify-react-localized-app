import { useState } from "react";
import "./App.css";
import UserLanguageContext from "./context/languageContext";
import languages from "./languages";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

import { I18n } from "aws-amplify";
I18n.putVocabularies(languages);

const defaultLanguage = () => {
  const languageFromStorage = localStorage.getItem("lang");
  if (languageFromStorage) {
    I18n.setLanguage(languageFromStorage);
    return languageFromStorage;
  } else {
    const detectedLang = navigator.languages
      ? navigator.languages[0]
      : navigator.language || navigator.userLanguage;
    let adaptLang = detectedLang.slice(0, 2);
    if (Object.keys(languages).indexOf(adaptLang) === -1) {
      adaptLang = "en";
    }
    I18n.setLanguage(adaptLang);
    return adaptLang;
  }
};

I18n.setLanguage("en");

function App() {
  const [language, setLanguage] = useState(defaultLanguage());
  return (
    <UserLanguageContext.Provider value={{ language, setLanguage }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </UserLanguageContext.Provider>
  );
}

export default App;
