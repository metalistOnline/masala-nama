import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Service from './components/Service';
import About from './components/About';
import Menu from './components/Menu';
import Team from './components/Team';
import Map from './components/Map';
import Offers from './components/Offers';
import Gallery from './components/Gallery';

function App() {
    return (
        <div>
            <Header />
            <Hero />
            {/* <Service /> */}
            <Offers />
            {/* <Gallery /> */}
            <Menu />
            {/* <About /> */}
            {/* <Team /> */}
            {/* <Map /> */}
            <Footer />
        </div>
    );
}

export default App;
