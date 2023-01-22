import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import $ from 'jquery';
import './index.scss';
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
    faJava,
    faPython,
    faRProject,
    faNode,
    faSass,
    faGithub
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';

const icons1 = {
    name: "icons1",
    icons: [
        {
            icon: faAngular,
            color: "#DD0031"
        },
        {
            icon: faCss3,
            color: "#28A4D9"
        },
        {
            icon: faGitAlt,
            color: "#EC4D28"
        },
        {
            icon: faHtml5,
            color: "#F06529"
        },
        {
            icon: faJsSquare,
            color: "#EFD81D"
        },
        {
            icon: faReact,
            color: "#5ED4F4"
        },
    ]
}


const icons2 = {
    name: "icons2",
    icons: [
        {
            icon: faJava,
            color: "#447A9F"
        },
        {
            icon: faPython,
            color: "#FFDB4D"
        },
        {
            icon: faRProject,
            color: "#1F6ABF"
        },
        {
            icon: faGithub,
            color: "#000000"
        },
        {
            icon: faNode,
            color: "#3E863D"
        },
        {
            icon: faSass,
            color: "#CF649A"
        },
    ]
}
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [isIconSet1, setIsIconSet1] = useState(true);



    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setIsIconSet1(!isIconSet1)
            $(".icon-set-1 div").toggleClass("noOpacity")
            $(".icon-set-2 div").toggleClass("noOpacity")

        }, 8000)
        return () => {
            clearInterval(interval);
        };
    }, [isIconSet1])



    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            stringArray={Array.from("About Me")}
                            letterClass={letterClass}
                            index={15}
                        />
                    </h1>
                    <p>
                        I am a driven full-stack developer with hands-on experience in Quantitative, Analytical Research and Data Science
                        and am looking for an opportunity to work on apps by an established, customer-driven company that will
                        provide an environment where I can continuously learn and grow
                    </p>
                    <p>
                        I am naturally inquisitive, inspired by and open to differing perspectives, and
                        am in a constant cycle of improving my skills
                    </p>
                    <p>
                        If I had to define myself in a single sentence, I would say that I am
                        "A hard worker driven by curiosity, whether it's when I'm baking in the kitchen, when I'm
                        doing Language Exchange with my friends in Tokyo, or when I'm behind a computer ready to start
                        a new project."
                    </p>
                </div>
                <div className="stage-cube-content">
                    <div className="cube-spinner icon-set-1">
                        {
                            icons1.icons.map((iconObject, index) => {
                                return (
                                    //cubes aren't 0-indexed (typically)
                                    <div key={iconObject.icon.iconName + index} className={`face${index + 1}`}>
                                        <FontAwesomeIcon className='iconSVG' icon={iconObject.icon} color={iconObject.color} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="cube-spinner icon-set-2">
                        {
                            icons2.icons.map((iconObject, index) => {
                                return (
                                    //cubes aren't 0-indexed (typically)
                                    <div key={iconObject.icon.iconName + index} className={`face${index + 1}  noOpacity`}>
                                        <FontAwesomeIcon className='iconSVG' icon={iconObject.icon} color={iconObject.color} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='loader-wrapper'>
                <Loader type="cube-transition" style={{ transform: 'scale(1.5)' }} />
            </div>
        </>
    )
}

export default About;