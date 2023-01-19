import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import LogoS from '../../assets/images/logo-s.png'
import WithSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile, faHome, faLaptopCode, faUser, faFolderOpen, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className='nav-bar'>
            <Link className="logo"
                to='/'
                onClick={() => setShowNav(false)}
            >
                <img src={LogoS} alt='logo' />
                <img className="sub-logo" src={WithSubtitle} alt='logo' />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon
                        icon={faHome}
                        color="#4d4d4e"
                        className='anchor-icon'
                    />
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="about-link"
                    to="/about"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon
                        icon={faUser}
                        color="#4d4d4e"
                        className='anchor-icon'
                    />
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="skills-link"
                    to="/skills"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e" />
                </NavLink>

                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="projects-link"
                    to="/projects"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faFolderOpen} color="#4d4d4e" />
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#FFFFFF"
                    cursor="pointer"
                    size="4x"
                    className='close-icon' />
            </nav>
            <ul className={showNav ? 'mobile-show' : ''}>
                <li className='tooltip'>
                    <a
                        target="_blank"
                        rel='noreferrer'
                        href="https://drive.google.com/file/d/1xJF1kF3X7wjifqGBvX2vRw0SN7ZFa6N9/view?usp=share_link"
                        download={"Ethan Amato Resume"}
                    >
                        <FontAwesomeIcon
                            icon={faFile}
                            color="#4d4d4e"
                            className='anchor-icon'
                        />
                    </a>
                    <span className="tooltiptext">Read My Resume</span>
                </li>
                <li className='tooltip'>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/ethan-amato/"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            color="#4d4d4e"
                            className='anchor-icon'
                        />
                    </a>
                    <span className="tooltiptext">My LinkedIn</span>
                </li>
                <li className='tooltip'>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/EthanAmato"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            color="#4d4d4e"
                            className='anchor-icon'
                        />
                    </a>
                    <span className="tooltiptext">My Github</span>
                </li>
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#FFFFFF"
                cursor="pointer"
                size="4x"
                className='hamburger-icon' />
        </div>
    )
}

export default Sidebar;


