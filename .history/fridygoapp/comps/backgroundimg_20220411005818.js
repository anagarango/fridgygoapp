import styled from 'styled-components';

const DispCont = styled.div`
  display:flex;
`;

const DispImg = styled.img`
  object-fit: cover;
  width:100%;
  height: 100%
`;

const ImgCont = styled.div`
  width:100px;
  height:100px;
  border: #DAD solid 7px;
  border-radius: 10px;
  margin:10px
`;


export default function Background({img="/donatebackground.svg"}){

  return <DispImg src={img}>
  </DispImg>
}