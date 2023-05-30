import Hero2 from "../components/Hero/Hero2";
import ContactForm from "../components/Contact/ContactForm";
import ContactSide from "../components/Contact/ContactSide";

import '../assets/css/contact.css';


const contactInfo = {
    tel: "(301) 351-8653",
    location: "Burke, VA 22015"
}; 

const Contact = () => {
    return (
        <>
            <Hero2 pageTitle="Contact Us" />

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

                    <div className="row">
                        <div className="col-lg-8">
                            <div className="contact-page-form">
                                <ContactForm />
                            </div>
                        </div>

                        <ContactSide contactInfo={contactInfo} />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact;