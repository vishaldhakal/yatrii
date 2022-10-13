import Link from "./ActiveLink";

export default function StudyDestinations() {
  return (
    <>
      <div className="py-5">
        <div className="container">
          <h2 className="fw-bb">Study Destinations</h2>
          <div className="mt-4">
            <div className="row row-cols-2 row-cols-md-4 gy-5">
              <div className="col">
                <Link href="/study-in-australia">
                  <a>
                    <img
                      src="/aus.jpg"
                      alt=""
                      className="img-fluid rounded-mine"
                    />
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="fw-bb bb2 mt-2">Study in Australia</h5>
                      <img src="/arr.svg" alt="" className="img-fluid" />
                    </div>
                  </a>
                </Link>
              </div>
              <div className="col">
                <Link href="/study-in-japan">
                  <a>
                    <img
                      src="/japan.jpg"
                      alt=""
                      className="img-fluid rounded-mine"
                    />
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="fw-bb bb2 mt-2">Study in Japan</h5>
                      <img src="/arr.svg" alt="" className="img-fluid" />
                    </div>
                  </a>
                </Link>
              </div>
              <div className="col">
                <Link href="/study-in-uk">
                  <a>
                    <img
                      src="/uk.jpg"
                      alt=""
                      className="img-fluid rounded-mine"
                    />
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="fw-bb bb2 mt-2">Study in UK</h5>
                      <img src="/arr.svg" alt="" className="img-fluid" />
                    </div>
                  </a>
                </Link>
              </div>
              <div className="col">
                <Link href="/study-in-usa">
                  <a>
                    <img
                      src="/usa.jpg"
                      alt=""
                      className="img-fluid rounded-mine"
                    />
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="fw-bb bb2 mt-2">Study in USA</h5>
                      <img src="/arr.svg" alt="" className="img-fluid" />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
