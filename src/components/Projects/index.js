import './index.scss';
import Project from './Project';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css"
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import gsap from 'gsap-trial';
import useInterval from '../../hooks/useInterval';
import { ECommerceAnimation, EcommerceHome, GraphAnimation, GraphHome, NotesAppHome, NotesAppMarkdown, PrettyMenuAnimation, PrettyMenuIMG, QuizHomePage, QuizResultsPage, SemCoreAnimation, SemCoreHome, StarbucksAnimation, StarbucksHome, TwitterCloneHome, TwitterCloneProfile } from '../../assets/images/project_images';
// import se from '../../assets/images/project_images/SemcoreHome.PNG'
const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [isImage1, setIsImage1] = useState(true)
    const timeline = gsap.timeline();

    const myProjects = [
        {
            headline: "Semantic Core",
            description: "Visualize relationship between meaning and grammatical gender across 19 languages with this \
                          full-stack, AI-Powered, National Science Foundation-funded site",
            image1: SemCoreHome,
            image2: SemCoreAnimation,
            repoURL: "https://github.com/EthanAmato/SemanticCoreFrontend",
            deploymentURL: "https://tinyurl.com/semanticcoreEA",
            isDeployed: true,
        },
        {
            headline: "Fullstack Notetaking App",
            description: "Built with OAuth2 and Firebase NoSQL Integration, make an account and write as many markdown-compatible \
                          notes as you please. Also allows for creation of and sorting by custom tags",
            image1: NotesAppHome,
            image2: NotesAppMarkdown,
            repoURL: "https://github.com/EthanAmato/TypeScriptNoteTakerApp",
            deploymentURL: "https://ethanamato.github.io/TypeScriptNoteTakerApp/",
            isDeployed: true,
        },
        {
            headline: "3D Interactive Plotter",
            description: "Given a Microsoft Excel File, visualize data points in 3D space! Allows options for sizing, titles, \
                           vectors to custom origins, and download to HTML file for embedding in other sites",
            image1: GraphHome,
            image2: GraphAnimation,
            repoURL: "https://github.com/EthanAmato/3dPlotter",
            deploymentURL: "https://ethanamato.github.io/3dPlotter/",
            isDeployed: true,
        },
        {
            headline: "Copycat Starbucks Site",
            description: "A simple, yet beautiful copy of the Holiday Rendition of the Starbucks Website homepage",
            image1: StarbucksHome,
            image2: StarbucksAnimation,
            repoURL: "https://github.com/EthanAmato/Starbucks-Copy",
            deploymentURL: "https://ethanamato.github.io/Starbucks-Copy/",
            isDeployed: true,
        },
        {
            headline: "Fullstack Twitter Clone",
            description: "A Twitter clone complete with working hashtags, authentication, following, and home feed. \
                          Made with Springboot in Java",
            image1: TwitterCloneHome,
            image2: TwitterCloneProfile,
            repoURL: "https://github.com/EthanAmato/TechTalentTwitter",
            isDeployed: false,
        },
        {
            headline: "MERN-Stack Quiz App",
            description: "MongoDB, ExpressJS, React, Redux, and Node.js project that serves up questions and answers through an API \
                          allows for accurate scoring and storage of past results by username",
            image1: QuizHomePage,
            image2: QuizResultsPage,
            repoURL: "https://github.com/EthanAmato/PediatricQuizzerClient",
            isDeployed: false,
        },
        {
            headline: "Responsive Menu Design",
            description: "A beautiful, responsive menu design made only with HTML, CSS, and Javascript",
            image1: PrettyMenuIMG,
            image2: PrettyMenuAnimation,
            repoURL: "https://github.com/EthanAmato/responsive-menu",
            deploymentURL: "https://ethanamato.github.io/responsive-menu/",
            isDeployed: true,
        },
        {
            headline: "ECommerce Website with Stripe Middleware",
            description: "A Springboot Ecommerce site that uses Stripe middleware to process user transactions.",
            image1: EcommerceHome,
            image2: ECommerceAnimation,
            repoURL: "https://github.com/EthanAmato/EcommerceSite",
            isDeployed: false,
        },

    ]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])




    //custom hook that uses dynamic state changes to replay transitioning effect


    return (
        <>
            <div className='container projects-page'>
                <div className='carousel-wrapper'>
                    <div className='text-zone'>
                        <h1>
                            <AnimatedLetters
                                stringArray={Array.from("My Projects")}
                                index={15}
                                letterClass={letterClass}
                            />
                        </h1>
                    </div>
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        draggable={false}
                        autoPlay
                        autoPlaySpeed={15000}
                        centerMode={true}
                        className="carousel"
                        containerClass="container-with-dots"
                        dotListClass=""
                        focusOnSelect={true}
                        infinite
                        itemClass=""
                        keyBoardControl={true}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 1,
                                partialVisibilityGutter: 40
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            }
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                    >
                        {myProjects.map((project, index) => {
                            return (
                                <Project
                                    key={`${project.headline + index}`}
                                    description={project.description}
                                    headline={project.headline}
                                    image1={project.image1}
                                    image2={project.image2}
                                    repoURL={project.repoURL}
                                    deploymentURL={project.deploymentURL}
                                    isDeployed={project.isDeployed}
                                />
                            );
                        })}
                    </Carousel>
                </div>

            </div>

            <Loader type="cube-transition" />

        </>
    )
}

export default Projects;