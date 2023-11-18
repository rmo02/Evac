import { styled } from "styled-components";

export const Form = styled.div`
  display: flex;
  width: 8.75rem;
  height: 3.5625rem;
  min-width: 8.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme["text-color"]};
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 8px;
  font-family: "Lato", sans-serif;
`;

