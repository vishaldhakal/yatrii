import Head from "next/head";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import TopSection from "../components/TopSection";
import StudyDestinations from "../components/StudyDestination";

export default function USA() {
  return (
    <>
      <Head>
        <title>
          Let Yatri Education help you get your Abroad Study Visa to United
          States of America
        </title>
        <meta
          name="Description"
          content="The USA is the most popular international student destination. US education is considered one of the best investments for the future. The number of aspiring Nepalese for American education is exponentially increasing year after year."
        ></meta>
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="og:website" />
        <meta
          property="og:title"
          content="Let Yatri Education help you get your Abroad Study Visa to United States of America"
        />
        <meta
          property="og:description"
          content="The USA is the most popular international student destination. US education is considered one of the best investments for the future. The number of aspiring Nepalese for American education is exponentially increasing year after year."
        />
        <meta
          property="og:site_name"
          content="Yatri International Education and Visa Services"
        />
      </Head>
      <Navbar></Navbar>
      <TopSection
        title="Study In USA with Yatri Int'l Education"
        desc="Let us help you get your Abroad Study Visa to United States of America"
      ></TopSection>
      <div className="container mt-5">
        <div className="row row-cols-2 row-cols-md-4 g-5">
          <div className="col">
            <img src="/ny.webp" alt="" className="img-fluid rounded-mine" />
            <h5 className="text-center fw-bb bb2 mt-2">New York City</h5>
          </div>
          <div className="col">
            <img src="/la.webp" alt="" className="img-fluid rounded-mine" />
            <h5 className="text-center fw-bb bb2 mt-2">Los Angeles</h5>
          </div>
          <div className="col">
            <img src="/sf.webp" alt="" className="img-fluid rounded-mine" />
            <h5 className="text-center fw-bb bb2 mt-2">San Francisco</h5>
          </div>
          <div className="col">
            <img src="/ch.webp" alt="" className="img-fluid rounded-mine" />
            <h5 className="text-center fw-bb bb2 mt-2">Chicago</h5>
          </div>
        </div>
      </div>
      <div className="container">
        <br />
        <br />
        <div>
          <p className="fs-5 lh-5 ">
            The USA is the most popular international student destination. US
            education is considered one of the best investments for the future.
            The number of aspiring Nepalese for American education is
            exponentially increasing year after year. The United States of
            America has been leading the field of education with thousands of
            colleges and universities for higher education, among which hundreds
            are top-ranked worldwide. Moreover, its multicultural environment
            helps students build relationships with people from around the
            world.
          </p>
          <br />
        </div>
      </div>
      <div>
        <img src="/usa.jpg" alt="" className="img-fluid fw-img" />
      </div>
      <div className="container mt-4">
        <div>
          <div className="bg-yell">
            <h5 className="fw-bb p-3">Major attractions of USA</h5>
          </div>
          <ul className="my-4">
            <li>
              <p>Quality Education</p>
            </li>
            <li>
              <p>Excellent funding and scholarship opportunities</p>
            </li>
            <li>
              <p>Wide range of universities and courses</p>
            </li>
            <li>
              <p>Flexible Curriculum</p>
            </li>
            <li>
              <p>Sophisticated Education Environment</p>
            </li>
            <li>
              <p>Diverse Community</p>
            </li>
            <li>
              <p>Cutting-edge technology, research, and techniques</p>
            </li>
            <li>
              <p>20-hour-per week work permit for international students</p>
            </li>
          </ul>

          <div className="bg-yell">
            <h5 className="fw-bb p-3">Types of Programs Offered</h5>
          </div>
          <ul className="my-4">
            <li>
              <p>Associates Degree</p>
            </li>
            <li>
              <p>Undergraduate Degree</p>
            </li>
            <li>
              <p>Graduate Degree</p>
            </li>
          </ul>
          <br />
          <br />
          <div className="bg-yell">
            <h5 className="fw-bb p-3">Institutions</h5>
          </div>
          <p className="my-4">
            Broadly, there are four types of institutions in the USA offering a
            wide range of courses, learning experiences, and affordability.
          </p>
          <ul className="my-4">
            <li>
              <p>State Universities/ Colleges</p>
            </li>
            <li>
              <p>Private Universities/ Colleges</p>
            </li>
            <li>
              <p>Community Colleges</p>
            </li>
            <li>
              <p>Institutes of Technology</p>
            </li>
          </ul>
          <br />
          <br />
          <div className="bg-yell">
            <h5 className="fw-bb p-3">
              Step-by-step guide to studying in the USA from Nepal
            </h5>
          </div>
          <div className="py-3"></div>
          <ol>
            <li>
              <h6 className="fw-bold">Registration</h6>
              <ul>
                <li>
                  <p>Application Forms or APPLY ONLINE</p>
                </li>
                <li>
                  <p>Verified Academic Documents</p>
                </li>
                <li>
                  <p>Passport</p>
                </li>
                <li>
                  <p>Recommendation Letters</p>
                </li>
                <li>
                  <p>
                    Standardized Test Scores (SAT for Undergraduate, GRE/GMAT
                    for Graduate studies)
                  </p>
                </li>
                <li>
                  <p>Work Experience Letter (Optional)</p>
                </li>
                <li>
                  <p>Updated CV</p>
                </li>
                <li>
                  <p>Personal Statement</p>
                </li>
                <li>
                  <p>
                    IELTS or Equivalent English Test (TOEFL, Duolingo English
                    Test)
                  </p>
                </li>
              </ul>
            </li>
            <div className="py-2"></div>
            <li>
              <h6 className="fw-bold">Offer Letter</h6>
              <ul>
                <li>
                  <p>
                    Bank Balance or Education Loan from Recognized Banks in
                    Nepal (SBI& NABIL)
                  </p>
                </li>
                <li>
                  <p>Financial Documents Submission</p>
                </li>
                <li>
                  <p>
                    Tax Clearance Certificate (Business, Salary, Incomes,
                    Property, etc)
                  </p>
                </li>
              </ul>
            </li>
            <div className="py-2"></div>
            <li>
              <h6 className="fw-bold">Confirmation of Enrollment</h6>
              <ul>
                <li>
                  <p>Enrollment Deposit</p>
                </li>
                <li>
                  <p>Request I20 document</p>
                </li>
              </ul>
            </li>
            <div className="py-2"></div>
            <li>
              <h6 className="fw-bold">Online Visa Application</h6>
              <ul>
                <li>
                  <p>Online Visa Application Submission</p>
                </li>
                <li>
                  <p>Health Certificate</p>
                </li>
                <li>
                  <p>Police Clearance Certificate</p>
                </li>
                <li>
                  <p>
                    Academic Certificate English Language Proficiency
                    Certificate
                  </p>
                </li>
                <li>
                  <p>Financial Certificate</p>
                </li>
                <li>
                  <p>Relationship Certificate</p>
                </li>
                <li>
                  <p>Visa Fee</p>
                </li>
                <li>
                  <p>
                    If Dependent: Relationship Proofs such as marriage
                    certificate, Photo, emails, stable relationship, video, etc)
                  </p>
                </li>
              </ul>
            </li>
            <div className="py-2"></div>
            <li>
              <h6 className="fw-bold">Visa Approved(If)</h6>
              <ul>
                <li>
                  <p>Arrange Accommodation</p>
                </li>
                <li>
                  <p>Our Services Fee Rs. 20000/- with 13% Vat</p>
                </li>
                <li>
                  <p>Pre Departure Information</p>
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
