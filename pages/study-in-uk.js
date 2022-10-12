import Head from "next/head";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import TopSection from "../components/TopSection";
import StudyDestinations from "../components/StudyDestination";

export default function UK() {
  return (
    <>
      <Navbar></Navbar>
      <TopSection
        title="Study In UK with Yatri Int'l Education"
        desc="Let us help you get your Abroad Study Visa to United Kingdom"
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
            The United Kingdom is now the second most popular destination for
            international students, behind the US. Four of the top ten
            universities on the planet are in the UK as per QS World University
            Ranking. The field of education is the most attractive for
            international students, with hundreds of universities providing a
            top-notch education. Thousands of Nepalese aspire towards UK
            education each year. Although the tuition fees and living expenses
            are exponentially higher than that of Nepal, education is well worth
            the bucks if you can invest. Its multicultural environment will
            allow you to build relationships with people from around the world
            and learn in a global community.
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
            <h5 className="fw-bb p-3">Major attractions of UK</h5>
          </div>
          <ul class="my-4">
            <li>
              <p>
                World-class education that is internationally valued and
                recognized.
              </p>
            </li>
            <li>
              <p>Four of the top six universities in the world are in the UK</p>
            </li>
            <li>
              <p>Research, creativity, and innovation</p>
            </li>
            <li>
              <p>
                Work permit for up to 20 hours a week during term time and
                full-time during holidays
              </p>
            </li>
            <li>
              <p>Flexible Curriculum</p>
            </li>
            <li>
              <p>London is the world’s largest financial center</p>
            </li>
          </ul>

          <div className="bg-yell">
            <h5 className="fw-bb p-3">Types of Programs Offered</h5>
          </div>
          <ul class="my-4">
            <li>
              <p>Undergraduate Degree</p>
            </li>
            <li>
              <p>Graduate Degree</p>
            </li>
            <li>
              <p>Doctoral Degree</p>
            </li>
          </ul>
          <br />
          <br />
          <div className="bg-yell">
            <h5 className="fw-bb p-3">Cost and Scholarships</h5>
          </div>
          <p className="my-4">
            International Undergraduate and Postgraduate tuition fees fluctuate
            between £10,000 to £35,000. When combined with the average living
            costs in the UK. The average cost of studying in the Uk comes to
            around £22,000. It is important to note that UK universities are
            really competitive and generous scholarships are extremely rare.
            Although International students are permitted to work up to 20 hours
            per week during the school term and full-time during breaks, the
            earnings are barely enough to cover personal expenses. You should be
            prepared to bear the costs that come with UK education.
          </p>
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
