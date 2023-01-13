import './index.scss';
const Project = ({
    description,
    image1,
    image2,
    headline,
    repoURL = "#",
    isDeployed = false,
    deploymentURL = "#" }) => {


    return (
        <div className='project-wrapper'>
            <a href="#" className='image1-link'><img draggable={false} className="website-image image1" src={image1} alt={`${headline}`} /></a>
            <a href="#" className='image2-link opacityNone displayNone'><img draggable={false} className="website-image image2 opacityNone displayNone" src={image2} alt={`${headline}`} /></a>
            <div className='description-container'>
                <div className='info'>
                    <h2>{headline}</h2>
                    <p>{description}</p>
                </div>
                <div className='buttons'>
                    {isDeployed ? <a className='button-link' href={deploymentURL}><button>Go To Website</button></a> : <></>}
                    <a className='button-link' href={repoURL}><button>Go To Repository</button></a>
                </div>
            </div>
        </div>
    )
}

export default Project