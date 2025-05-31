import { Button, ButtonGroup, Card, CardText, List, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';  // GitHub ikonu için import
import "./css/skills.css"

function Skills() {
    return (
        <div className='div-skills'>
            <h3 style={{ fontSize: "48px", color: "#1F29337" }}>Skills</h3>
            <div className='div-skillLabel'>
                <div>
                    <Label className='label-skills'>Java Script</Label>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div>
                    <Label className='label-skills'>React</Label>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div>
                    <Label className='label-skills'>Node.Js</Label>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div>
                    <Label className='label-skills'>Python</Label>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>


        </div>
    );
}

export default Skills;