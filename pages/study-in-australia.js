import Head from "next/head";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import TopSection from "../components/TopSection";
import StudyDestinations from "../components/StudyDestination";

export default function Australia() {
  return (
    <>
      <Navbar></Navbar>
      <TopSection
        title="Study In Australia with Yatri Int'l Education"
        desc="Let us help you get your Abroad Study Visa to Australia"
      ></TopSection>
      <div className="container mt-5">
        <div className="row row-cols-2 row-cols-md-4 g-5">
          <div className="col">
            <img src="/mel.webp" alt="" className="img-fluid rounded-mine" />
            <h5 className="text-center fw-bb bb2 mt-2">Melbourne</h5>
          </div>
          <div className="col">
            <img src="/syd.webp" alt="" className="img-fluid rounded-mine" />
            <h5 className="text-center fw-bb bb2 mt-2">Sydney</h5>
          </div>
          <div className="col">
            <img src="/bris.jpg" alt="" className="img-fluid rounded-mine" />
            <h5 className="text-center fw-bb bb2 mt-2">Brisbane</h5>
          </div>
          <div className="col">
            <img src="/dar.jpg" alt="" className="img-fluid rounded-mine" />
            <h5 className="text-center fw-bb bb2 mt-2">Darwin</h5>
          </div>
        </div>
      </div>
      <div className="container">
        <br />
        <br />
        <div>
          <p className="fs-5 lh-5 ">
            Geographically, Australia is the sixth largest country in the world,
            but it is one of the least densely populated countries. Australia
            represents a diverse, multicultural environment for students to get
            in, complementing exceptional educational and job prospects.
            Alongside exceptional opportunities, the hospitality and scenic
            beauty of Australia are worth admiring. From the ocean and beaches
            to beautiful mountains, there is something for everyone.
            <br />
            <br />
            Australia has become one of the most sought-after study destinations
            for international students seeking to avail themselves of
            exceptional educational opportunities. There are over 22000 courses
            and 1100 institutions that span over more than 29 study areas like
            language, nursing, medicine, engineering, art, business, etc. Alured
            by the superior quality of education, standard lifestyle, vibrant
            culture, and provision of work-study for international students,
            students from different parts of the world enter the country in
            large numbers every year. Nepal is no exception; Australia is one of
            the most preferred abroad study destinations for Nepalese students,
            alongside the USA, UK, and Canada.
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
            <h5 className="fw-bb p-3">Some Facts about Australia</h5>
          </div>
          <ul className="my-4">
            <li>
              <p>
                Australia is the third most popular destination for
                international students
              </p>
            </li>
            <li>
              <p>Australia is named the fourth happiest country </p>
            </li>
            <li>
              <p>
                The average annual government investment in international
                scholarships is $200 million{" "}
              </p>
            </li>
            <li>
              <p>Approximately, one in four Australians are born overseas </p>
            </li>
            <li>
              <p>
                Australia is ranked 9th in the university system ranking in the
                world{" "}
              </p>
            </li>
            <li>
              <p>Over 260+ languages are spoken in Australia </p>
            </li>
            <li>
              <p>
                Australia is home to 5 of the top 40 cities with the best urban
                infrastructure{" "}
              </p>
            </li>
          </ul>
          <div className="bg-yell">
            <h5 className="fw-bb p-3">
              Cost to Study in Australia as an International Student
            </h5>
          </div>
          <table
            className="table table-responsive mt-5"
            aria-label="simple table"
          >
            <thead>
              <tr>
                <th scope="col">S.No.</th>
                <th scope="col">Study Expenses</th>
                <th scope="col">Average Fees in AUD</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>English language Courses</td>
                <td>AUD 350 to 500 weekly</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Undergraduate Degree</td>
                <td>AUD 15,000 - 40,000 annually</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Postgraduate Degree</td>
                <td>AUD 20,000 - 50,000 annually</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Doctoral Degree</td>
                <td>AUD 20,000 - 60,000 annually</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Vocational Education and Training</td>
                <td>AUD 4000 - 25,000 annually</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <table className="table table-responsive" aria-label="simple table">
            <thead>
              <tr>
                <th scope="col">S.No.</th>
                <th scope="col">Living Costs</th>
                <th scope="col">Approx.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Accomodation</td>
                <td>AUD 150 - 500 per week</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Food and Utilities</td>
                <td>AUD 165 - 360 per week</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Misselenious</td>
                <td>AUD 100 - 235 per week</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <div className="bg-yell">
            <h5 className="fw-bb p-3">Why study in Australia?</h5>
          </div>
          <p className="py-3">
            There are many reasons why students choose Australia as their study
            abroad destination. Here are a few of them you might want to
            consider:
          </p>
          <ol>
            <li>
              <p>World Class Education</p>
            </li>
            <li>
              <p>Globally accepted international degree</p>
            </li>
            <li>
              <p>Quality of life </p>
            </li>
            <li>
              <p>Safe and accommodating society</p>
            </li>
            <li>
              <p>Range of course choices</p>
            </li>
            <li>
              <p>40 hours work per fortnight allowed</p>
            </li>
            <li>
              <p>Flexible visa policy</p>
            </li>
            <li>
              <p>Post-study work visa</p>
            </li>
            <li>
              <p>Similar climatic conditions to Nepal</p>
            </li>
            <li>
              <p>Post-education opportunities</p>
            </li>
          </ol>
          <br />
          <br />
          <div className="bg-yell">
            <h5 className="fw-bb p-3">Documents Checklist</h5>
          </div>
          <p className="my-4">
            The following documents are required for the student visa
            application:
          </p>
          <ol>
            <li>
              <h6 className="fw-bold">Academic Documents</h6>
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
                  <p>IELTS/PTE certificate</p>
                </li>
                <li>
                  <p>Photocopy of passport</p>
                </li>
                <li>
                  <p>Identification Card Copies</p>
                </li>
                <li>
                  <p>Criminal record check results</p>
                </li>
                <li>
                  <p>Statement of Purpose (SOP)</p>
                </li>
                <li>
                  <p>Visa application form</p>
                </li>
              </ul>
            </li>
            <li>
              <h6 className="fw-bold">Financial Documents</h6>
              <ul>
                <li>
                  <p>Proof of funds(Bank Statement or Loan Letter)</p>
                </li>
                <li>
                  <p>Proof of cash deposits</p>
                </li>
                <li>
                  <p>
                    Income verification and income source documents of the
                    sponsor
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <h6 className="fw-bold">Other Documents</h6>
              <ul>
                <li>
                  <p>Medical reports and x-ray examinations</p>
                </li>
                <li>
                  <p>
                    Proof of Overseas Student Health Cover for the total
                    duration of the visa
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
