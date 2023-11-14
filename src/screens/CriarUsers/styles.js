import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding-top: 7rem;
  flex-direction: column;
  align-items: center;
`;

export const Center = styled.div`
  display: flex;
  min-width: 36.25rem;
  max-width: 77.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme["text-color"]};
  font-family: "Lato", sans-serif;
  font-size: 18px;
  font-weight: 700;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  align-self: stretch;
`;

export const Card = styled.div`
display: flex;
min-width: 42.875rem;
max-width: 77.25rem;
padding: 1.5rem 2.25rem 3.75rem 2.25rem;
justify-content: space-between;
align-items: flex-start;
align-self: stretch;
border-radius: 0.5rem;
background-color: ${(props) => props.theme["white"]};
box-shadow: 0px 5px 40px -5px rgba(59, 130, 246, 0.50);
`;

export const Forms = styled.div`
display: flex;
max-width: 50rem;
align-items: flex-start;
align-content: flex-start;
gap: 2rem;
flex: 1 0 0;
align-self: stretch;
flex-wrap: wrap;
`;

export const Image = styled.img``;

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

export const Buttons = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;