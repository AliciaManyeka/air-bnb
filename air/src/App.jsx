import "./App.css";
// import Navbar from "./Components/Navbar/Navbar";
import Navbar from "./Componets/Navbar/Navbar"
// import "./assets/bootstrap/css/bootstrap.min.css";
// import Cards from "./cards/Card";
import Cards from "./Componets/Cards/Card";

import Image1 from "./assets/images/GroupHeader.png";

const App = () => {
  return (
    <div className="outer">
      <Navbar />
      <div className="imageContainer">
        <img className="bannerImage" src={Image1} alt="img" />
      </div>
      <div className="Text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
      <Cards />
    </div>
  );
};

export default App;
