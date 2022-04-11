import styled from "styled-components";

function NavBar() {
  return (
    <Wrapper>
      <h1 className="appName">YouFlix</h1>
      <button className="signIn">Sign-In</button>
    </Wrapper>
  );
}
export default NavBar;

const Wrapper = styled.div`
  display: flex;
  background-color: white;
  height: 90px;
  justify-content: space-between;
	align-items: center;
	padding-inline: 10px;

  .appName {
		user-select: none;
    font-size: 45px;
    color: #ff0000e6;
  }

  .signIn {
    cursor: pointer;
    font-size: large;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 100px;
    color: aliceblue;
    background-color: red;
    border-radius: 3px;
    display: flex;
    top: 20px;
    right: 10px;
    border: none;
    outline: none;
  }
`;
