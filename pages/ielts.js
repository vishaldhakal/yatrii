import Head from "next/head";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Trainings from "../components/Trainings";
import TopSection from "../components/TopSection";

export default function Contact() {
  return (
    <>
      <Navbar></Navbar>
      <TopSection
        title="Study IELTS With Yatri Education"
        desc="We provide IELTS classes for students applying to Australia, UK and USA"
      ></TopSection>
      <div className="container">
        <h1 className="fw-bb bbb my-4">IELTS Training</h1>
        <div>
          <p className="fs-5 lh-5 ">
            ILETS is a platform that enables teachers to create and share
            interactive learning experiences that can be used by students to
            learn and improve.IELTS stands for International English Language
            Testing System. It is a standardized and most widely recognized
            English language assessment test for international education and
            global migration. It is an entry requirement for universities in
            Australia, the UK, New Zealand, and Ireland. The test evaluates the
            proficiency of the English Language over 4 base areas: Listening,
            Reading, Writing, and Speaking. Each skill is individually scored
            and a final overall score is calculated between 0 to 9, with 0 being
            the lowest and 9 representing an expert speaker.
          </p>
          <br />
        </div>
      </div>
      <div>
        <img src="/ielts.jpg" alt="" className="img-fluid fw-img" />
      </div>
      <div className="container mt-4">
        <div>
          <p className="fs-5 lh-5">
            We have been providing excellent preparation courses for the IELTS
            exam ever since the establishment of our institution. Our
            well-qualified and experienced instructors regularly facilitate
            students who wish to prepare for the IELTS exam in pragmatic and
            methodological ways.
          </p>
          <p className="fs-5 lh-5  fw-bold">
            The Test evaluates the English language proficiency on 4 basic
            parameters: Listening, Reading, Writing, and Speaking.
          </p>
          <p className="MuiTypography-root MuiTypography-body1 css-1ar830e"></p>
          <ol>
            <li className="my-5 fw-bold fs-4">
              Listening:
              <p className="fs-5 lh-5  fw-normal">
                The duration of this section during the test is 30 minutes. It
                includes four recorded monologues and conversations. The
                listening test will access your ability to comprehend the ideas,
                facts, attitudes, and opinions of the speaker.
              </p>
            </li>
            <li className="my-5 fs-4 fw-bold">
              Reading:
              <p className="fs-5 lh-5  fw-normal">
                {" "}
                The reading section of the IELTS test is 60 minutes long. It
                includes three long reading passages with the corresponding
                tasks. The passages range from descriptive and factual to
                discursive, and analytical including non-verbal material like
                diagrams, graphs, and illustrations texts.
              </p>
            </li>
            <li className="my-5 fs-4 fw-bold">
              Writing:
              <p className="fs-5 lh-5  fw-normal">
                {" "}
                This portion of the test is divided into two parts and takes 60
                minutes to complete. Task 1 will present a table, chart, graph,
                or diagram that you’ll have to describe in at least 150 words.
                For task 2, you’ll have to write a short essay of 200 words
                giving an opinion on some situation presented in the question.
              </p>
            </li>
            <li className="my-5 fs-4 fw-bold">
              Speaking:{" "}
              <p className="fs-5 lh-5  fw-normal">
                The speaking test of an IELTS exam is conducted in an interview
                format. A face-to-face interview will include the introduction
                part, talking about a specific topic, and a detailed discussion.
                The interview usually lasts for about 10 minutes. This section
                focuses on your fluency and conversational skills.
              </p>
            </li>
          </ol>
          <p></p>
        </div>
      </div>
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
