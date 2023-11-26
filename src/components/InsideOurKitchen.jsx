import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import logo from "../images/logo.png";
import ContactUs from "./ContactUs";


const InsideOurKitchen = () => {
  return (
    <div className="inside-our-kitchen--div">
        <Navbar />
        <img src={logo} alt="Comida logo" className="inside-our-kichen--logo" />
        <h1 className="inside-our-kitchen--heading">Inside Our Kitchen</h1>
        <p className="inside-our-kitchen--p background-container-img1"> Welcome to a behind-the-scenes look at the heart of Comida's culinary experience. Our kitchen is a place of creativity, passion, and dedication to delivering exceptional dining experiences.</p>
        <p className="inside-our-kitchen--p">At Comida, we believe that great food starts with great ingredients. Our dedicated team of ingredient sourcers ensures that we use only the freshest, locally sourced produce, supporting local farmers and businesses.</p>
        <p className="inside-our-kitchen--p background-container-img2">From recipe creation to the final presentation, our chefs bring a wealth of experience and innovation to the table. Whether it's a classic dish or a new culinary experiment, each creation reflects our commitment to culinary excellence.</p>
        <p className="inside-our-kitchen--p">Maintaining the highest standards of hygiene is paramount in our kitchen. Our state-of-the-art facilities and rigorous quality control measures ensure that every dish leaving our kitchen not only tantalizes the taste buds but also meets the strictest health and safety standards.</p>
        <p className="inside-our-kitchen--p background-container-img4">Explore our culinary journey and discover the stories behind your favorite dishes. Join us on this gastronomic adventure as we share the passion and craftsmanship that go into creating the Comida experience.</p>
        <br />
        <br />
        <br />
        <br />
        <ContactUs />
        <br />
        <br />
        <br />
        <Footer />
    </div>
  );
};

export default InsideOurKitchen;
