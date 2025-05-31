import { Button, ButtonGroup, Card, CardText, List, Label, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';  // GitHub ikonu için import
import "./css/profile.css"

function Profile() {
    return (
        <div className='div-Profile'>
            <h3 style={{ fontSize: "48px", color: "#1F29337" }}>Profile</h3>
            <div className='div-ProfileAboutMe'>
                <div className='div-Pro'>
                    <Label style={{ color: "#4338CA", fontSize: "28px" }}>Profile</Label>
                    <Table borderless>
                        <thead>

                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row" style={{ fontWeight: 'bold' }}>
                                    Date of Birth
                                </td>
                                <td>
                                    28.03.1993
                                </td>
                            </tr>
                            <tr>
                                <td scope="row" style={{ fontWeight: 'bold' }}>
                                    City of Residence
                                </td>
                                <td>
                                    Mersin
                                </td>
                            </tr>
                            <tr>
                                <td scope="row" style={{ fontWeight: 'bold' }}>
                                    Education Level
                                </td>
                                <td>
                                    Çukurova University | Computer Science
                                </td>
                            </tr>
                            <tr>
                                <td scope="row" style={{ fontWeight: 'bold' }}>
                                    Preferred Role
                                </td>
                                <td>
                                    Data Science
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div>
                    <Label style={{ color: "#4338CA", fontSize: "28px" }}>About Me</Label>
                    <p>
                        I hold a Bachelor's degree in Computer Engineering from Çukurova University, where I developed a solid foundation in core computing principles alongside hands-on experience in applied research. My undergraduate internship focused on the development of image processing algorithms using MATLAB, emphasizing signal analysis and visual data interpretation. For my senior thesis, I conducted research in the domain of Natural Language Processing (NLP), implementing various language modeling and text analysis techniques using Python.

                        My primary areas of interest include Data Science, Machine Learning, and Artificial Intelligence. I am particularly motivated by interdisciplinary applications of data-driven technologies and am currently seeking research and professional opportunities to further deepen my expertise and contribute to innovative projects in these fields.
                    </p>
                </div>


            </div>

        </div>
    );
}

export default Profile;