import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
import Contact from "./Contact";
import About from "./About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Main />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/about" element={<About />}></Route>
                </Routes>
            </BrowserRouter>
        )
    }
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>);