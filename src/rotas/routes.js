import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Body from "../components/Body";
import Home from "../screens/Home";
import Sobre from "../screens/Sobre";
import Usuario from "../screens/usuario";

const RoutesRoot = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Body />} path="/">
                    <Route element={<Home />} path="/home" />
                    <Route element={<Sobre />} path="/sobre" />
                    <Route element={<Usuario />} path="/usuario" />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
export default RoutesRoot;

