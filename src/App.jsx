import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import AboutUs from "./sections/About-us/About-us";
import WhoToWork from "./sections/who-work/WhoToWork";
import Depositions from "./sections/Depositions/Depositions";
import Invest from "./sections/Invest/Invest";
import Footer from "./components/Footer/Footer";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
    return (
        <ParallaxProvider>
            <Header />
            <div id="inicio" className="section">
                <Hero />
            </div>
            <div id="sobre" className="section">
                <AboutUs />
            </div>

            <div id="como-funciona" className="section">
                <WhoToWork />
            </div>

            <div id="depoimentos" className="section">
                <Depositions />
            </div>

            <div id="beneficios" className="section">
                <Invest />
            </div>

            <Footer />
        </ParallaxProvider>
    );
}

export default App;
