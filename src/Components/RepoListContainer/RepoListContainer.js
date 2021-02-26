import "./RepoListContainer.css";
import Repo from "../Repo/Repo";

function GetRepoList() {
  const repoList = [<Repo />, <Repo />, <Repo />];
  return repoList;
}

function RepoListContainer() {
  return (
    // header
    <div className="container">
      <div className="card repo-list-heading-card">
        <div className="card-body"></div>
      </div>
      {GetRepoList()}
    </div>
  );
}

export default RepoListContainer;
