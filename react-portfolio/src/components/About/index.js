import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useState, useEffect } from 'react'; 
import { faJava, faJsSquare, faNodeJs, faReact, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, [])
    
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    CAITO Workforce Intelligence System: Data visualisation tool with AI implementation to provide TVET sector of
                    Philippines actionable data analysis and insights. Firebase, Express, React, and Node (FERN stack).
                </p>
                <p>
                    SPEED App: Software Empirical Evidence Database (SPEED) is a web and mobile app that allows users to submit,
                    moderate, and analyse articles. Created with MongoDB, Node, Next.js, Nest.js (MNNN stack)
                </p>
                <p>
                    AchieveIt – Calendar / Goal Web Application: Online calendar to save events, get reminders, set goals, and
                    customise using JavaScript, React, Firebase, through the Agile Methodology and SDLC.
                </p>
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
    )
}

export default About;