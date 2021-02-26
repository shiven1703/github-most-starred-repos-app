import NavBar from "./../Components/NavBar";
import PageIntro from "./../Components/PageIntro";
import RepoListContainer from "./../Components/RepoListContainer";

function Home() {
  return (
    <div>
      <NavBar />
      <PageIntro
        title="Top Starred Repositories"
        subtitle="Let's Explore &#128515;"
      />
      <RepoListContainer />
    </div>
  );
}

export default Home;
