import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import MiddleSection from "../components/MiddleSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { useState } from "react";
import StudyDestinations from "../components/StudyDestination";
import Trainings from "../components/Trainings";

export default function Home() {
  const [credentials, setCredentials] = useState({
    name: "",
    phone: "",
    service: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  return (
    <>
      <Navbar></Navbar>
      <section className="top container">
        <div className="row row-cols-1 row-cols-md-2 align-items-center">
          <div className="col order-2 order-md-1">
            <div className="mt-4">
              <div className="d-flex align-items-center">
                <img className="linn img-fluid" src="/linee.png" />
                <span className="ms-3">Trusted by 100+ Students</span>
              </div>
              <h1 className="main-title mt-3">
                Trusworthy & Best Abroad Study Consultancy in Sindhuli Nepal
              </h1>
              <p className="mt-2">
                Join us for professional consultation and visa assistance for
                your abroad studies journey in Australia, Japan, UK and USA. We
                provide the best IELTS, PTE, and Japanese Language classes in
                Sindhuli. We are committed to making your study abroad dreams a
                reality !
              </p>
              <h5 className="fw-bold mt-5">
                Planning to Study <span className="text-mine">Abroad ?</span>
              </h5>
              <div className="w-75">
                <div className="row row-cols-2">
                  <div className="col mb-3">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      id="name"
                      value={credentials.name}
                      onChange={(e) => handleChange(e)}
                      className="fields fff"
                    />
                  </div>
                  <div className="col mb-3">
                    <input
                      type="text"
                      placeholder="Phone"
                      name="phone"
                      id="phone"
                      value={credentials.phone}
                      onChange={(e) => handleChange(e)}
                      className="fields fff"
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      placeholder="Your Message"
                      name="message"
                      id="message"
                      value={credentials.name}
                      onChange={(e) => handleChange(e)}
                      className="fields fff"
                    />
                  </div>
                  <div className="col-12">
                    <button className="btn btn-mine py-2 w-100">
                      Send Inquiry Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col order-1 d-flex align-items-center justify-content-end">
            <img src="/hero-image.png" alt="hero image" className="img-fluid" />
          </div>
        </div>
      </section>
      <div className="py-5"></div>
      <div className="py-4"></div>
      <div>
        <h2 className="fw-bb fs-1 text-center">Services Yatri Offers</h2>
        <div className="bg-mine-l container br-mine mt-4 py-4 px-md-4">
          <div className="row row-cols-2 row-cols-md-4 gy-5 py-3">
            <div className="col d-flex justify-content-center">
              <div className="d-flex flex-column  align-items-center">
                <img
                  src="/services/Application and scholarship.jpg"
                  className="img-fluid image-round"
                  alt=""
                />
                <h5 className="py-3 fw-bb">Application and scholarship</h5>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="d-flex flex-column  align-items-center">
                <img
                  src="/services/Educational Counselling.jpg"
                  className="img-fluid image-round"
                  alt=""
                />
                <h5 className="py-3 fw-bb">Educational Counselling</h5>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="d-flex flex-column  align-items-center">
                <img
                  src="/services/Interview Preparation.jpg"
                  className="img-fluid image-round"
                  alt=""
                />
                <h5 className="py-3 fw-bb">Interview Preparation</h5>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="d-flex flex-column  align-items-center">
                <img
                  src="/services/Pre Departure Briefing.jpg"
                  className="img-fluid image-round"
                  alt=""
                />
                <h5 className="py-3 fw-bb">Pre Departure Briefing</h5>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="d-flex flex-column  align-items-center">
                <img
                  src="/services/Student profile analysis.jpg"
                  className="img-fluid image-round"
                  alt=""
                />
                <h5 className="py-3 fw-bb">Student profile analysis</h5>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="d-flex flex-column  align-items-center">
                <img
                  src="/services/Test Prep.jpg"
                  className="img-fluid image-round"
                  alt=""
                />
                <h5 className="py-3 fw-bb">Test Preparation</h5>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="d-flex flex-column  align-items-center">
                <img
                  src="/services/University Selection.jpg"
                  className="img-fluid image-round"
                  alt=""
                />
                <h5 className="py-3 fw-bb">University Selection</h5>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="d-flex flex-column  align-items-center">
                <img
                  src="/services/Visa Lodgement.jpg"
                  className="img-fluid image-round"
                  alt=""
                />
                <h5 className="py-3 fw-bb">Visa Lodgement</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3"></div>
      <div className="py-5"></div>
      <div className="bggg">
        <section className="container py-3">
          <div className="row row-cols-1 row-cols-md-2 align-items-center">
            <div className="col">
              <div className="row row-cols-2 g-3 mx-0">
                <div className="col bg-white">
                  <img src="/uk.jpg" alt="" className="img-fluid img-h" />
                </div>
                <div className="col">
                  <img src="/2.jpg" alt="" className="img-fluid img-h" />
                </div>
                <div className="col">
                  <img src="/usa.jpg" alt="" className="img-fluid img-h" />
                </div>
                <div className="col bg-white">
                  <img src="/1.jpg" alt="" className="img-fluid img-h" />
                </div>
              </div>
            </div>
            <div className="col">
              <span className="box-yatri2 p-3 fw-bold shadow-lg">
                About Yatri Int'l Education & Visa Services
              </span>
              <br />
              <br />
              <br />
              <h2 className="main-title mt-2">
                Providing Solutions For All Your Visa Needs
              </h2>

              <p className="mt-4">
                Yatri International Education is one of the emerging pioneer
                institutions that aims to facilitate your abroad education
                through high-quality training courses, test preparation classes,
                application management, and visa services. We are a one-stop
                destination dedicated to kick-starting your study abroad
                journey.
              </p>
              <div className="mt-5 row row-cols-1 row-cols-md-2">
                <div className="col">
                  <h5 className="title1">Why us?</h5>
                  <hr />
                  <p>
                    We connect you to the right study opportunities through
                    globally accredited colleges and universities in Australia,
                    USA, UK and Jaopan.
                  </p>
                </div>
                <div className="col">
                  <h5 className="title1">How are we different ?</h5>
                  <hr />
                  <p>
                    Our team of highly skilled counselors, well-trained teaching
                    staff, and dedicated student support staff work meticulously
                    to assist you at each step of your international education
                    journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="py-5"></div>
      <div className="py-5">
        <MiddleSection></MiddleSection>
      </div>
      <div className="py-3"></div>
      <StudyDestinations></StudyDestinations>
      <div className="py-5">
        <Trainings></Trainings>
      </div>
      <div className="py-5 my-5">
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
      <div className="py-5"></div>
      <Newsletter></Newsletter>
      <div className="py-3"></div>
      <div className="py-5"></div>
      <Footer></Footer>
    </>
  );
}
