import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import './App.css'
import APIs, { endpoints } from './configs/APIs'
import DefaultLayout from "@c/Layout/DefaultLayout";
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  const getUser = async () => {
    console.log(12302)
    try {
      const res2 = await APIs.get(endpoints['users']).then((res) => {
        console.log(res.data);
      }); 
    } catch (ex) {
      console.error(ex);
    }
  };

  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <>
    <GlobalStyles/>
     <Router>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Layout = route.layout || DefaultLayout;
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </Router>
      
    </>
  )
}

export default App
