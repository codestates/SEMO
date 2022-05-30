import styled from "styled-components";

const Button_component = styled.div``;

const Button = (props) => {
  console.log(props);
  return (
    <button
      className={`button-component ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
