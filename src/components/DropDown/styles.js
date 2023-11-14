import { styled } from "styled-components";
import setapng from "../../assets/seta.png";

export const Select = styled.select`
  background-color: ${(props) => props.theme["cardAdd"]};
  height: 1.875rem;
  width: 8.875rem;
  border-width: 0px;
  font-family: "Lato", sans-serif;
  padding: 0.375rem 0.625rem;

  appearance: none;
  outline: none;
  background-image: url(${setapng});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 14px;

  font-size:1rem;

`;