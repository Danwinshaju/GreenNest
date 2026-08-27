import React, { useState } from "react";
import "./Contact.css";
import { apiRequest } from "../services/api";
const Contact = () => {
  const [form,setForm]=useState({name:"",email:"",subject:"",message:""});
  const [status,setStatus]=useState("");
  const submit=async(e)=>{e.preventDefault();setStatus("Sending...");try{const data=await apiRequest("/contact",{method:"POST",body:JSON.stringify(form)});setStatus(data.message);setForm({name:"",email:"",subject:"",message:""});}catch(error){setStatus(error.message);}};
  return (
    <section>
      
      <div className="contact-container">

        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you! Get in touch for plant care tips,
            product inquiries, or any assistance.
          </p>
        </div>

        <div className="contact-content">

          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send a Message</h2>

            <form onSubmit={submit}>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})}
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}
              />

              <input
                type="text"
                placeholder="Subject"
                value={form.subject} onChange={(e)=>setForm({...form,subject:e.target.value})}
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                required
                value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})}
              ></textarea>

              <button type="submit">
                Send Message
              </button>
              {status && <p role="status">{status}</p>}
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h2>Get In Touch</h2>

            <div className="info-box">
              <h3>📍 Address</h3>
              <p>GreenNest Gardens, Coimbatore, Tamil Nadu, India</p>
            </div>

            <div className="info-box">
              <h3>📞 Phone</h3>
              <p>Please use the contact form</p>
            </div>

            <div className="info-box">
              <h3>📧 Email</h3>
              <p>Available on request</p>
            </div>

            <div className="info-box">
              <h3>🕒 Working Hours</h3>
              <p>Monday - Saturday</p>
              <p>9:00 AM - 6:00 PM</p>
            </div>
          </div>

        </div>

        {/* Map Section */}
        <div className="map-section">
          <h2>Our Location</h2>
          <div className="map-container">
            <iframe
              title="GreenNest Gardens Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0882340693686!2d76.9613669!3d11.0168445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b9e3fb0001%3A0x5a7b6f5f5f5f5f5f!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1623916162618"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
