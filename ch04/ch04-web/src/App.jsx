import { Route, Routes } from "react-router";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ProtectedRoutes, { PublicOnlyRoute } from "./components/ProtectedRoutes";

function App() {

    return(
        <Routes>
            <Route path="/" element={<></>} />
            ProtectedRoutes
            <Route element={<PublicOnlyRoute/>} >
                <Route path="/auth/signup" element={<SignUp />} />
                <Route path="/auth/signin" element={<SignIn />} />
            </Route>

            <Route path="/" element={<ProtectedRoutes/>} >
                <Route path="/dash" element={<></>} />
            </Route>
            
        </Routes>
    )
}

export default App;