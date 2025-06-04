import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, ButtonGroup } from 'reactstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './css/projects.css';
import image1 from './Images/yemekSitesiİmage.png';
import image2 from './Images/chatbotImage.png';
import image3 from './Images/SignLanguageDigits.png';
import image4 from './Images/HeartAttackAnalysisPrediction.png';



function Projects() {

    return (
        <div className="projects-container">
            <h3 style={{ fontSize: "48px", color: "#1F29337" }}>Projects</h3>
            <div className="projects-header">
                <div className="title-divider"></div>
            </div>

            <div className="projects-grid">
                {/* Project 1 */}
                <Card className="project-card">
                    <img alt="Project 1" src={image1} className="project-image" />
                    <CardBody>
                        <CardTitle tag="h5">Food Site</CardTitle>
                        <CardSubtitle tag="h6" className="project-subtitle">
                            Full-stack Application
                        </CardSubtitle>
                        <div className="card-divider"></div>
                        <CardText className="project-description">
                            A comprehensive work integration platform with React frontend and Node.js backend.
                        </CardText>
                        <ButtonGroup className="project-buttons">
                            <span className="bordered-text">React</span>
                            <span className="bordered-text">JavaScript</span>
                        </ButtonGroup>
                        <nav className='nav-githubWeb'>
                            <a href="https://github.com/Gulfem93/fsweb-s8-challenge-pizza" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="#WebSite">WebSite</a>
                        </nav>
                    </CardBody>
                </Card>

                {/* Project 2 */}
                <Card className="project-card">
                    <img alt="Project 2" src={image2} className="project-image" />
                    <CardBody>
                        <CardTitle tag="h5">ChatBot Project</CardTitle>
                        <CardSubtitle tag="h6" className="project-subtitle">
                            API Integration
                        </CardSubtitle>
                        <div className="card-divider"></div>
                        <CardText className="project-description">
                            A chatbot project was developed by integrating React with AI technologies
                        </CardText>
                        <ButtonGroup className="project-buttons">
                            <span className="bordered-text">React</span>
                            <span className="bordered-text">JavaScript</span>
                        </ButtonGroup>
                        <nav className='nav-githubWeb'>
                            <a href="https://github.com/Gulfem93/ChatBot" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="#WebSite">WebSite</a>
                        </nav>
                    </CardBody>
                </Card>

                {/* Project 3 */}
                <Card className="project-card">
                    <img alt="Project 3" src={image3} className="project-image" />
                    <CardBody>
                        <CardTitle tag="h5">Sign Language Digits</CardTitle>
                        <CardSubtitle tag="h6" className="project-subtitle">
                            Python Application
                        </CardSubtitle>
                        <div className="card-divider"></div>
                        <CardText className="project-description">
                            Data was examined using Python and machine learning. Data analysis was performed. Prediction was made in sign language using machine learning.
                        </CardText>
                        <ButtonGroup className="project-buttons">
                            <span className="bordered-text">Python</span>
                            <span className="bordered-text">Artifical Neural Network</span>
                            <span className="bordered-text">Jupyter</span>
                        </ButtonGroup>
                        <nav className='nav-githubWeb'>
                            <a href="https://github.com/Gulfem93/SignLanguageDigits" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="#WebSite">WebSite</a>
                        </nav>
                    </CardBody>
                </Card>

                {/* Project 4 */}
                <Card className="project-card">
                    <img alt="Project 3" src={image4} className="project-image" />
                    <CardBody>
                        <CardTitle tag="h5">Heart Attack Project</CardTitle>
                        <CardSubtitle tag="h6" className="project-subtitle">
                            Python Application
                        </CardSubtitle>
                        <div className="card-divider"></div>
                        <CardText className="project-description">
                            Data was examined using Python and machine learning. Data analysis was performed. Predictions were made using machine learning.
                        </CardText>
                        <ButtonGroup className="project-buttons">
                            <span className="bordered-text">Python</span>
                            <span className="bordered-text">Artifical Neural Network</span>
                            <span className="bordered-text">Jupyter</span>
                        </ButtonGroup>
                        <nav className='nav-githubWeb'>
                            <a href="#github" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://www.kaggle.com/code/gulfemisik97/heart-attack-analysis-prediction" target="_blank" rel="noopener noreferrer">Kaggle</a>
                        </nav>
                    </CardBody>
                </Card>
            </div>

            <div className="bottom-divider"></div>
        </div>
    );
}

export default Projects;