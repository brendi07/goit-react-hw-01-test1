import styled from "@emotion/styled";

export const Table = styled.table`
  border: 1px solid hotpink;
  table-layout: fixed;
  width: 80%;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 3px;
`;

export const Head = styled.thead`
background-color: white;
`;

export const HeadList = styled.tr`

`;
 
export const HeadItem = styled.th`
  font-family: "Gasoek One", sans-serif;
  font-size: 20px;
  letter-spacing: 2px;
  color: hotpink;
  padding: 5px;
  border: 5px solid hotpink;
  border-radius: 3px;
  text-align: center;
`;

export const Body = styled.tbody`

`;

export const BodyList = styled.tr`
  &:nth-child(odd) {
    background: #fff;
  };
  &:nth-child(even){
	background: pink;
};

`;

export const BodyItem = styled.td`
  font-family: "Kanit", sans-serif;
  font-size: 24px;
  color: grey;
  text-align: center;
`;