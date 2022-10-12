import Link from "./ActiveLink";

export default function Navbar(props) {
  return (
    <>
      <div
        className={props.borderrr + " sticky-top topp bg-white py-1 shadowww"}
      >
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid px-3 px-lg-4 d-flex justify-content-between">
            <Link href="/" activeSubClassName=" " activeClassName=" ">
              <a className="navbar-brand me-0 me-sm-4">
                <div className="d-inline fs-3 fw-bold">
                  <img
                    src="/logo.svg"
                    alt="Yatri Logo"
                    className="img-fluid small-logo-img"
                  />
                </div>
              </a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img
                loading="lazy"
                src="https://img.icons8.com/material-two-tone/24/000000/menu.png"
                width="24px"
                height="24px"
                alt="Navbar toggler icon"
              />
            </button>
            <div
              className="row row-cols-2 collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="col-12 d-flex justify-content-start justify-content-md-end">
                <ul className="navbar-nav mb-2 mb-lg-0 align-items-start align-items-md-center mt-3 mt-md-0">
                  <li className="nav-item p-1">
                    <Link href="/">
                      <a className="nav-link active">Home</a>
                    </Link>
                  </li>
                  <li className="nav-item p-1">
                    <Link href="/about-yatri">
                      <a className="nav-link active">About</a>
                    </Link>
                  </li>
                  <li className="nav-item p-1">
                    <div className="dropdown">
                      <button className="btn btn-filter select-options dropbtn navbd">
                        Trainings
                        <span className="mx-1"></span>
                        <svg
                          className="svg"
                          viewBox="0 0 35 35"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z"
                            fill="#000000"
                          ></path>
                        </svg>
                      </button>
                      <div className="dropdown-content dcx">
                        <div className="row row-cols-1 dropdown-content-in shadm p-0 py-2 mt-3">
                          <div className="col haha2 py-1">
                            <Link href="/ielts">
                              <a className="nav-link active">IELTS</a>
                            </Link>
                          </div>
                          <div className="col haha2 py-1">
                            <Link href="/pte">
                              <a className="nav-link active">PTE</a>
                            </Link>
                          </div>
                          <div className="col haha2 py-1">
                            <Link href="/japanese">
                              <a className="nav-link active">Japaness</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item p-1">
                    <div className="dropdown active">
                      <button className="btn btn-filter select-options dropbtn navbd shadow-lg border-0">
                        Study Abroad
                        <span className="mx-1"></span>
                        <svg
                          className="svg"
                          viewBox="0 0 35 35"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z"
                            fill="#000000"
                          ></path>
                        </svg>
                      </button>
                      <div className="dropdown-content dcx">
                        <div className="row row-cols-1  w-100 dropdown-content-in shadm p-0 py-2 mt-3">
                          <div className="col haha2 py-1">
                            <Link href="/study-in-australia">
                              <a className="nav-link active">Australia</a>
                            </Link>
                          </div>
                          <div className="col haha2 py-1">
                            <Link href="/study-in-japan">
                              <a className="nav-link active">Japan</a>
                            </Link>
                          </div>
                          <div className="col haha2 py-1">
                            <Link href="/study-in-uk">
                              <a className="nav-link active">UK</a>
                            </Link>
                          </div>
                          <div className="col haha2 py-1">
                            <Link href="/study-in-usa">
                              <a className="nav-link active">USA</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item p-1">
                    <Link href="/contact-yatri">
                      <a className="nav-link active">Contact</a>
                    </Link>
                  </li>
                  <li className="nav-item pe-mine p-1 ps-3">
                    <div className="position-relative">
                      <div className="hahabef">
                        <a
                          href="tel:+977 47590485"
                          className="d-flex align-items-center"
                        >
                          <img
                            src="/call.png"
                            alt="Call Button"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
