import styled from 'styled-components';
import MapPoint from './mappoint';
import { useRouter } from 'next/router';
import { pointOne, pointTwo, pointThree } from '../data/mapPoint_data';


export const MapImg = styled.img`
// width: 450px;
// height: 400px;
width: 80%;
padding: 25px 12px 10px 12px;
animation: fadeIn 5s;
-webkit-animation: fadeIn 5s;
-moz-animation: fadeIn 5s;
-o-animation: fadeIn 5s;
-ms-animation: fadeIn 5s;

@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
`



export const MapDiv = styled.div`
width: 460px;
height: 410px;
// width: 100%;
`


export default function DisplayMap({
  img = "/mapImage.png",
}) {

  const r = useRouter();
  const query = r.query;
  const { mappoint, type } = r.query;



  return <MapDiv><MapImg src={img}></MapImg>

    <MapPoint img="/map-point.svg" left="-30px" top="-300px"
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
    <MapPoint img="/map-point.svg" left="0px" top="-270px"
      onClickPoint={
        () => r.push({
          pathname: "/donate",
          query: {
            type: type,
            mappoint: pointThree.route
          }
        })

      }></MapPoint>

  </MapDiv>
}


{/* <ChangePage onClick={()=>r.replace({
  pathname:"/rules",
  query:{
    type:type
  }
})
}>Fridge Donation Rules</ChangePage>

query: type;
mappoint: loc1; */}

