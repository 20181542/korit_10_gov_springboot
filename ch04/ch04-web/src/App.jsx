import { Route, Routes } from "react-router";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import ProtectedRoutes, { PublicOnlyRoute } from "./components/ProtectedRoutes";
import DeepSpaceBackground from "./components/DeepSpaceBackground/DeepSpaceBackground";

function App() {
    return(
        <>
            <DeepSpaceBackground />
            <Routes>
                <Route path="/" element={<></>} />
                <Route element={<PublicOnlyRoute/>} >
                    <Route path="/auth/signup" element={<SignUp />} />
                    <Route path="/auth/signin" element={<SignIn />} />
                </Route>

                <Route path="/" element={<ProtectedRoutes/>} >
                    <Route path="/dash" element={<></>} />
                </Route>
            </Routes>
        </>
    )
}

export default App;