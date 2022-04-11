import styled from "styled-components";

function LandingPage() {
  return (
    <Wrapper>
      <div className="header">
        <h1 className="appName">YouFlix</h1>
        <button className="signIn">Sign-In</button>
      </div>
      <div className="mainBodyContainer">
        <div className="mainBody">
          <div className="headings">
            <h1 className="mainHeading">
              Enjoy unlimted streaming anywhere, anytime
            </h1>
            <h4 className="subHeading">
              Easy cancellation. No strings attached.
            </h4>
            <div className="getStartHolder">
              <button className="getStart">Get Started</button>
            </div>
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
    text-align: center;
  }

  .header {
    background-color: white;
    height: 90px;
  }

  .mainHeading {
    text-align: center;
  }

  .headings {
    color: aliceblue;
  }

  .signIn {
	align-items: center;
	justify-content: center;
    height: 35px;
    width: 100px;
    color: aliceblue;
    background-color: red;
    border-radius: 3px;
    display: flex;
    position: absolute;
    top: 20px;
    right: 10px;
    border: none;
    outline: none;
  }

  .getStartHolder {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .getStart {
    border: none;
    outline: none;
    color: aliceblue;
    margin-top: 40px;
    background-color: red;
  }
`;
