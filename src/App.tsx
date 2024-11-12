import "./App.css";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Landing from "./sections/Landing/Landing";
import Navbar from "./sections/Navbar/Navbar";
import Projects from "./sections/Projects/Projects";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import { useState } from "react";

function App() {
    const [activeSection, setActiveSection] = useState<string>("landing");
    const [isNavbarVisible, setNavbarVisible] = useState<boolean>(false);

    useIntersectionObserver(setActiveSection, setNavbarVisible);

    return (
        <div id="sections">
            <section id="landing">
                <Landing />
            </section>

            {/* Show Navbar based on visibility state */}
            <Navbar activeSection={activeSection} isVisible={isNavbarVisible} />

            <section id="about">
                <About />
            </section>

            <section id="projects">
                <Projects />
            </section>

            <section id="contact">
                <Contact />
            </section>
        </div>
    );
}

export default App;
