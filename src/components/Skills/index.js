import './index.scss';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
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
        "AWS",
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

    function handleTagClick(tag) {
        window.open(`https://www.google.com/search?q=${tag}`, "_blank");
        window.focus();
    }

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    useEffect(() => {

        const handleWrapperScroll = (e) => {
            if (e.wheelDelta > 0) {
                setCurrentSphereRadius((currentSpeed) => {
                    if (currentSpeed + DEFAULT_SPHERE_SIZE_INCREMENT <= (DEFAULT_SPHERE_SIZE * 2)) {
                        return currentSpeed + DEFAULT_SPHERE_SIZE_INCREMENT;
                    }
                    else return currentSpeed
                });
            } else {
                setCurrentSphereRadius((currentSpeed) => {
                    if (currentSpeed - DEFAULT_SPHERE_SIZE_INCREMENT >= (DEFAULT_SPHERE_SIZE / 4)) {
                        return currentSpeed - DEFAULT_SPHERE_SIZE_INCREMENT;
                    } else return currentSpeed
                });
            }
        }
        wrapperRef.current.addEventListener('mousewheel', handleWrapperScroll)
    }, [])
    return (
        <>
            <div className='container skills-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            stringArray={Array.from("My Skills")}
                            index={15}
                            letterClass={letterClass}
                        />
                    </h1>
                    <p>
                        I have hands-on experience working in an AGILE environment at the Boston College
                        Language Learning Lab. I participated in regular SCRUM meetings and have experience
                        with kanban boards using resources like Trello.
                    </p>
                    <p>

                        I have hands-on experience with big data. I wrote my Honors Thesis at Boston College by consolidating
                        modern approaches to machine learning, linguistics, data science, and cognitive psychology on a high-dimensional
                        dataset with over 400,000 datapoints.
                    </p>
                    <p>

                        I have practical experience with full-stack web development. I completed the Tech Talent South FullStack Developer
                        course and have several deployed projects demonstrating a proficiency in web development
                    </p>
                    <Link to="/portfolio" className='flat-button'>SEE MY PROJECTS</Link>


                </div>
                <div className='sphere-wrapper' ref={wrapperRef}>
                    <div className='text-sphere'>
                        <TagCloud
                            options={(w) => ({
                                radius: currentSphereRadius,
                                maxSpeed: "fast",
                            })}
                            onClick={(tag, ev) => handleTagClick(tag)}
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