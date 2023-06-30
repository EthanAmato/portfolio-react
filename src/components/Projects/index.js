import './index.scss'
import Project from './Project'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import {
  ECommerceAnimation,
  EcommerceHome,
  GraphAnimation,
  GraphHome,
  NotesAppHome,
  NotesAppMarkdown,
  PrettyMenuAnimation,
  PrettyMenuIMG,
  QuizHomePage,
  QuizResultsPage,
  SemCoreAnimation,
  SemCoreHome,
  StarbucksAnimation,
  StarbucksHome,
  TwitterCloneHome,
  TwitterCloneProfile,
  FrontEndDevStack,
  FrontEndDevStackAnimation,
  ChatApp,
  ChatAppAnimation,
  IpGeolocator,
  IpGeolocatorAnimation,
  NetflixClone,
  NetflixCloneAnimation,
  // SensoryConnect,
  // SensoryConnectAnimation
} from '../../assets/images/project_images'
// import se from '../../assets/images/project_images/SemcoreHome.PNG'
const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const myProjects = [
    // {
    //   headline: 'SensoryConnect',
    //   description:
    //     "A fullstack web app using the T3 Stack (Next.js, Typescript, Next-auth, Prisma, tRPC) with Microsoft Azure Authentication and a PostgreSQL DB that lets consultants of the sensory consulting firm 'Sensory Spectrum' easily filter proprietary data. (Repo is private)",
    //   image1: SensoryConnect,
    //   image2: SensoryConnectAnimation,
    //   repoURL: 'https://github.com/EthanAmato/sensory-connect-prisma-test',
    //   deploymentURL: 'https://sensory-connect-prisma-test.vercel.app/',
    //   isDeployed: true,
    // },
    {
      headline: 'Semantic Core',
      description:
        'Visualize relationship between meaning and grammatical gender across 19 languages with this full-stack, AI-Powered, National Science Foundation-funded site',
      image1: SemCoreHome,
      image2: SemCoreAnimation,
      repoURL: 'https://github.com/EthanAmato/SemanticCoreFrontend',
      deploymentURL: 'https://tinyurl.com/semanticcoreEA',
      isDeployed: true,
    },
    {
      headline: 'Fullstack Netflix Clone',
      description:
        'A clone of the Netflix Streaming Server built using React, NextJS, PrismaDB, MongoDB, Tailwind CSS,and OAuth 2.0',
      image1: NetflixClone,
      image2: NetflixCloneAnimation,
      repoURL: 'https://github.com/EthanAmato/netflix-clone',
      deploymentURL: 'https://netflix-clone-lake-nine.vercel.app/auth',
      isDeployed: true,
    },
    {
      headline: 'Fullstack Notetaking App',
      description:
        'Built with OAuth2 and Firebase NoSQL Integration, make an account and write as many markdown-compatible notes as you please. Also allows for creation of and sorting by custom tags',
      image1: NotesAppHome,
      image2: NotesAppMarkdown,
      repoURL: 'https://github.com/EthanAmato/TypeScriptNoteTakerApp',
      deploymentURL: 'https://ethanamato.github.io/TypeScriptNoteTakerApp/',
      isDeployed: true,
    },
    {
      headline: 'Real-Time Chat Application',
      description:
        'Made using React, Websocket.io, and ExpressJS, users are able to communicate in real time. Includes time stamps, id-based chatroom selection, and user dispay names.',
      image1: ChatApp,
      image2: ChatAppAnimation,
      repoURL: 'https://github.com/EthanAmato/ChatAppFrontEnd',
      isDeployed: true,
    },
    {
      headline: '3D Interactive Plotter',
      description:
        'Given a Microsoft Excel File, visualize data points in 3D space! Allows options for sizing, titles, vectors to custom origins, and download to HTML file for embedding in other sites',
      image1: GraphHome,
      image2: GraphAnimation,
      repoURL: 'https://github.com/EthanAmato/3dPlotter',
      deploymentURL: 'https://ethanamato.github.io/3dPlotter/',
      isDeployed: true,
    },
    {
      headline: 'Fullstack Twitter Clone',
      description:
        'A Twitter clone complete with working hashtags, authentication, following, and home feed. Made with Springboot in Java',
      image1: TwitterCloneHome,
      image2: TwitterCloneProfile,
      repoURL: 'https://github.com/EthanAmato/TechTalentTwitter',
      isDeployed: false,
    },
    {
      headline: 'MERN-Stack Quiz App',
      description:
        'MongoDB, ExpressJS, React, Redux, and Node.js project that serves up questions and answers through an API allows for accurate scoring and storage of past results by username',
      image1: QuizHomePage,
      image2: QuizResultsPage,
      repoURL: 'https://github.com/EthanAmato/PediatricQuizzerClient',
      isDeployed: false,
    },
    {
      headline: 'IP Geolocation App',
      description:
        'Made using Vite React, SASS, and the Leaflet JS and Geolocator APIs to display where in the world a user-inputted IP Address is located',
      image1: IpGeolocator,
      image2: IpGeolocatorAnimation,
      repoURL: 'https://github.com/EthanAmato/IpGeolocationTracker',
      deploymentURL: 'https://ip-geolocation-tracker-nu.vercel.app',
      isDeployed: true,
    },
    {
      headline: 'Frontend Devstack Website Mockup',
      description:
        'A beautiful website containing an animated, interactive 3D-Rendering of a well-designed site. Made using Figma and Spline.',
      image1: FrontEndDevStack,
      image2: FrontEndDevStackAnimation,
      repoURL: 'https://github.com/EthanAmato/3dModelDemo',
      deploymentURL: 'https://3d-model-demo-git-main-ethanamato.vercel.app',
      isDeployed: true,
    },
    {
      headline: 'Copycat Starbucks Site',
      description:
        'A simple, yet beautiful copy of the Holiday Rendition of the Starbucks Website homepage',
      image1: StarbucksHome,
      image2: StarbucksAnimation,
      repoURL: 'https://github.com/EthanAmato/Starbucks-Copy',
      deploymentURL: 'https://ethanamato.github.io/Starbucks-Copy/',
      isDeployed: true,
    },
    {
      headline: 'Responsive Menu Design',
      description:
        'A beautiful, responsive menu design made only with HTML, CSS, and Javascript',
      image1: PrettyMenuIMG,
      image2: PrettyMenuAnimation,
      repoURL: 'https://github.com/EthanAmato/responsive-menu',
      deploymentURL: 'https://ethanamato.github.io/responsive-menu/',
      isDeployed: true,
    },
    {
      headline: 'ECommerce Website with Stripe Middleware',
      description:
        'A Springboot Ecommerce site that uses Stripe middleware to process user transactions.',
      image1: EcommerceHome,
      image2: ECommerceAnimation,
      repoURL: 'https://github.com/EthanAmato/EcommerceSite',
      isDeployed: false,
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container projects-page">
        <div className="carousel-wrapper desktop">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                stringArray={Array.from('My Projects')}
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
                  min: 1024,
                },
                items: 1,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
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
              )
            })}
          </Carousel>
        </div>
        <div className="carousel-wrapper mobile">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                stringArray={Array.from('My Projects')}
                index={15}
                letterClass={letterClass}
              />
            </h1>
          </div>
          <ul className="projects-list">
            {myProjects.map((project, index) => {
              return (
                <li
                  className="project-list-item"
                  key={`${project.headline + index}`}
                >
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
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="loader-wrapper">
        <Loader type="cube-transition" style={{ transform: 'scale(1.5)' }} />
      </div>
    </>
  )
}

export default Projects
