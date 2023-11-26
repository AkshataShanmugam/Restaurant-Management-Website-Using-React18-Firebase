import React from "react";

const ContactUs = () => {
  return (
    <section className="contact-us">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="contact-email">Email: <a href="mailto:info@comida.com">info@comida.com</a></div>
        <div className="contact-phone">Phone: +1 (123) 456-7890</div>
      </div>
      <div className="address">
        <strong>Visit Us:</strong>
        <p>123 Restaurant Street, Cityville, State, 12345</p>
      </div>
    </section>
  );
};

export default ContactUs;
