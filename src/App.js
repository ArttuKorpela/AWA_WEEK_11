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
        <Routes>
          <Route path="/" element= {<><Header t={t} changeLanguage={changeLanguage}/><MyContainer t={t}/></>}/>
          <Route path="/about" element = {<><Header t={t} changeLanguage={changeLanguage}/><About/></>}/>
        </Routes>
      </BrowserRouter>
      </Suspense>
  );
}

export default App;
