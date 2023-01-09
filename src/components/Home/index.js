import LogoTitle from '../../assets/images/logo-s.png';
import Logo from './Logo'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    //Rest of '(E)than Amato' for animation - save as character array
    const nameArray = Array.from('than Amato');
    const jobArray = Array.from('Web Developer');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitle} alt="Ethan" className='big-E' />
                        <AnimatedLetters
                            letterClass={letterClass}
                            stringArray={nameArray}
                            index={15}
                        />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            stringArray={jobArray}
                            index={22}
                        />
                        <br />
                    </h1>
                    <h2>
                        Fullstack Developer / Data Scientist / Machine Learning Enthusiast
                    </h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            <Loader type='cube-transition' />
        </>
    );
}


export default Home;