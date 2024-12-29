import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useState, useEffect } from 'react'; 
import { faJava, faJsSquare, faNodeJs, faReact, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { Loader } from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, [])

    //To add animated text to the <h2>s
    
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <h2>Education</h2>
                <p>
                    I have graduated from Auckland University of Technology with a <i>Bachelor of Computer and Information Sciences</i>,
                     majoring in Software Development, and minoring in Networks & Cybersecurity. <b>Graduating with an A- overall (7.16/9)
                     GPA </b> is a great achievement for me and it shows the consistent hard work I have put into my degree.
                </p>
                <h2>Work Experience</h2>
                <p>
                    I have worked as an <b>IT Service Desk Technician </b> since January 2024 at <b>Hallenstein Glassons Holdings</b>. This entails
                    troubleshooting of Windows and Mac operating systems, configuring networks, installing point of sale (POS)
                    peripherals, executing SQL queries on Microsoft SQL Server, and managing all company devices through 
                    Microsoft Azure and Intune. I have began learning C# under the guidance of our senior software architect at the company.
                    This will expand my knowledge in creating the following things:
                    <ul>
                        <li>.NET web API backend servers that can be used with a JavaScript web application.</li>
                        <li>Building Excel Data Dump reports via SQL. </li>
                        <li>Building simple front end applications with HTML, JavaScript, and Bootstrap CSS that can 
                            make calls to backend webserver API and then present the JSON data in a table.</li>
                        <li>Build a client program that can connect an external API and retrieve data and save data to the database.</li>
                        <li>Build a Model-View-Control web application, with HTML templates (Razor) and database model (Entity framework) with controllers and routing.</li>
                        <li>Creating Windows Desktop apps in Maui with WinForms</li>
                    </ul>                    
                </p>
                
                <h2>Software Development Experience</h2>
                <p>
                    Talk about personal projects that I have done.
                </p>
                <h2>Learnings through University</h2>
                <p>Here is a list of concepts and methodologies I learnt throughout my university studies:</p>
                <div className='learnings'>
                    <ul>
                        <li>Data Structures & Algorithms</li>
                        <li>MVC Design Pattern</li>
                        <li>Software Architecture and Design Patterns</li>
                        <li>Agile Methodologies</li>
                        <li>Database Management through normalization and ER diagrams</li>
                        <li>Version Control through Git/GitHub</li>
                        <li>Object-Oriented Programming (OOP) principles</li>
                        <li>IT Project Management through a Research & Development Project with CAITO.ai</li>
                        <li>Operating Systems</li>
                        <li>Information Security Management Principles</li>
                        <li>Artificial Intelligence</li>
                        <li>Algorithm Design Analysis</li>
                    </ul>
                </div>


                <h2>Languages & Frameworks</h2>
                <div className='languages-frameworks'>
                    <div className='languages'>
                        <b>Languages</b>
                        <div className='columns'>
                            <ul>
                                <li>Java</li>
                                <li>JavaScript</li>
                                <li>C#</li>
                                <li>C</li>
                            </ul>
                            <ul>
                                <li>SQL</li>
                                <li>HTML/CSS</li>
                                <li>PHP</li>
                            </ul>
                        </div>
                    </div>
                    <div className='frameworks'>
                        <b>Frameworks</b>
                        <div className='columns'>
                            <ul>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>Angular.js</li>
                            </ul>
                            <ul>
                                <li>.NET</li>
                                <li>Vite.js</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faGithub} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faNodeJs} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJava} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faDatabase} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About;