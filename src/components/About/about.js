import { Link } from 'react-router-dom';

import profileExample from '../../assets/img/profile-example.png'

import '../../assets/css/about.css';

const About = () => {

    return (
        <section className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="about-thumb">
                            <img src={profileExample} alt="pastor tobi" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="ab-content">
                            <div className="sub-title"><span className="border-left"></span>Tobi Oladipo</div>
                            <h4 className="sec-title">
                                Founder | CEO
                            </h4>
                            <p className="sec-desc">
                            Cybersecurity and Change Management industry expert, a principal
                            consultant and IT senior manager with proven expertise in application
                            security, architecture and engineering, utilizing eminent skills in systems
                            integration, infrastructure support, cloud security, IT service management,
                            program and project management to provide business value through IT. Tobi Oladipo has 
                            led and continue to support the Cyber security delivery arm of
                            multiple projects at the Treasury department providing oversight of
                            security deliverables and successfully supported application and
                            infrastructure delivery of high visibility projects and sensitive
                            engagements.
                            </p>

                            <Link to='/about-us' className='about-button'>About Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default About;