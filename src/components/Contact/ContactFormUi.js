import { useForm } from 'react-hook-form';

import '../../assets/css/contact.css';

const ContactFormUi = ({ handleContactForm, name, setName, form, phone, setPhone, subject, setSubject, email, setEmail, message, setMessage }) => {

    const { register, formState: { errors } } = useForm();

    return (
        <form ref={form} onSubmit={handleContactForm} className="row">
            <div className="col-md-6">
                <div className="input-form">
                    <i className="fa fa-user"></i>
                    <input {...register("name", { required: true })} type="text" name="name" id="name" 
                        placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}                        
                    />
                    {errors.name && <span className="text-danger">Name is required</span>}
                </div>
            </div>
            <div className="col-md-6">
                <div className="input-form">
                    <i className="fa fa-envelope"></i>
                    <input {...register("email", { required: true })} type="email" name="email" id="email" 
                        placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span className="text-danger">Email is required</span>}
                </div>
            </div>
            <div className="col-md-6">
                <div className="input-form">
                    <i className="fa fa-phone"></i>
                    <input {...register("phone", { required: true })} type="text" name="phone" id="phone" 
                        placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)}
                    />
                    {errors.phone && <span className="text-danger">Phone Number is required</span>}
                </div>
            </div>
            <div className="col-md-6">
                <div className="input-form">
                    <i className="fa fa-pencil-alt"></i>
                    <input {...register("subject", { required: true })} type="text" name="subject" id='subject' 
                        placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)}
                    />
                    {errors.subject && <span className="text-danger">Subject is required</span>}
                </div>
            </div>
            <div className="col-md-12">
                <div className="input-form">
                    <i className="fa fa-edit"></i>
                    <textarea {...register("message", { required: true })} name="message" id='message' 
                        placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)}>
                    </textarea>
                    {errors.message && <span className="text-danger">Message is required</span>}
                </div>
            </div>
            <div className="col-md-12 text-center">
                <button className="contactbtn" type="submit">Send Message<i className="fa fa-long-arrow-right"></i></button>
            </div>
        </form>
   )

}

export default ContactFormUi;