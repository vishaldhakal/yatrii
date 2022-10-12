import Link from "./ActiveLink";

export default function Footer() {
  return (
    <>
      <footer className="footup position-relative">
        <div className="bg-mine">
          <div className="py-4"></div>
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
              <div className="col col-md-5">
                <img
                  src="/logo.svg"
                  alt=""
                  className="img-fluid smalll-logo-img"
                />
                <h4 className="fw-bold bb mt-4">
                  Yatri Int'l Education & Visa Services
                </h4>
                <p>
                  Yatri International Education and Visa Services Pvt. Ltd is
                  one of the merging pioneer institution established not only to
                  facilitate abroad education but also aspires to simplify
                  immigration matters
                </p>
              </div>
              <div className="col-md-1"></div>
              <div className="col">
                <h5 className="fw-bold">Study Destinations</h5>
                <div className="list">
                  <Link href="/study-in-australia">
                    <a className="mybot">Melbourne</a>
                  </Link>
                  <Link href="/study-in-australia">
                    <a className="mybot">Sydney</a>
                  </Link>
                  <Link href="/study-in-australia">
                    <a className="mybot">Brisbane</a>
                  </Link>
                  <Link href="/study-in-japan">
                    <a className="mybot">Tokyo</a>
                  </Link>
                  <Link href="/study-in-japan">
                    <a className="mybot">Osaka</a>
                  </Link>
                  <Link href="/study-in-uk">
                    <a className="mybot">London</a>
                  </Link>
                  <Link href="/study-in-usa">
                    <a className="mybot">Texas</a>
                  </Link>
                </div>
              </div>
              <div className="col">
                <h5 className="fw-bold">Useful Links</h5>
                <div className="list">
                  <Link href="/about-yatri">
                    <a className="mybot">About Yatri</a>
                  </Link>
                  <Link href="/contact-yatri">
                    <a className="mybot">Contact us</a>
                  </Link>
                  <Link href="/ielts">
                    <a className="mybot">IELTS</a>
                  </Link>
                  <Link href="/pte">
                    <a className="mybot">PTE</a>
                  </Link>
                  <Link href="/japanese">
                    <a className="mybot">Japanese</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="py-3">
            <div className="row row-cols-1 row-cols-sm-3 pt-5 mx-0">
              <div className="col-sm-4"></div>
              <div className="col-sm-4">
                <div className="row row-cols-7">
                  <div className="col"></div>
                  <div className="col"></div>
                  <div className="col">
                    <a
                      href="https://ms-my.facebook.com/watch/yatrieducation/"
                      className=" text-center"
                      target="_blank"
                    >
                      <img
                        loading="lazy"
                        src="/facebook.svg"
                        alt="Facebook Icon which links to rentbaba facebook page"
                        className="img-fluid social-icon"
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a href="#" className=" text-center" target="_blank">
                      <img
                        loading="lazy"
                        src="/instagram.svg"
                        alt="Instagram Icon which links to rentbaba instagram page"
                        className="img-fluid social-icon"
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a href="#" className=" text-center">
                      <img
                        loading="lazy"
                        src="/linkedin.svg"
                        alt="Linked Icon which links to rentbaba linkedin page"
                        className="img-fluid social-icon"
                      />
                    </a>
                  </div>
                  <div className="col"></div>
                  <div className="col"></div>
                </div>
              </div>
              <div className="col-sm-4"></div>
            </div>
            <div class="row text-center mt-4 px-3 mx-0">
              <p>©2022 Yatri International Education and Visa Services</p>
            </div>
          </div>
          <div className="py-4"></div>
        </div>
      </footer>
    </>
  );
}
