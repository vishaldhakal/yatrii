export default function TopSection(props) {
  return (
    <>
      <div className="bg-minee">
        <div className="py-2 py-md-5">
          <div className="container">
            <h2 className="fw-bb">{props.title}</h2>
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
