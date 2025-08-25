// import React, { useState } from 'react'
// import SimpleReactValidator from 'simple-react-validator';


// const ContactForm = () => {

//     const submitHandler = async (e) => {
//         e.preventDefault();
//         if (validator.allValid()) {
//             try {
//                 const response = await fetch('http://localhost:5000/api/contact', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify(forms),
//                 });


//                 const data = await response.json();

//                 if (data.success) {
//                     alert(data.message);
//                     setForms({
//                         name: '',
//                         email: '',
//                         subject: '',
//                         phone: '',
//                         message: ''
//                     });
//                     validator.hideMessages();
//                 } else {
//                     alert("Failed to send message.");
//                 }
//             } catch (error) {
//                 console.error('Error submitting form:', error);
//                 alert("Something went wrong.");
//             }
//         } else {
//             validator.showMessages();
//         }
//     };


//     const [forms, setForms] = useState({
//         name: '',
//         email: '',
//         subject: '',
//         phone: '',
//         message: ''
//     });
//     const [validator] = useState(new SimpleReactValidator({
//         className: 'errorMessage'
//     }));
//     const changeHandler = e => {
//         setForms({ ...forms, [e.target.name]: e.target.value })
//         if (validator.allValid()) {
//             validator.hideMessages();
//         } else {
//             validator.showMessages();
//         }
//     };

//     // const submitHandler = e => {
//     //     e.preventDefault();
//     //     if (validator.allValid()) {
//     //         validator.hideMessages();
//     //         setForms({
//     //             name: '',
//     //             email: '',
//     //             subject: '',
//     //             phone: '',
//     //             message: ''
//     //         })
//     //     } else {
//     //         validator.showMessages();
//     //     }
//     // };

//     return (
//         <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
//             <div className="row">
//                 <div className="col col-lg-6 col-12">
//                     <div className="form-field">
//                         <input
//                             value={forms.name}
//                             type="text"
//                             name="name"
//                             onBlur={(e) => changeHandler(e)}
//                             onChange={(e) => changeHandler(e)}
//                             placeholder="Your Name" />
//                         {validator.message('name', forms.name, 'required|alpha_space')}
//                     </div>
//                 </div>
//                 <div className="col col-lg-6 col-12">
//                     <div className="form-field">
//                         <input
//                             value={forms.email}
//                             type="email"
//                             name="email"
//                             onBlur={(e) => changeHandler(e)}
//                             onChange={(e) => changeHandler(e)}
//                             placeholder="Your Email" />
//                         {validator.message('email', forms.email, 'required|email')}
//                     </div>
//                 </div>
//                 <div className="col col-lg-12 col-12">
//                     <div className="form-field">
//                         <input
//                             value={forms.phone}
//                             type="phone"
//                             name="phone"
//                             onBlur={(e) => changeHandler(e)}
//                             onChange={(e) => changeHandler(e)}
//                             placeholder="Your phone" />
//                         {validator.message('phone', forms.phone, 'required|phone')}
//                     </div>
//                 </div>
//                 <div className="col col-lg-12 col-12">
//                     <div className="form-field">
//                         <select
//                             onBlur={(e) => changeHandler(e)}
//                             onChange={(e) => changeHandler(e)}
//                             value={forms.subject}
//                             type="text"
//                             name="subject">
//                             <option>Choose a Service</option>
//                             <option>Web Design</option>
//                             <option>Web Development</option>
//                             <option>App Development</option>
//                         </select>
//                         {validator.message('subject', forms.subject, 'required')}
//                     </div>
//                 </div>
//                 <div className="col col-lg-12 col-12">
//                     <textarea
//                         onBlur={(e) => changeHandler(e)}
//                         onChange={(e) => changeHandler(e)}
//                         value={forms.message}
//                         type="text"
//                         name="message"
//                         placeholder="Message">
//                     </textarea>
//                     {validator.message('message', forms.message, 'required')}
//                 </div>
//             </div>
//             <div className="submit-area">
//                 <button type="submit" className="theme-btn">Submit Now</button>
//             </div>
//         </form >
//     )
// }

// export default ContactForm;
















































import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     if (validator.allValid()) {
    //         try {
    //             const result = await emailjs.send(
    //                 "service_a009nes",
    //                 "template_1rd6hgp",
    //                 forms,
    //                 "sF8IiNs7zAG1Tdn4q"
    //             );

    //             console.log(result.text);
    //             alert("Message sent successfully!");

    //             setForms({
    //                 name: '',
    //                 email: '',
    //                 subject: '',
    //                 phone: '',
    //                 message: ''
    //             });
    //             validator.hideMessages();

    //         } catch (error) {
    //             console.error("EmailJS Error:", error);
    //             alert("Failed to send message. Try again.");
    //         }
    //     } else {
    //         validator.showMessages();
    //     }
    // };



    const submitHandler = async (e) => {
         e.preventDefault(); 

         if (!validator.allValid()) {
             validator.showMessages();
             return;
         }

                try {
                    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            service_id: "service_y3jvsl2",
                            template_id: "template_1rd6hgp",
                            user_id: "sF8IiNs7zAG1Tdn4q",
                            template_params: {
                                name: forms.name,
                                email: forms.email,
                                phone: forms.phone,
                                subject:forms.subject,
                                message:forms.message,
                 
                                time: new Date().toLocaleString(),
                            }
                        })
                    });

                    if (response.ok) {
                        console.log("✅ Email sent successfully!");
                    } else {
                        console.error("❌ Email failed:", await response.text());
                    }
                } catch (err) {
                    console.error("Error:", err);
                }
            }
        console.log("FORMS",forms);

    return (
        <form onSubmit={submitHandler} className="contact-validation-active">
            <div className="row">
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            onChange={changeHandler}
                            placeholder="Your Name" />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            onChange={changeHandler}
                            placeholder="Your Email" />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <input
                            value={forms.phone}
                            type="text"
                            name="phone"
                            onChange={changeHandler}
                            placeholder="Your Phone" />
                        {validator.message('phone', forms.phone, 'required|numeric')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <select
                            value={forms.subject}
                            name="subject"
                            onChange={changeHandler}
                        >
                            <option value="">Choose a Service</option>
                            <option value="Web Design">Web Design</option>
                            <option value="Web Development">Web Development</option>
                            <option value="App Development">App Development</option>
                        </select>
                        {validator.message('subject', forms.subject, 'required')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <textarea
                        value={forms.message}
                        name="message"
                        onChange={changeHandler}
                        placeholder="Message">
                    </textarea>
                    {validator.message('message', forms.message, 'required')}
                </div>
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn">Submit Now</button>
            </div>
        </form>
    );
};

export default ContactForm;
