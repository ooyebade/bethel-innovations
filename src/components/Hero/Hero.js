import { Link } from "react-router-dom";
import bethelHero from '../../assets/img/bethel-hero.jpg';
import '../../assets/css/hero.css';

const Hero = () => {
    return (
        <section className="hero-banner" style={{ backgroundImage: `url(${bethelHero})`}} >

            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-10">
                        <div className="banner-content">
                            <h1>
                                Consulting Services for all Information Technology Needs
                            </h1>

                            <p>
                                Bethel Innovations provides strategic consulting technology services 
                                and enterprise IT services to government contractors, nonprofit 
                                and government organizations.
                            </p>

                            <ul>
                                <li><Link className="about-btn" to="/about-us">Learn More</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Hero;