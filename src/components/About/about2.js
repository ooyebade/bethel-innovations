import React from "react";

import Hero4 from '../../components/Hero/Hero4';

import '../../assets/css/about2.css';

const About2 = () => {

    return (

        <>

        <br /> <Hero4  pageTitle="About Us"  />
            <section className="about2-section">

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="about-thumb" />
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="ab-content">
                            <div className="sub-title"><span className="border-left"></span>Our Story</div>
                                <p className="sec-desc">
                                    Bethel Innovations LLC is a minority owned small business committed to
                                    providing IT consulting services in application development, IT service
                                    management, strategic and real time Cybersecurity support by creating
                                    innovative and flexible methods prioritizing excellence, efficiency and
                                    simplicity. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </section>

                <section className="about3-section">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="ab-content">
                                <div className="sub-title"><span className="border-left"></span>What we do</div>
                                    <p className="sec-desc">
                                    We are a trusted provider of enterprise IT services and 
                                    strategic consulting technology solutions. Our comprehensive offerings 
                                    cater to government agencies, government contractors, and nonprofit organizations. 
                                    With a focus on application integration, testing, and production deployment, we assist in the development 
                                    and infrastructure engineering of IRS applications and portal environments. Our expertise also extends to 
                                    successfully mapping complex program and project security requirements to industry-standard security controls, 
                                    ensuring compliance with FedRAMP cloud security standards, NIST 800-53, FISMA, OMB, and US-cert. 
                                    </p>

                                    <p className="sec-desc">
                                    Bethel excels in IT governance, IT service management, cybersecurity, information assurance, 
                                    change and configuration management, as well as development and operations (DevOps). 
                                    By adopting continuous integration and continuous improvement (CICD)
                                    practices, we consistently align technology with our clients' business 
                                    and mission objectives. Our proven track record of sustained superior performance 
                                    has earned us the trust of our customers, who rely on us to optimize their technology 
                                    and achieve their goals effectively.
                                    </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="about-thumb" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="about4-section">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="ab-content">
                                <div className="sub-title"><span className="border-left"></span>Why Choose Us?</div>
                                    <p className="sec-desc">
                                    Our People <br />
                                    Performance-Based Processes <br />
                                    IT Cybersecurity Domain Expertise <br />
                                    IT Change Management Domain Expertise <br />
                                    Sub Contract Administration and Management <br />
                                    Innovative Talent Sourcing
                                    </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="about-thumb" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default About2