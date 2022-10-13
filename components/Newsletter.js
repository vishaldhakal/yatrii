import Link from "./ActiveLink";

export default function Newsletter() {
  return (
    <>
      <div className="floating-newsletter container">
        <div className="p-4 p-md-5">
          <div className="row row-cols-1 row-cols-md-2 align-items-center">
            <div className="col col-md-8">
              <h3 className="fw-bold">Register Now to get updated Insights</h3>
              <p>
                Yatri Education would provide you with high quality study
                materials and news after you register!
              </p>
              <div className="row row-cols-1">
                <div className="col row row-cols-2">
                  <div className="col-8">
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      className="fields bg-white"
                    />
                  </div>
                  <button className="col-4 btn btn-success">Register</button>
                </div>
              </div>
            </div>
            <div className="col  col-md-4">
              <img
                src="/illustration_newsletter.svg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
