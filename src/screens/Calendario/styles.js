import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  width: 100%;
  padding-top: 7rem;
  padding-left: 5rem;
  flex-direction: column;
  align-items: center;
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
color: ${({ theme }) => theme.gradientblue200};
`;

export const SubTitle = styled.p`
font-size: 1rem;
font-family: 'Inter';
color: ${({ theme }) => theme.gray600};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;
