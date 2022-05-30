import styled from "styled-components";

const Button_component = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8px;
  background-color: #a573ff;
  border: 2px solid #7a57d1;
  border-radius: 7px;
  padding: 5px 7px;
  height: 20px;
  width: 44px;
  cursor: pointer;
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
