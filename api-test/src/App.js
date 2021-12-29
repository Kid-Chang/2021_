import Auth from "./kakaoLoginComp/Auth";
import Profile from "./kakaoLoginComp/Profile";
import LoginMain from "./kakaoLoginComp/LoginMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginMain />} />
                    <Route path="/oauth/kakao/callback" element={<Auth />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
