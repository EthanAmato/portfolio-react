import './index.scss';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import TagCloud from '@frank-mayer/react-tag-cloud';

const DEFAULT_SPHERE_SIZE = 500;
const DEFAULT_SPHERE_SIZE_INCREMENT = 10;


const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [currentSphereRadius, setCurrentSphereRadius] = useState(DEFAULT_SPHERE_SIZE);
    const wrapperRef = useRef();
    const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Python",
        "Jupyter",
        "NodeJS",
        "PyTorch",
        "Jquery",
        "Scikit Learn",
        "GIT",
        "R Project",
        "MERN / MEAN",
        "Angular",
        "Java",
        "Springboot",
        "Docker",
        "Machine Learning",
        "NLP",
        "Data Visualization",
        "Cluster Analysis",
    ];


    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    useEffect(() => {

        const handleWrapperScroll = (e) => {
            // if(currentSphereRadius < 100) return
            // if(currentSphereRadius > 800) return

            console.log(e.wheelDelta)
            
            console.log(e.wheelDelta < 0 && currentSphereRadius < 400)
            //if scrolling up (zooming in -> larger radius) and sphere is under 700 -> zoom in more
            if (e.wheelDelta > 0 && (currentSphereRadius > 400 || currentSphereRadius < 600)) {
                setCurrentSphereRadius((currentSpeed) => {
                    console.log(currentSpeed)
                    return currentSpeed + DEFAULT_SPHERE_SIZE_INCREMENT;
                });
                return
            //if scrolling down (zooming out -> smaller radius) and sphere is over 100 -> zoom out more
            } else if (e.wheelDelta < 0 && (currentSphereRadius > 400 || currentSphereRadius < 600)){
                setCurrentSphereRadius((currentSpeed) => {
                    console.log(currentSpeed)
                    return currentSpeed - DEFAULT_SPHERE_SIZE_INCREMENT;
                });
                return
            }
        }
        wrapperRef.current.addEventListener('mousewheel', handleWrapperScroll)
    }, [])
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            stringArray={Array.from("My Skills")}
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

                </div>
                <div className='sphere-wrapper' ref={wrapperRef}>
                    <div className='text-sphere'>
                        <TagCloud
                            options={(w) => ({
                                radius: currentSphereRadius,
                                maxSpeed: "fast",
                            })}
                            onClick={(tag, ev) => alert(tag)}
                            onClickOptions={{ passive: true }}
                        >{texts}</TagCloud>
                    </div>
                </div>
            </div>
            <Loader type="cube-transition" />
        </>
    )
}

export default Skills;