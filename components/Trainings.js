import Link from "./ActiveLink";
export default function Trainings(props) {
  return (
    <>
      <div className="container">
        <h2 className="fw-bb">Trainings we provide</h2>
        <div>
          <div className="row row-cols-1 row-cols-md-3 mt-2 gy-4">
            <div className="col-md-4 d-flex align-items-strech">
              <Link href="/ielts">
                <a className="mylinks card">
                  <div className="row row-cols-2 align-items-center py-2">
                    <div className="col-3">
                      <div className="bg-white rounded-circle">
                        <img
                          src="/IELTS.png"
                          alt="aaa"
                          className="p-3 img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="fw-bold">IELTS Training Class</h5>
                        <img
                          src="/arrow.svg"
                          alt="arrow"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-md-4 d-flex align-items-strech">
              <Link href="/pte">
                <a className="mylinks card">
                  <div className="row row-cols-2 align-items-center  py-2">
                    <div className="col-3">
                      <div className="bg-white rounded-circle">
                        <img
                          src="/PTE.png"
                          alt="aaa"
                          className="p-3 img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="fw-bold">PTE Training Class</h5>
                        <img
                          src="/arrow.svg"
                          alt="arrow"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-md-4 d-flex align-items-strech">
              <Link href="/japanese">
                <a className="mylinks card">
                  <div className="row row-cols-2 align-items-center py-2">
                    <div className="col-3">
                      <div className="bg-white rounded-circle">
                        <img
                          src="/Japanese.png"
                          alt="aaa"
                          className="p-3 img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="fw-bold">Japanese Language</h5>
                        <img
                          src="/arrow.svg"
                          alt="arrow"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
