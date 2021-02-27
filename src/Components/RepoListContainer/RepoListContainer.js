import "./RepoListContainer.css";
import Repo from "../Repo/Repo";
import { useEffect, useState } from "react";

async function FetchRepoList() {
  const token = ""; //token
  const url = `https://api.github.com/search/repositories?q=stars:500..*&o=desc&Authorization=token ${token}`;

  let response = await fetch(url);
  let result = await response.json();
  return result.items.slice(0, 10);
}

function RepoListContainer() {
  const [repoData, setRepoData] = useState([]);

  useEffect(() => {
    (async function FetchData() {
      let repoList = await FetchRepoList();
      setRepoData(repoList);
    })();
  }, []);

  return (
    // header
    <div className="container">
      <div className="card repo-list-heading-card">
        <div className="card-body"></div>
      </div>

      {repoData.map((repo) => {
        return <Repo data={repo} />;
      })}
    </div>
  );
}

export default RepoListContainer;
