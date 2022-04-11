import styled from "styled-components";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import NavBar from "Components/NavBar";
import { Link } from "react-router-dom";

function LandingPage() {
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
            <button className="getStart">
              {/* <Link to="/signup"></Link> */}
              Get Started <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>
        <div className="watchEv">
          <h3 className="watchEv_main">Watch everywhere</h3>
          <h4 className="watchEv_sub">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h4>
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
    background-color: red;
  }

  .watchEv {
	  border-color: grey;
  }
`;
