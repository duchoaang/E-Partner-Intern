import { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import "./App.css";
import APIs, { endpoints } from "./configs/APIs";
import DefaultLayout from "@c/Layout/DefaultLayout";
import { GlobalStyles } from "./styles/GlobalStyles";
import { UserProvider } from "@c/UserContext";



function App() {
  const [isMobile, setIsMobile] = useState(false);
  const getUser = async () => {
    console.log(12302);
    try {
      const res2 = await APIs.get(endpoints["users"]).then((res) => {
        console.log(res.data);
      });
    } catch (ex) {
      console.error(ex);
    }
  };

  const isMobileDevice = () => {
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
  };

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  return (
    <>
     
        <div>
          {isMobile ? (
            <>
              <GlobalStyles />

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
          ) : (
            <div>
              Hiện tại website chỉ hỗ trợ moblie, vui lòng chuyển sang thiết bị
              moblie để sử dụng
            </div>
          )}
        </div>
     
    </>
  );
}

export default App;
