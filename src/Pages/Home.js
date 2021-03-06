import NavBar from "./../Components/NavBar";
import PageIntro from "./../Components/PageIntro";
import RepoListContainer from "./../Components/RepoListContainer";
import Footer from "./../Components/Footer";

function Home() {
  return (
    <div>
      <NavBar />
      <PageIntro
        title="Top Starred Repositories"
        subtitle="Let's Explore &#128515;"
      />
      <RepoListContainer />
      <Footer />
    </div>
  );
}

export default Home;
