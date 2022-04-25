import styled from 'styled-components';

export const MapImg = styled.img`
width: 450px;
height: 400px;
padding: 25px 12px 10px 12px;
`

// const PointImg = styled.img`
// width: 100px;
// height: 100px;
// position: absolute;
// left: 50px;
// top: 50px;
// `
// export const PointImg = styled.img`
// width: 50px;
// height: 50px;
// position: relative;
// left: 50px;
// top: 50px;
// `

// export function MapPoint({
//     img = "/map-point.svg",
// }){

//     return<PointImg src={img}></PointImg>
// }


export default function DisplayMap({
    img="/mapImage.png",
}){

    return <MapImg src={img}>
        {/* <PointImg src={point}>
        </PointImg> */}
    </MapImg>
}


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