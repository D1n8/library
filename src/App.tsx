import React from "react";
import './App.css';
import BooksPage from "./components/pages/BooksPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
import Header from "./components/Header";

function App() {
    return ( 
    <BrowserRouter>
        <Header/>
        <main className="main">
            <Routes>
                <Route path="/" element={<AboutPage/>}/>
                <Route path="/books" element={<BooksPage/>}/>
                <Route path="*" element={<AboutPage/>}/>
            </Routes>
        </main>
    </BrowserRouter> 
);
}

export default App;