import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import emailjs from "@emailjs/browser";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker, Popup } from 'react-leaflet';
 
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                refForm.current,
                process.env.REACT_APP_PUBLIC_KEY
            ).then(
                (result) => {
                    alert('Message Sent Successfully!')
                    window.location.reload(false)
                }, (error) => {
                    alert('Message Failed to Send, Please try again')
                });
    }


    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            stringArray={Array.from("Contact Me")}
                            index={15}
                            letterClass={letterClass}
                        />
                    </h1>
                    <p>
                        I am interested in opportunities involving full-stack development or data science in evironments
                        where I can improve my programming skills and deepen my knowledge. I would prefer to work remotely
                        but am open to relocating.
                        If you have any questions or requests whatsoever, please use this form to contact me directly:
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder='Name'
                                        required
                                    />
                                </li>
                                <li className='half'>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder='Email'
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder='Subject'
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        name="message"
                                        placeholder='Message'
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        className='flat-button'
                                        type="submit"
                                        value="SEND"
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-panel'>
                    Ethan Amato,
                    <br />
                    Princeton, NJ
                    <br />
                    <span>ethannamato@gmail.com</span>
                </div>
                <div className='map-wrapper'>
                    <MapContainer center={[40.343899, -74.660049]} zoom={13} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[40.343899, -74.660049]}>
                            <Popup>
                                Ethan's Hometown - Come visit sometime :)
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>

            </div>
            <Loader type="cube-transition" />

        </>

    )
}

export default Contact