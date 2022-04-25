import styled from 'styled-components';

const PointImg = styled.img`
width: 120px;
height: 120px;
position: absolute;
left: 250px;
top: 400px;
`

export default function MapPoint({
    img = "/map-point.svg",
}){

    return<PointImg src={img}></PointImg>
}