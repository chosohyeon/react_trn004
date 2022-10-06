import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Community from './pages/Community';
import Footer from './components/Footer';
import './css/App.scss';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/community' element={<Community/>}/>
            </Routes>
            <Footer />
        </>
    )
}

export default App