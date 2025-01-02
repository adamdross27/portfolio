import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useState, useEffect } from 'react'; 
import { faJava, faJsSquare, faNodeJs, faReact, faGithub, faPhp, faAngular, faBootstrap, faVuejs, faHtml5} from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { Loader } from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

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

                    <h2>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'Education'.split('')}
                            idx={15}
                        />
                    </h2>
                    <p>
                        I have graduated from Auckland University of Technology with a <i>Bachelor of Computer and Information Sciences</i>,
                        majoring in Software Development, and minoring in Networks & Cybersecurity. <b>Graduating with an A- overall (7.16/9)
                        GPA </b> is a great achievement for me and it shows the consistent hard work I have put into my degree.
                    </p>

                    <h2>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'Work Experience'.split('')}
                            idx={15}
                        />
                    </h2>
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

                    <h2>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'Software Development Experience'.split('')}
                            idx={3}
                        />
                    </h2>
                    <p>
                        In 2024, I led a team of five students from AUT on a Research & Development project for CAITO AI, a company 
                        specializing in transforming unstructured data into actionable insights for clients. As the project leader, I was 
                        responsible for outlining the project management methodology, and we decided to implement the Agile Scrum methodology, 
                        completing eight development sprints. Our client required us to tailor the project for the Government Officers of the 
                        Technical and Vocational Education Training (TVET) sector in South East Asia, specifically The Philippines. 
                        <br /><br />
                        We created the CAITO Workforce Intelligence System (CAITO WIS), a platform that allows users to web scrape or insert 
                        data and use generative AI to provide technical insights. This enables CAITO's clients to make informed, data-driven 
                        decisions. The system allows users to view and customize data displays, and generate in-depth AI analyses from graphs 
                        to improve decision-making skills. We also built a custom job scraper that searches JobStreet.ph for real-time job postings,
                        which are collected into a Firebase database. Additionally, our Skill Extractor enables users to provide a job description,
                        and the AI generates key skills related to the description along with a confidence level. 
                        <br /><br />
                        The combination of the job scraper and the skill extractor helps users identify in-demand jobs and the skills needed for 
                        those roles. This empowers government officers to promote industries based on current job market trends. 
                        <br /><br />
                        The CAITO WIS was developed using the FERN stack (Firebase, Express.js, React.js, Node.js), providing a full-stack 
                        solution. Our front-end was built with React, the backend utilized Express.js and Node.js, and our database was hosted 
                        on Firebase. 
                        <br /><br />
                        We successfully delivered all the proposed deliverables and achieved remarkable results. The web app reduced manual 
                        reporting time by 30% and improved data retrieval speed by 25%. The integrated AI analysis delivered real-time data-driven
                        insights, enabling the creation of custom dashboards that improved decision-making speed by 40%. This, in turn, allowed 
                        for proactive workforce planning opportunities. Our work led to a 20% increase in stakeholder satisfaction, as we exceeded 
                        their expectations.
                    </p>

                    <h2>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'Learnings through University'.split('')}
                            idx={15}
                        />
                    </h2>
                    <p>Here is a list of key concepts and methodologies I learnt throughout my university studies:</p>
                    <div className='learnings'>
                        <ul>
                            <li>Data Structures & Algorithms</li>
                            <li>MVC Design Pattern</li>
                            <li>Agile Methodologies</li>
                            <li>Version Control through Git/GitHub</li>
                            
                            <li>Database Management</li>
                            <li>Object-Oriented Programming (OOP)</li>
                            <li>IT Project Management</li>
                            <li>Operating Systems</li>

                            <li>Software Architecture Patterns</li>
                            <li>Information Security Management</li>
                            <li>Artificial Intelligence</li>
                            <li>Algorithm Design Analysis</li>
                        </ul>
                    </div>

                    <div className='languages-frameworks'>
                        <div className='languages'>
                            <b>Languages</b>
                            <div className='columns'>
                                <ul>
                                    <li><FontAwesomeIcon icon={faJava} color="#28A4D9" /> Java</li>
                                    <li><FontAwesomeIcon icon={faJsSquare} color="#EFD81D" /> JavaScript</li>
                                    <li><FontAwesomeIcon icon={faCode} color="#0067A5" /> C</li>
                                    <li><FontAwesomeIcon icon={faPhp} color="#4B6EAF" /> PHP</li>

                                </ul>
                                <ul>
                                    <li><FontAwesomeIcon icon={faDatabase} color="#EC4D28" /> SQL</li>
                                    <li><FontAwesomeIcon icon={faCode} color="#1D7B9D" /> C#</li>
                                    <li><FontAwesomeIcon icon={faHtml5} color="#F16529" /> HTML/CSS</li>
                                    <li><FontAwesomeIcon icon={faCode} color="#0078D4" /> TypeScript</li>

                                </ul>
                            </div>
                        </div>
                        <div className='frameworks'>
                            <b>Frameworks</b>
                            <div className='columns'>
                                <ul>
                                    <li><FontAwesomeIcon icon={faReact} color="#5ED4F4" /> React</li>
                                    <li><FontAwesomeIcon icon={faNodeJs} color="#68A063" /> Node.js</li>
                                    <li><FontAwesomeIcon icon={faJsSquare} color="#8CC84B" /> Express.js</li>
                                    <li><FontAwesomeIcon icon={faAngular} color="#E23237" /> Angular.js</li>
                                </ul>
                                <ul>
                                    <li><FontAwesomeIcon icon={faLaptopCode} color="#2B5797" /> .NET</li>
                                    <li><FontAwesomeIcon icon={faVuejs} color="#646CFF" /> Vue.js</li>
                                    <li><FontAwesomeIcon icon={faBootstrap} color="#563D7C" /> Bootstrap</li>
                                    <li><FontAwesomeIcon icon={faJsSquare} color="#000000" /> Next.js</li>
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
    );
}

export default About;
