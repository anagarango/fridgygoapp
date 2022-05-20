import styled from 'styled-components';
import MapPoint from './mappoint';
import { useRouter } from 'next/router';
import { pointOne, pointTwo, pointThree, pointFour } from '../data/mapPoint_data';


export const MapImg = styled.img`
// width: 450px;
// height: 400px;
width: 80%;
padding: 25px 12px 10px 12px;
`
export const MapDiv = styled.div`
width: 460px;
height: 410px;
// width: 100%;
`


export default function DisplaySecondMap({
  img = "/mapImage.png",
}) {

  const r = useRouter();
  const query = r.query;
  const { mappoint, type } = r.query;

  return <MapDiv><MapImg src={img}></MapImg>

    <MapPoint img="/map-point.svg" left="10px" top="-280px"
      // onClick={console.log("renata")} 
      onClickPoint={
        () => r.push({ 
          pathname: "/donate",
          query: {
            // ...query,
            type: type,
            mappoint: pointOne.route,
          }
        })

      }></MapPoint>
    <MapPoint img="/map-point.svg" left="0px" top="-150px"
      onClickPoint={
        () => r.push({
          pathname: "/donate",
          query: {
            type: type,
            mappoint: pointTwo.route
          }
        })

      }></MapPoint>
    <MapPoint img="/map-point.svg" left="0px" top="-300px"
      onClickPoint={
        () => r.push({
          pathname: "/donate",
          query: {
            type: type,
            mappoint: pointThree.route
          }
        })
      }></MapPoint>

    <MapPoint img="/map-point.svg" left="-30px" top="-450px"
      onClickPoint={
        () => r.push({
          pathname: "/donate",
          query: {
            type: type,
            mappoint: pointFour.route
          }
        })

      }></MapPoint>

  </MapDiv>

}

