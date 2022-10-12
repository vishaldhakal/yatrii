import Head from "next/head";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Trainings from "../components/Trainings";
import TopSection from "../components/TopSection";

export default function Japanese() {
  return (
    <>
      <Navbar></Navbar>
      <TopSection
        title="Study Japanese Language With Yatri Education"
        desc="We provide Japanese classes for students applying to Japan"
      ></TopSection>
      <div className="container">
        <h1 className="fw-bb bbb my-4">Japanese Language Classes</h1>
        <div>
          <p className="fs-5 lh-5 ">
            Japan is a land of technologies and opportunities. Although Japan is
            popular among professionals and people looking for job
            opportunities, the education sector is not far behind. It has been
            growing as a popular study abroad destination among Nepalese
            students. The official education in japan is conducted in the
            Japanese language, so one of the very first steps toward studying in
            Japan is learning the language.
            <br />
            <br />
            Our qualified language teaching staff team works relentlessly to
            make this process as easy and smooth a transition for you as
            possible. Alongside the lectures, we will provide tons of resources
            and study materials for all levels of speakers. The objective of our
            language course is to offer a preparatory education in the Japanese
            language, Japanese society and culture, and other necessary subjects
            for international students enrolling in Japanese colleges and
            universities.
          </p>
          <br />
        </div>
      </div>
      <div>
        <img src="/japaness.webp" alt="" className="img-fluid fw-img" />
      </div>
      <div className="container mt-4">
        <div>
          <div className="bg-mine p-3 rounded-mine">
            <h3 className="fw-bb fs-4">
              Japanese Language Proficiency Test-JLPT
            </h3>
          </div>
          <br />
          <ol>
            <li className="fw-bold fs-5 my-3">
              Level N1:
              <p className="fw-normal mb-3">
                Highly Proficient in Japanese used in a diversity of conditions
              </p>
            </li>
            <li className="fw-bold fs-5 my-3">
              Level N2:
              <p className="fw-normal mb-3">
                Competency to comprehend day-to-day used Japanese entirely
              </p>
            </li>
            <li className="fw-bold fs-5 my-3">
              Level N3:
              <p className="fw-normal mb-3">
                Competency to comprehend day-to-day used Japanese to an extent
              </p>
            </li>
            <li className="fw-bold fs-5 my-3">
              Level N4:
              <p className="fw-normal mb-3">
                Ability to comprehend basic Japanese
              </p>
            </li>
            <li className="fw-bold fs-5 my-3">
              Level N5:
              <p className="fw-normal mb-3">
                Competency to comprehend rudimentary Japanese
              </p>
            </li>
          </ol>
        </div>
      </div>
      <div className="py-4"></div>
      <div className="py-5">
        <Trainings></Trainings>
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
      <div className="py-5"></div>
      <Footer></Footer>
    </>
  );
}
