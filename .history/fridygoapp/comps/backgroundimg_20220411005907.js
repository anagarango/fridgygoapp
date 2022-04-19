import styled from 'styled-components';



const DispImg = styled.img`
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  width:100%;
  height: 100%
`;


export default function Background({img="/donatebackground.svg"}){

  return <DispImg src={img}>
  </DispImg>
}