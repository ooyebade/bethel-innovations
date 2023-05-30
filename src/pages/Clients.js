/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from 'react-router-dom';

import treasury from '../assets/img/treasury.png';
import accenture from '../assets/img/accenture.png';
import irs from '../assets/img/irs.png';

import '../assets/css/clients2.css';

import Hero3 from "../components/Hero/Hero3";

const client = [
    {
        id: 1,
        image: treasury,
        link: "https://home.treasury.gov/"
    }, 

    {
        id: 2,
        image: accenture,
        link: "https://www.accenture.com/us-en"
    },

    {
        id: 3,
        image: irs,
        link: "https://www.irs.gov/"
    }
];

const Clientss = () => {

    return (

        <>
        <Hero3 pageTitle="Our Clients" />

        <section className="client-section" id="clients">

            <div className="container">

                <div className="row">
                {/** <ThemeSlider images={client} classes="client-logo owl-carousel" settings={settings} /> */}
                    {
                        client?.map(clients => {

                            return (
                                <div key={clients?.id} className="col-lg-4 col-md-6">
                                    <div className="client-page">
                                        <div className="cl-top">
                                            <Link to={clients?.link}><img src={clients?.image}/></Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
        </>
    )
}


export default Clientss;