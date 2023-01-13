import './index.scss';
import Project from './Project';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css"
import $ from 'jquery'
import { useState, useEffect} from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [isImage1, setIsImage1] = useState(true)


    const myProjects = [
        {
            headline: "Semantic Core",
            description: "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
            image1: "https://images.unsplash.com/photo-1672605183243-22fd7c7fd73e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            image2: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            repoURL: "",
            deploymentURL: "",
            isDeployed: true,
        },
        {
            headline: "Fullstack Notetaking App",
            description: "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript. 2",
            image1: "https://images.unsplash.com/photo-1672605183243-22fd7c7fd73e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            image2: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            repoURL: "",
            deploymentURL: "",
            isDeployed: true,
        },
        {
            headline: "3D Interactive Plotter",
            description: "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript. 3",
            image1: "https://images.unsplash.com/photo-1672605183243-22fd7c7fd73e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            image2: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", repoURL: "",
            deploymentURL: "",
            isDeployed: true,
        },
        {
            headline: "Copycat Starbucks Site",
            description: "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript. 3",
            image1: "https://images.unsplash.com/photo-1672605183243-22fd7c7fd73e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            image2: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            repoURL: "",
            deploymentURL: "",
            isDeployed: true,
        },
        {
            headline: "Fullstack Twitter Clone",
            description: "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript. 3",
            image1: "https://images.unsplash.com/photo-1672605183243-22fd7c7fd73e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            image2: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            deploymentURL: "",
            isDeployed: true,
        },
        {
            headline: "MERN-Stack Quiz App",
            description: "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript. 3",
            image1: "https://images.unsplash.com/photo-1672605183243-22fd7c7fd73e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            image2: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            deploymentURL: "",
            isDeployed: true,
        },
        {
            headline: "Responsive Menu Design",
            description: "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript. 3",
            image1: "https://images.unsplash.com/photo-1672605183243-22fd7c7fd73e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            image2: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            deploymentURL: "",
            isDeployed: true,
        },
        {
            headline: "ECommerce Website with Stripe Middleware",
            description: "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript. 3",
            image1: "https://images.unsplash.com/photo-1672605183243-22fd7c7fd73e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            image2: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            repoURL: "",
            deploymentURL: "",
            isDeployed: true,
        },

    ]
    useEffect(() => {
        const interval = setInterval(() => {
            if(isImage1) {
                $(".react-multi-carousel-item .image1, .react-multi-carousel-item .image1-link")
                .toggleClass("opacityNone")
                setTimeout(function () {
                    $(".react-multi-carousel-item .image1, .react-multi-carousel-item .image1-link").toggleClass("displayNone");
                    $(".react-multi-carousel-item .image2, .react-multi-carousel-item .image2-link").toggleClass("displayNone");
                }, 1200);
                setTimeout(function () {
                    $(".react-multi-carousel-item .image2, .react-multi-carousel-item .image2-link")
                    .toggleClass("opacityNone")
                }, 1300);
            } else {
                $(".react-multi-carousel-item .image2, .react-multi-carousel-item .image2-link")
                .toggleClass("opacityNone")
                setTimeout(function () {
                    $(".react-multi-carousel-item .image2, .react-multi-carousel-item .image2-link").toggleClass("displayNone");
                    $(".react-multi-carousel-item .image1, .react-multi-carousel-item .image1-link").toggleClass("displayNone");
                }, 1200);
                setTimeout(function () {
                    $(".react-multi-carousel-item .image1, .react-multi-carousel-item .image1-link")
                    .toggleClass("opacityNone")
                }, 1300);
            }
            setIsImage1(!isImage1);
        }, 10000)
        return () => {
            clearInterval(interval);
        };
    }, [isImage1])


    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


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
                        // autoPlay
                        autoPlaySpeed={3000}
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
                                    isDeployed={true}
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