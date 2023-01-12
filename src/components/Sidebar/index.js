import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png'
import WithSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile, faHome, faLaptopCode, faUser, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className="logo" to='/'>
                <img src={LogoS} alt='logo' />
                <img className="sub-logo" src={WithSubtitle} alt='logo' />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills">
                    <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                    <FontAwesomeIcon icon={faFolderOpen} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li className='tooltip'>
                    <a
                        target="_blank"
                        rel='noreferrer'
                        href="https://drive.google.com/file/d/1xJF1kF3X7wjifqGBvX2vRw0SN7ZFa6N9/view?usp=share_link"
                        download={"Ethan Amato Resume"}
                    >
                        <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
                    </a>
                    <span className="tooltiptext">Read My Resume</span>
                </li>
                <li className='tooltip'>
                    <a
                        target="_blank"
                        className='anchor-icon'
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/ethan-amato/"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                    <span className="tooltiptext">My LinkedIn</span>
                </li>
                <li className='tooltip'>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/EthanAmato"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                    <span className="tooltiptext">My Github</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;