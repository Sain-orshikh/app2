import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";
import UserPage from "./pages/UserPage";
import React from "react";

function App() {

    return(
        <>
            <div>
                <Navbar />
            </div>
            <div className="pt-20">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/create" element={<CreatePage />} />
                    <Route path="/user/:id" element={<UserPage />} />
                </Routes>
            </div>
        </>
    )
};

export default App;