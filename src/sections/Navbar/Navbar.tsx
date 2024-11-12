import styles from "./Navbar.module.css";

interface NavbarProps {
    activeSection: string;
    isVisible: boolean;
}

const Navbar = ({ activeSection, isVisible }: NavbarProps) => {
    return (
        <nav className={`${styles.nav} ${!isVisible ? styles.hidden : ''}`}>
            <a href="#landing" className={activeSection === "landing" ? styles.active : ""}>
                Home
            </a>
            <a href="#about" className={activeSection === "about" ? styles.active : ""}>
                About
            </a>
            <a href="#projects" className={activeSection === "projects" ? styles.active : ""}>
                Projects
            </a>
            <a href="#contact" className={activeSection === "contact" ? styles.active : ""}>
                Contact
            </a>
        </nav>
    );
};

export default Navbar;
