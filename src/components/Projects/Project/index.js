import './index.scss';
import gsap from 'gsap-trial/dist/gsap';
const Project = ({
    description,
    image1,
    image2,
    headline,
    repoURL,
    isDeployed = false,
    deploymentURL = ""}) => {

    function handleHover() {
        let timeline = gsap.timeline();
        timeline.fromTo(".react-multi-carousel-item--active .image1",
            {
                opacity: 1,
            },
            {
                opacity: 0,
                perspective: "800px",
                rotateY: "25deg",
                duration: ".5s"
            })
            .fromTo(".react-multi-carousel-item--active .image2", {
                opacity: 0
            },
                {
                    opacity: 1,
                    perspective: "800px",
                    rotateY: "0deg",
                    duration: "1.5s",
                })
        return () => {
            timeline.clear()
        }
    }

    function handleMouseLeave() {
        let timeline = gsap.timeline();
        timeline.fromTo(".react-multi-carousel-item--active .image2",
            {
                opacity: 1,
                perspective: "800px",
                rotateY: "0deg",
            },
            {
                opacity: 0,
                perspective: "800px",
                rotateY: "25deg",
                duration: ".5s",
                delay: "5s"
            })
            .fromTo(".react-multi-carousel-item--active .image1", {
                opacity: 0,
                perspective: "800px",
                rotateY: "0deg",
            },
                {
                    opacity: 1,
                    perspective: "800px",
                    rotateY: "0deg",
                    duration: "1.5s",
                    delay: "5s"
                })
    }

    return (
        <div className='project-wrapper' onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
            <a href={repoURL} className='image1-link' target="_blank" >
                <img
                    draggable={false}
                    className="website-image image1"
                    src={image1}
                    alt={`${headline}`}
                />
                <img
                    draggable={false}
                    className="website-image image2"
                    src={image2}
                    alt={`${headline}`}
                />
            </a>
            <div className='description-container'>
                <div className='info'>
                    <h2>{headline}</h2>
                    <p>{description}</p>
                </div>
                <div className='buttons'>
                    {isDeployed ? <a href={deploymentURL} target="_blank"><button className='flat-button'>Go To Website</button></a> : <></>}
                    <a href={repoURL} target="_blank"><button className='flat-button'>Go To Repository</button></a>
                </div>
            </div>
        </div>
    )
}

export default Project