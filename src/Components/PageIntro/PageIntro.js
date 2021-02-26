import "./PageIntro.css";

function PageIntro(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <center>
          <h3 className="display-6">{props.title}</h3>
          <p className="lead">{props.subtitle}</p>
        </center>
      </div>
    </div>
  );
}

export default PageIntro;
