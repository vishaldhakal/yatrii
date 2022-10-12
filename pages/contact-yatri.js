import Head from "next/head";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import TopSection from "../components/TopSection";

export default function Contact() {
  return (
    <>
      <Navbar></Navbar>
      <TopSection
        title="Contact Yatri Education"
        desc="We are here to help you !"
      ></TopSection>
      <div className="py-5 mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <img
              src="/contactt.png"
              alt="dce"
              className="img-fluid w-25 w-smm-50 mb-3"
            />
          </div>
          <h2 className="fw-bb text-center px-md-4 fs-2">
            Are you looking to study abroad ?
          </h2>
          <h5 className="fw-mine text-center px-md-4 fs-5">
            Don't know where to start ? Contact Yatri now!
          </h5>
          <div className="row row-cols-1 row-cols-md-3 mt-5">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <ContactForm></ContactForm>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="container px-mine">
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col d-flex justify-content-start rounded-mine">
              <div>
                <h3 className="fw-bold mb-3">Get In Touch </h3>
                <div>
                  <h5 className="fw-bold">Email</h5>
                  <p>yatrisindhuli@gmail.com</p>
                </div>
                <div>
                  <h5 className="fw-bold">Phone</h5>
                  <p>+977 47590485</p>
                </div>
                <div>
                  <h5 className="fw-bold">Address</h5>
                  <p>Madhutar, Kamalamai-5, Sindhuli</p>
                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-center rounded-mine">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.3897056857045!2d85.90776281502464!3d27.206911953912453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb8b365fdcec65%3A0xc955d5b47aad7fd9!2sYatri%20Int'l%20Education%20and%20Visa%20Services%2C%20Sindhuli!5e0!3m2!1sen!2snp!4v1663209422768!5m2!1sen!2snp"
                allowfullscreen=""
                loading="lazy"
                className="map-res"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5"></div>
      <Newsletter></Newsletter>
      <div className="py-3"></div>
      <div className="py-5"></div>
      <Footer></Footer>
    </>
  );
}
