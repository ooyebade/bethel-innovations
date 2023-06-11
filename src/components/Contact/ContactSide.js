
const ContactSide = ({ contactInfo }) => {

    return (

        <div className="col-lg-4">
            <div className="contact-box">
                <i className="fa fa-phone"></i>
                    <h3>Phone</h3>
                    <p>
                        {contactInfo.tel}
                    </p>
            </div>

            <div className="contact-box">
                <i className="fa fa-envelope"></i>
                    <h3>Email</h3>
                    <p>
                        {contactInfo.email}
                    </p>
            </div>

            <div className="contact-box">
                <i className="fa fa-map-marker"></i>
                    <h3>Location</h3>
                    <p>
                        {contactInfo.location}
                    </p>
            </div>
        </div>
    )
}


export default ContactSide;