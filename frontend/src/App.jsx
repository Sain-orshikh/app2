import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";
import UserPage from "./pages/UserPage";
import TestPage from "./pages/TestPage";
import React from "react";
import { Toaster } from "react-hot-toast";

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
                    <Route path="/test" element={<TestPage />} />
                </Routes>
                <Toaster />
            </div>
        </>
    )
};

export default App;