import styled from 'styled-components'; 

const JustImg = styled.img`
width: 450px;
height: 400px;
padding: 25px 12px 10px 12px;
`
export const DivForImg = styled.div`
width: ${props=>props.width || "460px"};
height: ${props=>props.height || "410px"};
background-image:${props=>props.b_img || ("url(/fridge.svg)")};
background-repeat: no-repeat;
background-size: cover;
position: ${props=>props.position || "static"};
left: ${props=>props.left || "0px"};
top: ${props=>props.top || "0px"};
`

// export default function JustforImg({
//     img = "/map-point.svg"
// }){
//     return<DivForImg></DivForImg>
// }