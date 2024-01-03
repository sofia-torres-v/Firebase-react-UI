import { Box } from "@mui/material";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import RegisterScreen from "./components/RegisterScreen/Register";
import HomePages from "./components/pages/HomePages/HomePages";

function App() {
    return (
        <Box sx={{ height: "100vh" }}>
            <Routes>
                <Route path="/" element={<HomePages />} />
                <Route path="/Login" element={<LoginScreen />} />
                <Route path="/Register" element={<RegisterScreen />} />
            </Routes>
        </Box>
    );
}

export default App;
