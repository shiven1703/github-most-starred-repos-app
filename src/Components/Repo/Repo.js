import "./Repo.css";

function Repo(props) {
  return (
    <div className="card repo-card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <a
              href={"https://github.com/" + props.data.full_name}
              target="_blank"
              rel="noreferrer"
            >
              <span className="repo-title">
                &#128213; {props.data.full_name}
                <br />
              </span>
            </a>
            <span className="repo-description ">{props.data.description}</span>
          </div>
          <div className="col-md-6 text-right">
            <span className="stars">
              &#11088; {props.data.stargazers_count}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Repo;
