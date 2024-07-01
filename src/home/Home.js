import Newsletter from "../components/Newsletter/Newsletter";
import "./home.css";
import ceo from "../images/ceo.png";

import Showcase from "../components/showCase/Showcase";

const Home = () => {
  const handleclick = () => {
    alert("hi there");
  };

  const handleContact = () => {
    alert("Call this number: 09023638156 for further negotiation");
  };

  return (
    <>
      <section className="homeSection">
        <div className="homeDiv">
          <div className="img">
            <img alt="profile" src={ceo} />
          </div>
          <div className="homeText">
            <p>Hello, I'm </p>
            <h1>Hephzibah Akpamida</h1>
            <p className="pTag">Frontend Developer</p>
            <div className="homeBtn">
              <button onClick={handleclick}>Resume</button>
              <button onClick={handleContact}>Contacts</button>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
      <Showcase />
    </>
  );
};

// function Home() {

// }

export default Home;
