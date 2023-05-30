/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from 'react-router-dom';
//import Divider from '@material-ui/core/Divider'

//import ThemeSlider from "../Slider/ThemeSlider";

import treasury from '../../assets/img/treasury.png';
import accenture from '../../assets/img/accenture.png';
import irs from '../../assets/img/irs.png';

import '../../assets/css/clients.css';

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

/** 
const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: false,
    centerMode: false,
    responsive: [
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        },

    ]
};
*/

const Clients = () => {

    return (

        <section className="client-section">

            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <hr className="hr-text" />
                            <h2 className="sub-title-2">SOME OF OUR <span>CLIENTS</span> </h2>
                    </div>
                </div>

                <div className="row">
                {/** <ThemeSlider images={client} classes="client-logo owl-carousel" settings={settings} /> */}
                    {
                        client?.map(clients => {

                            return (
                                <div key={clients?.id} className="col-lg-4 col-md-6">
                                    <div className="client-item">
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
    );
};


export default Clients;