import './index.scss';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef, useCallback } from 'react'
import $ from 'jquery'
import TagCloud from 'TagCloud';

const DEFAULT_SPHERE_SIZE = 400;
const DEFAULT_SPHERE_SIZE_INCREMENT = 10;


const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [scrollSpeed, setScrollSpeed] = useState(300);
    const container = ".tagcloud";
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

        let elements = document.querySelectorAll(".tagcloud");
        console.log(elements)
        if(elements.length > 1) {
            elements[0].parentNode.removeChild(elements[0]);
        }

        return () => {
            const options = {
                radius: scrollSpeed,
                maxSpeed: "fast",
                initSpeed: "fast",
                keep: true,
            };

            TagCloud(container, texts, options);
        };
    }, [scrollSpeed]);

    const wrapperRef = useRef();

    useEffect(()=>{

        const handleWrapperScroll = (e)=> {
            if(e.wheelDelta < 0) {
                setScrollSpeed((currentSpeed) => {
                    console.log(currentSpeed)
                   return currentSpeed + DEFAULT_SPHERE_SIZE_INCREMENT; 
                });
            } else {
                setScrollSpeed((currentSpeed) => {
                    console.log(currentSpeed)
                    return currentSpeed - DEFAULT_SPHERE_SIZE_INCREMENT; 
                 });
            }
        }

        wrapperRef.current.addEventListener('mousewheel', handleWrapperScroll)
    },[])
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
                        <span className='tagcloud'></span>
                    </div>
                </div>

            </div>
            <Loader type="cube-transition" />

        </>

    )
}

export default Skills;