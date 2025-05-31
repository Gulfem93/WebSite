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
                                <td scope="row" style={{fontWeight: 'bold'}}>
                                    Date of Birth
                                </td>
                                <td>
                                    28.03.1993
                                </td>
                            </tr>
                            <tr>
                                <td scope="row" style={{fontWeight: 'bold'}}>
                                    City of Residence
                                </td>
                                <td>
                                    Mersin
                                </td>
                            </tr>
                            <tr>
                                <td scope="row" style={{fontWeight: 'bold'}}>
                                    Education Level
                                </td>
                                <td>
                                    Çukurova University | Computer Science
                                </td>
                            </tr>
                            <tr>
                                <td scope="row" style={{fontWeight: 'bold'}}>
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
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.

                        Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! </p>
                </div>


            </div>

        </div>
    );
}

export default Profile;