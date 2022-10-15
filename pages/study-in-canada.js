import Head from "next/head";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import TopSection from "../components/TopSection";
import StudyDestinations from "../components/StudyDestination";

export default function Canada() {
  return (
    <>
      <Navbar></Navbar>
      <TopSection
        title="Study In Canada with Yatri Int'l Education"
        desc="Let us help you get your Abroad Study Visa to Canada"
      ></TopSection>
      <div className="container mt-5">
        <div className="row row-cols-2 row-cols-md-4 g-5">
          <div className="col">
            <img src="/mis.jpg" alt="" className="img-fluid rounded-mine" />
            <h5 className="text-center fw-bb bb2 mt-2">Mississauga</h5>
          </div>
          <div className="col">
            <img src="/oak.jpg" alt="" className="img-fluid rounded-mine" />
            <h5 className="text-center fw-bb bb2 mt-2">Oakville</h5>
          </div>
          <div className="col">
            <img src="/bra.webp" alt="" className="img-fluid rounded-mine" />
            <h5 className="text-center fw-bb bb2 mt-2">Brampton</h5>
          </div>
          <div className="col">
            <img src="/tor.jpg" alt="" className="img-fluid rounded-mine" />
            <h5 className="text-center fw-bb bb2 mt-2">Toronto</h5>
          </div>
        </div>
      </div>
      <div className="container">
        <br />
        <br />
        <div>
          <p className="fs-5 lh-5 ">
            In recent years, Nepali students seeking post-secondary education in
            Canada have maintained a strong upward curve. Canada has
            consistently held its spot among the top destinations for
            international students seeking a higher quality of education and
            life.
            <br />
            <br />
            The internationally recognized education from one of the top
            educators in the world and the lower cost of attendance continue to
            attract students from all over the world. Canada is also home to
            hundreds of thousands of the international population which adds to
            the diversity of the community. Moreover, Canada is considered one
            of the safest countries in the world for international students. No
            wonder it is students' dream destination.
          </p>
          <br />
        </div>
      </div>
      <div>
        <img src="/can.jpg" alt="" className="img-fluid fw-img" />
      </div>
      <div className="container mt-4">
        <div>
          <div className="bg-yell">
            <h5 className="fw-bb p-3">Why Canada ?</h5>
          </div>
          <ul className="my-4">
            <li>
              <p>High Safety Standards</p>
            </li>
            <li>
              <p>Quality Education at an affordable cost</p>
            </li>
            <li>
              <p>Better Work-Study environment for international students</p>
            </li>
            <li>
              <p>Canada is ranked #1 for Quality of Life</p>
            </li>
            <li>
              <p>Vibrant Cities and Diverse Communities</p>
            </li>
            <li>
              <p>Scholarship opportunities</p>
            </li>
          </ul>
          <div className="bg-yell">
            <h5 className="fw-bb p-3">Institutions and Programs</h5>
          </div>
          <p>
            Broadly, there are four types of post-secondary institutions in
            Canada offering a wide range of courses, learning experiences, and
            affordability.
          </p>
          <ul className="my-4">
            <li>
              <p>Colleges</p>
            </li>
            <li>
              <p>Universities</p>
            </li>
            <li>
              <p>Private career colleges and</p>
            </li>
            <li>
              <p>Vocational and technical schools</p>
            </li>
          </ul>
          <br />
          <br />
          <p>
            Each school has its own set of rules on how to apply and its
            admission requirements, including English proficiency and
            standardized tests. Universities will also independently determine
            your scholarships and funding based on academic records, testing,
            and extracurricular activities. You can easily find the details via
            the university’s website once you finalize which university to apply
            to.
          </p>
          <br />
          <br />
          <div className="bg-yell">
            <h5 className="fw-bb p-3">
              Things to keep in mind before applying to Canada
            </h5>
          </div>
          <ul className="my-4">
            <li>
              <p>Apply a year in advance for post-secondary programs</p>
            </li>
            <li>
              <p>
                Check the eligibility and admission requirements before applying
                to a university
              </p>
            </li>
            <li>
              <p>
                Choose a university you can afford, part-time earnings are
                barely enough to cover personal expenses
              </p>
            </li>
            <li>
              <p>
                Lookout for important deadlines such as scholarship, admission
                test, etc
              </p>
            </li>
            <li>
              <p>Consider the climatic factors while choosing your next home</p>
            </li>
            <li>
              <p>
                Living costs and rent vary from city to city; it is important to
                choose the one you can easily afford
              </p>
            </li>
          </ul>
          <br />
          <br />
          <div className="bg-yell">
            <h5 className="fw-bb p-3">Documents Required</h5>
          </div>
          <ul className="my-4">
            <li>
              <p>Academic Credentials</p>
            </li>
            <li>
              <p>Official transcripts</p>
            </li>
            <li>
              <p>Language test scores</p>
            </li>
            <li>
              <p>Proof of identity (Passport)</p>
            </li>
            <li>
              <p>Passport size photographs</p>
            </li>
            <li>
              <p>Proof of funding authorized by notary public</p>
            </li>
            <li>
              <p>Income tax documents</p>
            </li>
            <li>
              <p>Proof of acceptance/offer letter from one university</p>
            </li>
          </ul>
          <br />
          <br />
          <div className="bg-yell">
            <h5 className="fw-bb p-3">
              Step-by-step process to study in Canada
            </h5>
          </div>
          <ul className="my-4">
            <li>
              <p>Consult with one of our educational counselors</p>
            </li>
            <li>
              <p>Choose a suitable course and program</p>
            </li>
            <li>
              <p>Shortlist a few academic institutions</p>
            </li>
            <li>
              <p>Apply for admission</p>
            </li>
            <li>
              <p>Accept the admission offer</p>
            </li>
            <li>
              <p>Prepare and submit financial documents</p>
            </li>
            <li>
              <p>Request i20 document from your selected university</p>
            </li>
            <li>
              <p>
                Arrange the documents for student visa processing (health
                certificate, police clearance certificate, relationship
                certificates, etc)
              </p>
            </li>
            <li>
              <p>Visa Lodgement</p>
            </li>
            <li>
              <p>Pre-departure briefing</p>
            </li>
            <li>
              <p>Post-departure assistance </p>
            </li>
          </ul>
          <br />
          <br />
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
