import BackgroundThree from './Subcomponents/BackgroundThree'
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
      
      <BackgroundThree className='sossur'/>
    </div>
  );
}

export default Homepage;