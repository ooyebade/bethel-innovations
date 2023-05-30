import { useState } from 'react';
import { Link } from 'react-router-dom';
import bethelLogo from '../../assets/img/bethel-logo.jpg';
import MainMenu from './MainMenu';

import { FaLinkedin, FaFacebook, FaInstagram} from 'react-icons/fa';

import '../../assets/css/header.css';


const Header = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleHideShowMobileMenu = () => {
        setShowMobileMenu(props => !props);
    }

    return (

        <header className='header'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <nav className='navbar navbar-expand-lg'>
                            {/* <!-- logo --> */}
                            <Link className='navbar-brand' to="/">
                                <img src={bethelLogo} alt="Bethel Innovations Logo" />
                            </Link>

                            <button onClick={handleHideShowMobileMenu} className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navabarNavDropdown'
                                aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
                                <span className='navbar-toggler-icon'></span>
                                <span className='navbar-toggler-icon'></span>
                                <span className='navbar-toggler-icon'></span>
                            </button>


                            {/* <!-- Nav Menu --> */}
                            <div className={`collapse navbar-collapse ${showMobileMenu ? 'show' : ''}`} id='navbarNavDropdown'>
                                <MainMenu />
                            </div>

                            <div className='social'>
                                <div className='lcl--content'>
                                    <a
                                        href='https://www.linkedin.com/company/bethelinnovations'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <FaLinkedin
                                            className='landing--social linkedin-icon'
                                            aria-label='LinkedIn'
                                        />
                                    </a>
                        
                                    <a
                                        href='https://www.facebook.com/people/Bethel-Innovations-LLC/100092667889272/'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <FaFacebook
                                            className='landing--social'
                                            aria-label='Facebook'
                                        />
                                    </a>

                                    <a
                                        href='https://www.instagram.com/bethel_innovations/'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <FaInstagram
                                            className='landing--social'
                                            aria-label='Instagram'
                                        />
                                    </a>
                                </div>
                            </div>

                            <Link to='/contact-us' className='contactBtn'>Contact Us</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};


export default Header;