import styled from "styled-components";

const Button_component = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  background-color: #a573ff;
  border: 2px solid #7a57d1;
  border-radius: 10px;
  padding: 5px 7px;
  width: 70px;
  cursor: pointer;

  /* @media screen and (min-width: 401px) and (max-width: 1000px) {
    font-size: 4vw;
    border-radius: 2.5vw;
    padding: 1.3 2vw;
    width: 19vw;
  }

  @media screen and (min-width: 1001px) {
    font-size: 40px;
    border-radius: 25px;
    padding: 13 20px;
    width: 190px;
  } */
`;

const Button = (props) => {
  //   console.log(props);
  return (
    <Button_component
      className={`button-component ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </Button_component>
  );
};

export default Button;
