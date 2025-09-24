// import React from 'react'
// import './Contact.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
// import mail_icon from '../../assets/mail_icon.svg'
// import location_icon from '../../assets/location_icon.svg'
// import call_icon from '../../assets/call_icon.svg'

// const Contact = () =>{



//     const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key","75e9ef7a-8772-4bbc-aa58-50b6188ae00f");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };



//   return(
//     <div id='contact' className='contact'>
//         <div className="contact-title">
//             <h1>Get in touch</h1>
//             <img src={theme_pattern} alt="" />
//         </div>
//         <div className="contact-section">
//             <div className="contact-left">
//                 <h1>Let's talk</h1>
//                 <p>I'm currently avaliable to take on new oppurtunities, so feel free to send me a message about anything that you want me to work on.You can contact anytime.</p>
//                 <div className="contact-details">
//                     <div className="contact-detail">
//                         <img src={mail_icon} alt="" />
//                         <p>chetna8649@gmail.com</p>
//                     </div>
//                     <div className="contact-detail">
//                         <img src={call_icon} alt="" />
//                         <p>+91 7740927688</p>
//                     </div>
//                     <div className="contact-detail">
//                         <img src={location_icon} alt="" />
//                         <p>Baran, Rajasthan</p>
//                     </div>
//                 </div>
//             </div>
//             <form onSubmit={onSubmit} className="contact-right">
//                 <label htmlFor="">Your Name</label>
//                 <input type="text" placeholder='Enter your name' name='name' />
//                 <label htmlFor="">Your Email</label>
//                 <input type="email" placeholder='Enter your email' name='email' />
//                 <label htmlFor="">Write your message here</label>
//                 <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
//                 <button type="submit" className="contact-submit">Submit now</button>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Contact























import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const [result, setResult] = useState(""); // ✅ Added state

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "75e9ef7a-8772-4bbc-aa58-50b6188ae00f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.error("Form error:", data);
      setResult("❌ " + (data.message || "Form submission failed."));
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new opportunities. Feel free to send me a message about anything you'd like to discuss. You can contact me anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>chetna8649@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 7740927688</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Baran, Rajasthan</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />

          <label>Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />

          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>

          <button type="submit" className="contact-submit">Submit now</button>

          {/* ✅ Feedback message */}
          {result && <p className="form-result">{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;

