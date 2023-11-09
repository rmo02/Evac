import styled from "styled-components";

export const Container = styled.div`
background-color: ${({ theme }) => theme.gradientblue200};
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
`;

export const Card = styled.div`
display: inline-flex;
padding: 2.25rem 2.25rem 1.5rem 2.25rem;
flex-direction: column;
align-items: center;
border-radius: 0.5rem;
background: var(--Slate-200, #E2E8F0);
box-shadow: 0px 5px 40px -5px rgba(255, 255, 255, 0.50);
width: 20rem;
height: 25rem;
`;

export const Image = styled.img`
width: 13rem;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: right;
  color:  ${({ theme }) => theme.black};
  font-family: "Lato", sans-serif;
`;

export const SubTitle = styled.h3`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: right;
  color:  ${({ theme }) => theme.gradientblue100};
  font-family: "Lato", sans-serif;
`;

export const ContainerButton = styled.div`
margin-top: 2rem;
`;

