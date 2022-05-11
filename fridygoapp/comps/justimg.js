import styled from 'styled-components'; 

const JustImg = styled.img`
width: 450px;
height: 400px;
padding: 25px 12px 10px 12px;
`
const DivForImg = styled.div`
width: 460px;
height: 410px;
`

export default function JustforImg({
    img = "/map-point.svg"
}){
    return<DivForImg><JustImg src={img}></JustImg></DivForImg>
}