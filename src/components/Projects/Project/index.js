import './index.scss';

const Project = ({ 
    description,
    image,
    headline,
    repoURL = "#",
    isDeployed = false,
    deploymentURL = "#" }) => {
    return (
        <div className='project-wrapper'>
            <a href="#"><img className="website-image" src={image} alt={`${headline}`} /></a>
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