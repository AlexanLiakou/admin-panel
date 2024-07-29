import React, {Suspense, lazy} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Users = lazy(() => import("./pages/Users"));
const NotFound = lazy(() => import("./pages/NotFound"));
import './app.scss';

function App() {
  return (
    <>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/' element={<Navigate to="/login"/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/signup' element={<Signup/>}></Route>
                <Route path='/users' element={<Users/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
        </Suspense>
    </>
  )
}

export default App
