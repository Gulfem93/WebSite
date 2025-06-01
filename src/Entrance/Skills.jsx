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
                    <p>Acquired proficiency in JavaScript through the Workintech training program, gaining hands-on experience in modern web development methodologies and best practices.</p>
                </div>
                <div>
                    <Label className='label-skills'>React</Label>
                    <p>Acquired proficiency in React through the Workintech training program, gaining hands-on experience in modern web development methodologies and best practices.</p>
                </div>
                <div>
                    <Label className='label-skills'>Node.Js</Label>
                    <p>Acquired proficiency in Node.js through the Workintech training program, gaining hands-on experience in modern web development methodologies and best practices.</p>
                </div>
                <div>
                    <Label className='label-skills'>Python</Label>
                    <p>I completed my graduation thesis using Python programming language, focusing on Natural Language Processing (NLP). Additionally, I implemented machine learning models with Python to achieve the project’s objectives, demonstrating proficiency in AI-driven text analysis and predictive modeling.</p>
                </div>
            </div>


        </div>
    );
}

export default Skills;