//import { useForm } from 'react-hook-form';

import '../../assets/css/contact.css';

const ContactFormUi = () => {

    const handleSubmit = event => {
        event.preventDefault();
        event.target.reset();
    }

    function sendEmail() {

        window.location.href = 'mailto:oyebadeoyinda14@gmail.com?subject';
    }

    return (
        <form onSubmit={handleSubmit} className="row">
            <div className="col-md-6">
                <div className="input-form">
                    <i className="fa fa-user"></i>
                    <input type="text" name="name" id="name" 
                        placeholder="Enter your name" required                      
                    />
                </div>
            </div>
            <div className="col-md-6">
                <div className="input-form">
                    <i className="fa fa-envelope"></i>
                    <input type="email" name="email" id="email" 
                        placeholder="Enter your email" required
                    />
                </div>
            </div>
            <div className="col-md-6">
                <div className="input-form">
                    <i className="fa fa-phone"></i>
                    <input type="text" name="phone" id="phone" 
                        placeholder="Phone number" required
                    />
                </div>
            </div>
            <div className="col-md-6">
                <div className="input-form">
                    <i className="fa fa-pencil-alt"></i>
                    <input type="text" name="subject" id='subject' 
                        placeholder="Subject"
                    />
                </div>
            </div>
            <div className="col-md-12">
                <div className="input-form">
                    <i className="fa fa-edit"></i>
                    <textarea name="message" id='message' 
                        placeholder="Enter your message" required >
                    </textarea>
                </div>
            </div>
            <div className="col-md-12 text-center">
                <button className="contactbtn" type="submit" onClick={sendEmail} method="GET">Send Message<i className="fa fa-long-arrow-right"></i></button>
            </div>
        </form>
   )

}

export default ContactFormUi;