import ContactForm from "./ContactForm";
// import ContactSide from "./ContactSide";

import '../../assets/css/contact.css';

/** 
const contactInfo = {
    tel: "(301) 351-8653",
    location: "Burke, VA 22015"
}; 
*/

const HomeContact = () => {
    return (
        <>
            <section className="contact-page-section" id="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="sub-title-2"><span>Get In Touch</span></div>
                            <h3 className="sec-title">
                                Let Us Grow Your Organization
                            </h3>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact-page-form">
                                <ContactForm />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="location-map">
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.471459349532!2d-77.28643692499746!3d38.775825053869845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6521db594369d%3A0xb4fae06fd31f2304!2s9806%20Sheads%20Ct%2C%20Burke%2C%20VA%2022015!5e0!3m2!1sen!2sus!4v1685090097653!5m2!1sen!2sus'
                        width="95%" height="450px"
                        loading="lazy" title='map' style={{ border: 0 }}>    
                    </iframe>
                </div>
            </section>
        </>
    )
}

export default HomeContact;