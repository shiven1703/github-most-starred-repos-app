import './Repo.css';

function Repo() {
    return (
        <div className="card repo-card">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <a href="/#"><span className="repo-title"> &#128213; liamg / traitor<br/></span></a>  
                        <span className="repo-description ">Automatic Linux privesc via exploitation of low-hanging fruit e.g. gtfobins</span>
                    </div>
                    <div className="col-md-6 text-right">
                        <span>By Liam Galvin</span><br/>
                        <span>&#11088; 1,154</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Repo;