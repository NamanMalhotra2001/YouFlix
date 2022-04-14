import NavBar from "Components/NavBar";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <NavBar />
      <div className="mainBodyContainer">
        <div className="mainBody">
          <div className="headings">
            <h1 className="mainHeading">
              Enjoy unlimted streaming anywhere, anytime
            </h1>
            <h4 className="subHeading">
              Easy cancellation. No strings attached.
            </h4>
          </div>
          <div className="getStartHolder">
            <button className="getStart" onClick={() => navigate("/signup")}>
              Get Started <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>
        <div className="watchEv">
          <div className="text">
            <h3 className="additional_main">Watch everywhere.</h3>
            <h2 className="additional_sub">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h2>
          </div>
          <div className="image">sample text</div>
        </div>
        <div className="prof">
          <div className="text">
            <h3 className="additional_main">Create profiles for kids.</h3>
            <p className="additional_sub">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
          <div className="image">sample text</div>
        </div>
        <div className="faq">
          <h1 className="faqTitle">Frequently Asked Questions</h1>
          <div className="dropDownMenu">
          <ul className="list">
            <li>What is Youflix?</li>
            <li>How much does Youflix cost</li>
            <li>Where can I watch?</li>
            <li>How do I cancel?</li>
            <li>What can I watch on YouFlix?</li>
            <li>Is YouFlix good for kids?</li>
          </ul>
        </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default LandingPage;

const Wrapper = styled.div`
  .mainBodyContainer {
    padding-top: 150px;
    min-height: 300vh;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)),
      url("/images/bg.jpg");
    background-size: contain;
  }

  .subHeading {
    font: caption;
    font-size: 40px;
    text-align: center;
  }

  .mainHeading {
    padding-top: 120px;
    font-size: 70px;
    text-align: center;
  }

  .headings {
    color: aliceblue;
  }

  .getStartHolder {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .getStart {
    cursor: pointer;
    display: flex;
    font-size: xx-large;
    align-items: center;
    justify-content: center;
    height: 75px;
    width: 250px;
    border: none;
    outline: none;
    color: aliceblue;
    margin-top: 40px;
    margin-bottom: 240px;
    background-color: red;
  }

  .watchEv {
    padding-top: 200px;
    padding-bottom: 200px;
    display: flex;
    background-color: black;
    border-top: 10px darkgray solid;
    border-bottom: 5px darkgray solid;
  }

  .prof {
    padding-top: 200px;
    padding-bottom: 200px;
    display: flex;
    background-color: black;
    border-block: 5px darkgray solid;
  }

  .text {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: right;
    text-align: center;
    padding-left: 20%;
  }

  .image {
    flex: 1;
    display: flex;
    justify-content: left;
    color: white;
  }

  .additional_main {
    text-align: left;
    color: white;
    margin-bottom: 10px;
    font-size: 57px;
  }

  .additional_sub {
    color: white;
    display: flex;
    text-align: left;
    /* flex-direction: column; */
    font: caption;
    font-size: 30px;
  }

  .faq {
    padding-top: 200px;
    padding-bottom: 200px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background-color: black;
    border-top: 5px darkgray solid;
    border-bottom: 10px darkgray solid;
  }

  .dropDownMenu {
    display: flex;
    justify-content: center;
    background-color: white;
  }

  .faqTitle {
    color: white;
    font-size: 60px;
    text-align: center;
  }
`;
