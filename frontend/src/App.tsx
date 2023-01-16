import React from 'react';
import './App.css';
import MyMagicLunchApp from "./components/MyMagicLunchApp";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./components/Home";
import WeekPlanner from "./components/WeekPlanner";
import Header from "./components/Header";
import NavBar from "./components/NavBar";


function App() {
    return (
        <div className="App">

            <Header/>

            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/recipes"} element={<MyMagicLunchApp/>}></Route>
                <Route path={"/weekplan-history"} element={<WeekPlanner/>}></Route>
                <Route path={"/impressum"} element={<WeekPlanner/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
