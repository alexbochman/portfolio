import Project from "./Project";
import styles from './Projects.module.css';

const Projects = () => {
    return (
        <div className={styles.projects}>
            <h1>Projects</h1>
            <Project />
        </div>
    );
};

export default Projects;
