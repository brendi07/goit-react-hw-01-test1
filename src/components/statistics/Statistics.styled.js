import styled from "@emotion/styled";

export const StatisticsDiv = styled.section`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  border-style: solid;
  border-radius: 10px;
  border-color: hotpink;
  align-items: center;
`;

export const StatTitle = styled.h2`
  font-family: "Kanit", sans-serif;
  font-size: 32px;
  margin-top: 0px;
  margin-bottom: 0px;
  color: pink;
`;

export const StatList = styled.ul`
  width: 400px;
  padding-inline-start: 0px;
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  margin: 0px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-top-style: solid;
  border-top-color: hotpink;
`;

export const StatItem = styled.li`
list-style: none;
display: flex;
flex-direction: column;
align-items: center;

`;

export const Label = styled.span`
  font-family: "Kanit", sans-serif;
  font-size: 24px;
  color: grey;
`;

export const Percentage = styled.span`
  font-family: "Handjet", cursive;
  font-size: 40px;
  color: hotpink;
`;