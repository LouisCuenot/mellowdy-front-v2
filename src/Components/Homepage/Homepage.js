
import './Homepage.css'
import imghomepage from "../../img/Homepage/img_Homepage.png";

function Homepage() {
  return (
    <div className="homepagegrid">
      <div  className="maintext">
          <h2>Find the <span>playlist</span><br/>that suits you.</h2>
          <h3>Let the music take you away</h3>
          <a href="https://mellow-dy.tinker.ovh/oauth" className="button">Get started</a>
      </div>
      <img src={imghomepage} alt="A women listening music" className="imghomepage"/>

    </div>
  );
}

export default Homepage;