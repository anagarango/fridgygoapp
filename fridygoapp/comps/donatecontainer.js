import styled from 'styled-components';

export const WholePage = styled.div`
  background-image: url("/donatebackground.svg");
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom:30px;
  min-height:100vh
`
export const FoodContainer = styled.div`
  width:85%;
  padding:20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
`;

export const FoodContainerDonate = styled.div`
  padding:20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
`;

export const FoodContainerContact = styled.div`
  width:85%;
  height:fit-content;
  padding:40px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
`;

export const ButtonContainer = styled.div`
  height:fit-content;
  border-radius: 10px;
  display:flex;
  flex-wrap: wrap;
  justify-content:center
`;
export const CenteredDiv = styled.div`
    display:flex;
    align-items: center;
    flex-direction:column;
    margin-bottom:30px
`;

export const CenteredDivDonate = styled.div`
  display:flex;
  flex-direction: column;
  text-align: center;
  width: 85%;
  padding: 20px 0px;
  // min-height: 100vh;
  margin-top:-20px;
`;

export const BoxedContent = styled.div`
    margin-top:-25px;
    background-color: rgba(233, 233, 233, 0.9);
    padding: 30px;
    border: 7px #8B967A solid;
    border-radius: 0px 0px 15px 15px;
`;

export const CenteredButtonDivs = styled.div`
  display:flex;
  flex-wrap:no-wrap;
  justify-content: center;
  margin-top:20px
`;
export const ChangePage = styled.button`
    font-size: 18px;
    color: white;
    background-color: ${props=>props.bg || "#ED9251"};
    font-weight: 700;
    border-radius: 10px;
    border:0;
    width: 160px;
    height: 65px;
    margin:5px 20px;
    padding:10px;
    top: ${props=>props.top || "nones"};
    position:${props=>props.position || "nones"};
    
`;
export const HomePage = styled.div`
  background-image: url("/homepagebackground.png");
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom:30px;
  min-height:100vh
`

