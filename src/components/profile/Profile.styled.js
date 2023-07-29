import styled from "@emotion/styled";

export const ProfileCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 500px;
height: 600px;
position: relative;
padding: 48px;
margin-left: auto;
margin-right: auto;
margin-top: 60px;
margin-bottom: 60px;
background-color: pink;
border-radius: 10px;

`;

export const UserDescr = styled.div`
display: flex;
align-items: center;
flex-direction: column;

`;

export const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
`;

export const Name = styled.p`
  font-family: "Gasoek One", sans-serif;
font-size: 40px;
  letter-spacing: 2px;
  color: hotpink;
  margin-top: 12px;
  margin-bottom: 0px;
   cursor: pointer;
}
`;

export const Tag = styled.p`
  font-family: "Kanit", sans-serif;
  font-size: 24px;
  margin-top: 0px;
  margin-bottom: 0px;
  color: white;
  &:hover {
    color: grey;
    transition: color 0.5s;
  }
  cursor: pointer;
`;

export const Location = styled(Tag)`
  font-size: 32px;
  &:hover {
    color: grey;
    transition: color 0.5s;
  }
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 0px;
`;

export const StatsEl = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  &:hover {
    background-color: hotpink;
    transition: background-color 0.5s;
  }
  cursor: pointer;
  border-radius: 10px;
`;

export const Label = styled.span`
  font-family: "Kanit", sans-serif;
  font-size: 20px;
  color: grey;
`;

export const Quantity = styled.span`
  font-family: "Handjet", cursive;
  font-size: 40px;
  color: white;
`;
