import { Route, Routes } from "react-router";
import * as s from "./styles/global";
import { ProtectedRoutes, PublicOnlyRoute } from "./components/routes/ProtectedRoutes";
import Login from "./pages/Login/Login";
import LoginCallback from "./pages/LoginCallback/LoginCallback";
import { Global } from "@emotion/react";
import RootLayout from "./components/layout/RootLayout";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";


function App() {

  return (
    <>
      <Global styles={s.global} />
      <RootLayout>
        <Routes>
          <Route element={<PublicOnlyRoute />}>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/oauth2/callback" element={<LoginCallback />} />
          </Route>

          <Route element={<ProtectedRoutes />} >
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </RootLayout>
    </>
  )
}

export default App;