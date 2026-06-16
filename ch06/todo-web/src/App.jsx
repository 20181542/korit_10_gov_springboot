import { Route, Routes } from "react-router";
import { ProtectedRoutes, PublicOnlyRoute } from "./components/routes/ProtectedRoutes";
import Login from "./pages/Login/Login";
import LoginCallback from "./pages/LoginCallback/LoginCallback";


function App() {

  return (
    <Routes>
      <Route element={<PublicOnlyRoute />}>
        <Route path="/auth/login" element={<Login/>} />
        <Route path="/auth/oauth2/callback" element={<LoginCallback/>} />
      </Route>

      <Route element={<ProtectedRoutes />} >
        <Route path="*" element={<></>} />
      </Route>
    </Routes>
  )
}

export default App;