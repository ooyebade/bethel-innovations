import React from "react";

import Hero5 from '../../components/Hero/Hero5';

import '../../assets/css/services.css';

const Services = () => {

    return (

        <>

        <Hero5  pageTitle="Our Services"  
        subHeader="Learn more about the services offered for clients in the U.S. by our Team at Bethel Innovations" 
        />
        
        <section className="solutions-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="services-thumb" />
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="service-content">
                            <div className="sub-title"><span className="border-left"></span>Cybersecurity Solutions</div>
                                <p className="sec-desc">
                                    We understands how to stay proactive in
                                    the cyber battle to find protection failures before the adversary
                                    does, closing the security gap before they can be exploited. We
                                    help customers implement automated security testing to
                                    continuously validate their security controls, processes and people.
                                    We continuously deliver the metrics on the readiness of common
                                    attack vectors like Credential Access, Exfiltration, and Command
                                    & Control.  
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="cism-section">

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="services-thumb" />
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="service-content">
                            <div className="sub-title"><span className="border-left"></span>Change Management and IT Service Management</div>
                                <p className="sec-desc">
                                We provide tactical mission support and IT audit assessment,
                                critical infrastructure support. We dedicate our top-not
                                professionals, industry intelligence, and systems expertise to make
                                businesses more customer-centric, competitive, and productive.

                                <br />
                                <br />
                                We strategically help our clients to leverage technology as an
                                enabler for unlocking business value and optimizing operations
                                with a portfolio of IT service management via effective usage of
                                industry standard tools.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 



            <section className="enterprise-section">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="services-thumb" />
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="service-content">
                                <div className="sub-title"><span className="border-left"></span>Enterprise Services</div>
                                    <p className="sec-desc">
                                        We provide solutions to challenging IT problems by combining
                                        our deep technology expertise, architecture capabilities and
                                        extensive project management skills. Our team has significant
                                        experience in delivering large scale and complex solutions using
                                        delivery processes that drive efficiencies in Product Development,
                                        Legacy Modernization, Business IT Planning and Technical
                                        Architecture Definition.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </section> 


        </>
    )
}


export default Services;