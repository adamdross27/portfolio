import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';



const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        // Get form values
        const formData = new FormData(refForm.current);
        const name = formData.get('name');
        const subject = formData.get('subject');
        const email = formData.get('email');
        const message = formData.get('message');

        // Send email using emailjs.send
        emailjs.send('service_o94aatj', 'template_8ehqw3o', 
        {
            name,
            subject,
            email,
            message
        }, 'byLaewyvNE2eJrpU6')
            .then(
                () => {
                    alert('Message successfully sent!');
                    window.location.reload(false);
                },
                (error) => {
                    console.log('Failed to send message: ', error);
                    alert('Failed to send the message, please try again.');
                }
            );
    };

    const customIcon = new L.icon({
        iconUrl: require('leaflet/dist/images/marker-icon.png'), 
        iconSize: [25, 41], 
        iconAnchor: [12, 41], 
        popupAnchor: [1, -34],
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'), 
        shadowSize: [41, 41], 
        shadowAnchor: [12, 41] 
    })

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>Feel free to fill out the form below to get in touch with me!</p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required
                                    />
                                </li>
                                <li className="half">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Adam Ross,
                    <br />
                    Auckland <br />
                    New Zealand <br />
                    <span>adamross387@gmail.com</span>
                </div>
                <div className='map-wrap'>
                <MapContainer center={[-36.893261, 174.827438]} zoom={12} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-36.853623651072866, 174.76661861434283]} icon={customIcon}>
                    <Popup>This is where I completed my Bachelor of Computer and Information Sciences Degree!</Popup>
                </Marker>
                <Marker position={[-36.9340579457617, 174.91589614973316]} icon={customIcon}>
                    <Popup>This is where I went to high school!</Popup>
                </Marker>
                <Marker position={[-36.869808076886166, 174.77729224373778]} icon={customIcon}>
                    <Popup>This is where I currently work!</Popup>
                </Marker>
                </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Contact;