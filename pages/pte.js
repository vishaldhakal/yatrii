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
      <Head>
        <title>
          Yatri provide PTE classes for students applying to Australia
        </title>
        <meta
          name="Description"
          content="We have been providing excellent preparation courses for the PTE exam ever since the establishment of our institution. Our well-qualified and experienced instructors regularly facilitate students who wish to prepare for the PTE exam in pragmatic and methodological ways."
        ></meta>
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="og:website" />
        <meta
          property="og:title"
          content="Yatri provide PTE classes for students applying to Australia"
        />
        <meta
          property="og:description"
          content="We have been providing excellent preparation courses for the PTE exam ever since the establishment of our institution. Our well-qualified and experienced instructors regularly facilitate students who wish to prepare for the PTE exam in pragmatic and methodological ways."
        />
        <meta
          property="og:site_name"
          content="Yatri International Education and Visa Services"
        />
      </Head>
      <Navbar></Navbar>
      <TopSection
        title="Study PTE With Yatri Education"
        desc="We provide PTE classes for students applying to Australia, UK and USA"
      ></TopSection>
      <div className="container">
        <h1 className="fw-bb bbb my-4">PTE Training</h1>
        <div>
          <p>
            Pearson Test of English (PTE) Academic exam is an English language
            proficiency test designed to assess the language competence of
            non-native English speakers. It is a computer-based exam accepted by
            institutions all over the world. It assesses all skills of the
            English language: Speaking, Writing, Reading, and Listening.
            Although PTE is an internationally accepted test, it is especially
            valued by Australian colleges and universities. The PTE exam has two
            categories:
          </p>
          <ol>
            <li className="my-5 fw-bold">
              <p>PTE Academic :</p> This is the most common test for students
              who are taking the PTE
            </li>
            <li className="my-5 fw-bold">
              <p>PTE Home :</p> This is the test for students who are taking the
              PTE for the first time
            </li>
          </ol>
          <p></p>
          <br />
          <br />
        </div>
      </div>
      <div>
        <img src="/pte.jpg" alt="" className="img-fluid fw-img" />
      </div>
      <div className="container mt-4">
        <div>
          <p>
            The test evaluates the English language proficiency over 4 base
            areas: Listening, Reading, Writing, and Speaking.
          </p>
          <p></p>
          <ol>
            <li className="my-5 fw-bold">
              Listening:
              <p className="fw-normal">
                {" "}
                About 45-57 minutes is allocated for this section during the
                test. This section includes audio and video clips. The questions
                will usually ask you to summarize spoken text, multiple choice
                based on recording, fill in the blanks in a transcript based on
                recording, and write from dictation.
              </p>
            </li>
            <li className="my-5 fw-bold">
              Reading:
              <p className="fw-normal">
                The time allocated for this part is 32-41 minutes during the
                test. This section will consist of five different question
                types, including fill-in-the-blanks, multiple choice, and
                reorder paragraphs. The main purpose of the reading part of the
                PTE is to test your reading comprehension skills.
              </p>
            </li>
            <li className="my-5 fw-bold">
              Speaking and Writing:
              <p className="fw-normal">
                About 77-93 minutes is allocated for this part of the test. This
                section tests your speaking and writing skills and uses English
                you might later use in an academic environment. It includes
                seven different question types, such as reading aloud,
                describing the image, re-tell the lecture, and repeating
                sentences.
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
