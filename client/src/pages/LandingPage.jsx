import NavBar from "Components/NavBar";
import { MdOutlineArrowForwardIos, MdExpandMore } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

function LandingPage() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
          <div className="accordion">
            <Accordion
              className="accordionTab"
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              // sx={{ backgroundColor: "darkgrey" }}
            >
              <AccordionSummary
                expandIcon={<MdExpandMore />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography
                  className="tabText"
                  sx={{ color: "white", width: "33%", flexShrink: 0 }}
                >
                  What is Youflix?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="tabDetails">
                  Youflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries and more
                  – on thousands of internet-connected devices. You can watch as
                  much as you want, whenever you want, without a single ad – all
                  for one low monthly price. There's always something new to
                  discover, and new TV shows and movies are added every week!
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="accordionTab"
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<MdExpandMore />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography
                  className="tabText"
                  sx={{ width: "33%", flexShrink: 0 }}
                >
                  How much does Youflix cost?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="tabDetails">
                  Watch Youflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from 1 million zeni to 1 million 1 zeni a month. No extra
                  costs, no contracts.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="accordionTab"
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<MdExpandMore />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography
                  className="tabText"
                  sx={{ width: "33%", flexShrink: 0 }}
                >
                  Where can I watch?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="tabDetails">
                  Watch anywhere, anytime. Sign in with your Youflix account to
                  watch instantly on the web at youflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Youflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles. You can also
                  download your favourite shows with the iOS, Android, or
                  Windows 10 app. Use downloads to watch while you're on the go
                  and without an internet connection. Take Youflix with you
                  anywhere.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="accordionTab"
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<MdExpandMore />}
                aria-controls="panel4bh-content"
                id="panel5bh-header"
              >
                <Typography
                  className="tabText"
                  sx={{ width: "53%", flexShrink: 0 }}
                >
                  How do I cancel?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="tabDetails">
                  You are subscribed until you die. Then after you die we will
                  sell your data and your soul to Satan. Good day.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="accordionTab"
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={<MdExpandMore />}
                aria-controls="panel5bh-content"
                id="panel4bh-header"
              >
                <Typography
                  className="tabText"
                  sx={{ width: "53%", flexShrink: 0 }}
                >
                  What can I watch on YouFlix?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="tabDetails">
                  All the latest episodes of failure management.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="accordionTab"
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                expandIcon={<MdExpandMore />}
                aria-controls="panel6bh-content"
                id="panel6bh-header"
              >
                <Typography
                  className="tabText"
                  sx={{ width: "33%", flexShrink: 0 }}
                >
                  Is YouFlix good for kids?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="tabDetails">
                  NO. Lots of adult content. But they'll watch anyways so don't
                  bother.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <button className="getStart" onClick={() => navigate("/signup")}>
            Get Started <MdOutlineArrowForwardIos />
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default LandingPage;

const Wrapper = styled.div`
  .mainBodyContainer {
    /* padding-top: 150px; */
    /* min-height: 300vh; */
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)),
      url("/images/bg.jpg");
    background-size: contain;
  }

  .mainBody {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 90px);
  }

  .subHeading {
    font: caption;
    font-size: 40px;
    text-align: center;
  }

  .mainHeading {
    /* padding-top: 120px; */
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
    /* margin-bottom: 240px; */
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
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background-color: black;
    border-top: 5px darkgray solid;
    border-bottom: 10px darkgray solid;
  }

  .accordion {
    z-index: 0;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    width: 950px;
    justify-content: center;
    background-color: black;
  }

  .accordionTab {
    background-color: #343333;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .tabText {
    color: white;
    font: caption;
    font-size: 25px;
    width: 53%;
  }

  .tabDetails {
    color: white;
    font: caption;
    font-size: 25px;
    width: 95%;
  }

  .faqTitle {
    color: white;
    font-size: 60px;
    text-align: center;
  }
`;
