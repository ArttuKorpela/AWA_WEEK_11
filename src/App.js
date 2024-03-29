import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from 'react';
import MyContainer from "./components/MyContainer";
import About from "./components/About";
import Header from "./components/Header";
import "./i18n"
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }
  
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <div className="App">
          <Header t={t} changeLanguage={changeLanguage}/>
          <Routes>
            <Route path="/" element= {<><MyContainer t={t}/></>}/>
            <Route path="/about" element = {<><About/></>}/>
          </Routes>
        </div>
      </BrowserRouter>
      </Suspense>
  );
}

export default App;
