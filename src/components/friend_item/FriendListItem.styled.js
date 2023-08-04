import styled from "@emotion/styled";

export const Item = styled.li`
  list-style: none;
  width: 400px;
  height: 150px;
  box-shadow: 10px 5px 5px pink;
  display: flex;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  :not(:last-child) {
    margin-bottom: 32px;
  }
  &:hover {
    background-color: pink;
    transition: background-color 0.5s;
  }
`;

export const Status = styled.span`
  background: #456bd9;
  border-radius: 50%;
  box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);
  height: 10px;
  width: 10px;
  margin-right: 20px;
`;

export const Online = styled(Status)`
background-color: pink;
`;

export const Ofline = styled(Status)`
background-color: grey;
`; 

export const Avatar = styled.img`
  margin-right: 20px;
`;

export const Name = styled.p`
  font-family: "Handjet", cursive;
  font-size: 60px;
  color: hotpink;
`;