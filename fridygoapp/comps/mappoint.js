import styled from 'styled-components';

const PointImg = styled.img`
width: 120px;
height: 120px;
position: relative;
left: ${props=>props.left || "-100px"};
top: ${props=>props.top || "-200px"};
`

export default function MapPoint({
    img = "/map-point.svg",
    onClickPoint=()=>{}, 
    left = "-100px",
    top = "-200px"
}){

    return<PointImg onClick={onClickPoint} src={img} left={left} top={top}></PointImg>
}