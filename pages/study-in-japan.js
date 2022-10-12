import Head from "next/head";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import TopSection from "../components/TopSection";
import StudyDestinations from "../components/StudyDestination";

export default function Japan() {
  return (
    <>
      <Navbar></Navbar>
      <TopSection
        title="Study In Japan with Yatri Int'l Education"
        desc="Let us help you get your Abroad Study Visa to Japan"
      ></TopSection>
      <div className="container mt-5">
        <div className="row row-cols-2 row-cols-md-4 g-5">
          <div className="col">
            <img src="/japan.jpg" alt="" className="img-fluid rounded-mine" />
            <h5 className="text-center fw-bb bb2 mt-2">Tokyo</h5>
          </div>
          <div className="col">
            <img src="/japan.jpg" alt="" className="img-fluid rounded-mine" />
            <h5 className="text-center fw-bb bb2 mt-2">Hirosima</h5>
          </div>
          <div className="col">
            <img src="/japan.jpg" alt="" className="img-fluid rounded-mine" />
            <h5 className="text-center fw-bb bb2 mt-2">Nagasaki</h5>
          </div>
          <div className="col">
            <img src="/japan.jpg" alt="" className="img-fluid rounded-mine" />
            <h5 className="text-center fw-bb bb2 mt-2">Darwin</h5>
          </div>
        </div>
      </div>
      <div className="container">
        <br />
        <br />
        <div>
          <p className="fs-5 lh-5 ">
            Japan is gaining popularity among Nepalese students as one of the
            top study destinations to pursue information technology, science,
            financial tech, and arts. The Japanese education system is
            consistently ranked among the top for its advancement and quality of
            academics. So, it isn’t surprising that Japan is gaining popularity
            among international students, despite the language barrier.
          </p>
          <br />
        </div>
      </div>
      <div>
        <img src="/aus.jpg" alt="" className="img-fluid fw-img" />
      </div>
      <div className="container mt-4">
        <div>
          <div className="bg-yell">
            <h5 className="fw-bb p-3">Major attractions of Japan</h5>
          </div>
          <ul class="my-4">
            <li>
              <p>Time morals and values of the Japanese community</p>
            </li>
            <li>
              <p>Affordable cost of living</p>
            </li>
            <li>
              <p>2nd largest economy in the world</p>
            </li>
            <li>
              <p>One of the safest countries in the world </p>
            </li>
            <li>
              <p>Generous scholarship opportunities </p>
            </li>
            <li>
              <p>
                Equal educational costs for both national and international
                students
              </p>
            </li>
            <li>
              <p>Provision of work-study for international students</p>
            </li>
          </ul>

          <div className="bg-yell">
            <h5 className="fw-bb p-3">
              Popular courses for Nepalese students in Japan
            </h5>
          </div>
          <ul class="my-4">
            <li>
              <p>Engineering Courses</p>
            </li>
            <li>
              <p>Information Technology</p>
            </li>
            <li>
              <p>Business Studies</p>
            </li>
            <li>
              <p>Hotel Management </p>
            </li>
            <li>
              <p>Language Courses</p>
            </li>
          </ul>
          <br />
          <br />
          <div className="bg-yell">
            <h5 className="fw-bb p-3">
              Documents Checklist for Study in Japan
            </h5>
          </div>
          <p className="my-4">
            The following documents are required for the student visa
            application:
          </p>
          <ol>
            <li>
              <h6 class="fw-bold">Academic Documents</h6>
              <ul>
                <li>
                  <p>
                    Transcript, Provisional, Character certificate (From year 10
                    to your recent Education Qualification)
                  </p>
                </li>
                <li>
                  <p>Passport-sized photo (not older than six months)</p>
                </li>
                <li>
                  <p>
                    N5 level of Japanese Language Proficiency Test (required for
                    undergraduate, optional for graduate)
                  </p>
                </li>
                <li>
                  <p>Original passport</p>
                </li>
                <li>
                  <p>Identification Card Copies</p>
                </li>
                <li>
                  <p>Certificate of good conduct (Police Report)</p>
                </li>
                <li>
                  <p>Letter of Reccomendation</p>
                </li>
                <li>
                  <p>Japanese Language Certificate of atleast 6 months </p>
                </li>
                <li>
                  <p>Work experience letter(if applicable)</p>
                </li>
              </ul>
            </li>
            <br />
            <li>
              <h6 class="fw-bold">Financial Documents</h6>
              <ul>
                <li>
                  <p>Proof of funds(Bank Statement or Loan Letter)</p>
                </li>
                <li>
                  <p>
                    Certificate of relationship verification of the applicant
                    with the sponsor
                  </p>
                </li>
                <li>
                  <p>
                    Income verification and income source documents of the
                    sponsor
                  </p>
                </li>
                <li>
                  <p>Sponsor letter and birth certificate</p>
                </li>
                <li>
                  <p>
                    Tax clearance, property valuation, and verification of
                    business and income{" "}
                  </p>
                </li>
              </ul>
            </li>
            <br />
            <li>
              <h6 class="fw-bold">Other Documents</h6>
              <ul>
                <li>
                  <p>
                    Certificate of the medical report (physically and mentally
                    fit)
                  </p>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <br />
      <br />
      <div className="py-5">
        <StudyDestinations></StudyDestinations>
      </div>
      <div className="py-5"></div>
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
            Are you looking to study IELTS ?
          </h2>
          <h5 className="fw-mine text-center px-md-4 fs-5 lh-5 ">
            Contact Yatri now!
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
      <div className="py-3"></div>
      <Newsletter></Newsletter>
      <div className="py-5"></div>
      <Footer></Footer>
    </>
  );
}
