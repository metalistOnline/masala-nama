import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Offers from './components/Offers';
import Gallery from './components/Gallery';

import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';

function App() {
    return (
        <Routes>
            <Route
                path="/"
                exact
                element={
                    <Fragment>
                        <Header />
                        <Hero />
                        <Offers />
                        {/* <Gallery /> */}
                        <Menu />
                        <Footer />
                    </Fragment>
                }
            />

            <Route
                path="/order"
                element={
                    <Fragment>
                        <Header />
                        <Hero />
                        <Footer />
                    </Fragment>
                }
            />
        </Routes>
    );
}

export default App;
