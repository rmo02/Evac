import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.bgblue};
  display: flex;
  width: 100%;
  padding-top: 7rem;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;


export const Content = styled.div`
  display: flex;
  min-width: 36.25rem;
  max-width: 77.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const Title = styled.h2`
font-size: 1rem;
font-family: 'Lato';
color: ${({ theme }) => theme.red500};
`;

export const SubTitle = styled.p`
font-size: 1rem;
font-family: 'Inter';
color: ${({ theme }) => theme.gray600};
`;
