import styled from 'styled-components';
import MapPoint from './mappoint';
import{useRouter} from 'next/router';
import { pointOne, pointTwo, pointThree } from '../data/mapPoint_data';


export const MapImg = styled.img`
width: 450px;
height: 400px;
padding: 25px 12px 10px 12px;
`
export const MapDiv = styled.div`
width: 460px;
height: 410px;
`


export default function DisplayMap({
    img="/mapImage.png",
}){

    const r = useRouter();
    const {mappoint} = r.query;

    return <MapDiv><MapImg src={img}></MapImg>
    
    <MapPoint img = "/map-point.svg" left="-50px" top="-300px"
    // onClick={console.log("renata")} 
    onClickPoint={
        ()=>r.push({ //maybe push?
          pathname:"/donate",
          query:{
            mappoint:pointOne.route,
            // type: type
          }
        })
        
      }></MapPoint>
      <MapPoint img = "/map-point.svg" left="0px" top="-150px"
    onClickPoint={
        ()=>r.push({
          pathname:"/donate",
          query:{
            mappoint:pointTwo.route
          }
        })
        
      }></MapPoint>
      <MapPoint img = "/map-point.svg" left="0px" top="-270px"
    onClickPoint={
        ()=>r.push({
          pathname:"/donate",
          query:{
            mappoint:pointThree.route
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





//     return <FoodList>
//     <FoodItem src={imgs}></FoodItem>
//     <FoodItem src={imgs}></FoodItem>
//     <FoodItem src={imgs}></FoodItem>
//     <FoodItem src={imgs}></FoodItem>
//     <FoodItem src={imgs}></FoodItem>
//     <FoodItem src={imgs}></FoodItem>
//     <FoodItem src={imgs}></FoodItem>
//     <FoodItem src={imgs}></FoodItem>
//     </FoodList>