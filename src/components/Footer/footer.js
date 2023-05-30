import React from 'react';
//import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

import '../../assets/css/footer.css';

function Footer() {

    let date = new Date();
    let year = date.getFullYear();

    return (
        <div className='footer'>

            <div className='footer-body'>

                <div className='footer-copyright'>
                    <h3>Copyright &copy; {year} Bethel Innovations</h3>
                </div>

                    <ul className='footer-icons'>
                        <li className='social-icons'>
                            <a
                                href='https://www.facebook.com/people/Bethel-Innovations-LLC/100092667889272/'
                                style={{color: '#fff'}}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <FaFacebook />
                            </a>
                        </li>

                        <li className='social-icons'>
                            <a
                                href='https://www.linkedin.com/company/bethelinnovations'
                                style={{color: '#fff'}}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <FaLinkedin />
                            </a>
                        </li>

                        <li className='social-icons'>
                            <a
                                href='https://www.instagram.com/bethel_innovations/'
                                style={{color: '#fff'}}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <FaInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
    );
}


export default Footer;