import styled from "styled-components";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import NavBar from "Components/NavBar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
            <h3 className="watchEv_main">Watch everywhere.</h3>
            <h4 className="watchEv_sub">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h4>
          </div>
          <div className="image">potty</div>
        </div>
        <div className="prof">
          <div className="text">
            <h3 className="prof_main">Create profiles for kids.</h3>
            <h4 className="prof_sub">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </h4>
          </div>
          <div className="image">potty</div>
        </div>
        <div className="faq">
          <h1 className="faqTitle">Frequently Asked Questions</h1>
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
    border-block: 5px gray solid;
  }

  .prof {
    padding-top: 200px;
    padding-bottom: 200px;
    display: flex;
    background-color: black;
    border-block: 5px gray solid;
  }

  .text {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: right;
    text-align: center;
  }

  .image {
    flex: 1;
    display: flex;
    justify-content: left;
  }

  .watchEv_main {
    text-align: left;
    padding-left: 85px;
    color: white;
    padding-bottom: 35px;
    font-size: 50px;
  }

  .watchEv_sub {
    color: white;
    font-size: 40px;
    text-align: right;
	font: caption;
  }

  .prof_main {
    text-align: left;
    padding-left: 85px;
    color: white;
    padding-bottom: 35px;
    font-size: 50px;
  }

  .prof_sub {
    color: white;
    font-size: 50px;
    text-align: right;
    font: caption;
  }

  .faq {
    padding-top: 200px;
    padding-bottom: 200px;
    display: flex;
    background-color: black;
    border-block: 5px gray solid;
  }

  .faqTitle {
	  color: white;
	  font-size: 60px;
  }
`;
