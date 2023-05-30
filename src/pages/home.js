import React from "react";
import Hero from "../components/Hero/Hero";
import Clients from "../components/Clients/clients";
import HomeContact from '../components/Contact/HomeContact'
import About from '../components/About/about';
import Philosophy from '../components/philiosphy';

const Home = () => {

    return (
        <>

            <Hero />
            
            <Clients />

            <About />

            <Philosophy />

            <HomeContact />

        </>
    )
}

export default Home