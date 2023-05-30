import React from "react";

import '../assets/css/philosophy.css';

const Philosophy = () => {

    return (

        <>
            <section className="philosophy-section">

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="philosophy-thumb" />
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="philosophy-content">
                            <div className="sub-title"><span className="border-left"></span>Our Philiosphy</div>
                                <p className="sec-desc">
                                Our philosophy is to provide business value through IT portfolio
                                management by going above and beyond client expectation with integrity,
                                innovation and excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </section>

            
        </>
    )
}


export default Philosophy;