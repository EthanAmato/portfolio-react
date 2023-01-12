import './index.scss';
import Project from './Project';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css"

import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    const myProjects = [
        {
            headline:"Semantic Core",
            description:"Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
            image:"https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            repoURL: "",
            deploymentURL: "",
            isDeployed:true,
        },
        {
            headline:"Fullstack Notetaking App",
            description:"Appending currency sign to a purchase form in your e-commerce site using plain JavaScript. 2",
            image:"https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            repoURL: "",
            deploymentURL: "",
            isDeployed:true,
        },
        {
            headline:"3D Interactive Plotter",
            description:"Appending currency sign to a purchase form in your e-commerce site using plain JavaScript. 3",
            image:"https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            repoURL: "",
            deploymentURL: "",
            isDeployed:true,
        },
        {
            headline:"Copycat Starbucks Site",
            description:"Appending currency sign to a purchase form in your e-commerce site using plain JavaScript. 3",
            image:"https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            repoURL: "",
            deploymentURL: "",
            isDeployed:true,
        },
        {
            headline:"Fullstack Twitter Clone",
            description:"Appending currency sign to a purchase form in your e-commerce site using plain JavaScript. 3",
            image:"https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            repoURL: "",
            deploymentURL: "",
            isDeployed:true,
        },
        {
            headline:"MERN-Stack Quiz App",
            description:"Appending currency sign to a purchase form in your e-commerce site using plain JavaScript. 3",
            image:"https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            repoURL: "",
            deploymentURL: "",
            isDeployed:true,
        },
        {
            headline:"Responsive Menu Design",
            description:"Appending currency sign to a purchase form in your e-commerce site using plain JavaScript. 3",
            image:"https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            repoURL: "",
            deploymentURL: "",
            isDeployed:true,
        },
        {
            headline:"ECommerce Website with Stripe Middleware",
            description:"Appending currency sign to a purchase form in your e-commerce site using plain JavaScript. 3",
            image:"https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            repoURL: "",
            deploymentURL: "",
            isDeployed:true,
        },
 
    ]

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
                        {myProjects.map((project) => {
                            return(
                                <Project
                                    description={project.description}
                                    headline={project.headline}
                                    image={project.image}
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