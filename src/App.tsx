import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Routing from "./Routes";

import LoadingOverlay from "react-loading-overlay-ts";
import { useAppDispatch, useAppSelector } from "./core/feature/hooks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import __favicon from "./assets/images/favicon.svg";

import { ParallaxProvider } from "react-scroll-parallax";
import { i18n } from "./translations/i18n";
import { setLanguage } from "./core/feature/language/languageSlice";
import { useDispatch } from "react-redux";
import moment from "moment";

function App() {
  let isLoading: boolean = useAppSelector((state) => state.config.loading);
  const language: String = useAppSelector((state) => state.language.language);
  const [lang, setLang] = useState("en");
  const dispatch = useDispatch();
  const [title, setTitle] = useState("Platform Sekolah Pintar");
  function getFaviconEl() {
    return document.getElementById("favicon");
  }


  useEffect(() => {
    if (language == "" || language == undefined) {
      i18n.changeLanguage("en");
      dispatch(setLanguage(lang));
    }
    language == "en" ? moment.locale("en") : moment.locale("id");
  }, [language]);
  return (
    <ParallaxProvider>
      <div className="Appw-full h-screen bg-psp-primary">
        <ToastContainer></ToastContainer>

        <LoadingOverlay className="h-screen" active={isLoading} spinner text="Loading ...">
          <Routes>
            {Routing.map((prop: any, index: any) => {
              // console.log(prop);

              if (prop.path == "") {
                return (
                  <Route
                    key={`menu-${index}`}
                    path="/"
                    element={<Navigate to={prop.redirect} replace />}
                  />
                );
              } else {
                return (
                  <Route
                    key={"menu-" + index}
                    path={prop.path}
                    element={<prop.component />}
                  />
                );
              }
            })}
          </Routes>
        </LoadingOverlay>
      </div>
    </ParallaxProvider>
  );
}

export default App;
