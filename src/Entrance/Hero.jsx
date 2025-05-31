import "./css/hero.css";
import { Button, ButtonGroup, Card, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePicture from './Images/profilePicture.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';  // GitHub ikonu için import

function Hero() {
    return (
        <div className="hero-container">
            <h4 className="hero-name" style={{ color: "#4338CA", fontSize: "15px" }}>Gülfem IŞIK</h4>
            <Card className="profile-card">
                <div className="profile-content">
                    <CardText className="profile-bio">
                        <h5 style={{ fontWeight: "bold" }}>Data Science</h5>
                        Merhaba! Ben Gülfem Işık. Web geliştirme ve tasarım konusunda uzmanım.
                    </CardText>

                    <ButtonGroup className="contact-button-group">
                        <Button color="primary" className="contact-button">
                            İletişime Geç
                        </Button>
                        <Button color="primary" outline>
                            <FaGithub className="me-2" />
                            Github
                        </Button>
                        <Button color="primary" outline>
                            <FaLinkedin className="me-2" /> {/* LinkedIn ikonu eklendi */}
                            LinkedIn
                        </Button>
                    </ButtonGroup>
                </div>

                <img
                    src={profilePicture}
                    alt="Gülfem Işık Profil Fotoğrafı"
                    className="profile-image"
                />
            </Card>
        </div>
    );
}

export default Hero;