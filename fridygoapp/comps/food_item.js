import styled from 'styled-components';

const FoodItem = styled.img`
    width:100px;
    height:100px;
    padding-right: 10px
`;
const FoodList = styled.div`
    display:flex;
    width: 460px;
    height: 100px;
    overflow-y: scroll
`
export const MapButtons = styled.img`
    width:180px;
    height:160px;
    display:flex;
    border-radius: 10px;
    border: 7px #8B967A solid;
    margin:15px
`
// const ImgCont = styled.div`
//   width:100px;
//   height:100px;
//   border: #DAD solid 7px;
//   border-radius: 10px;
//   margin:10px;
//   overflow-y: scroll
// `;
// const CreatorName = styled.h3`
//     margin-top: -10px
// `;
// const PhoneNumbers = styled.span`
//     margin-top: -10px
// `;


// export default function FoodItems({imgs="/homebutton.png"}){
// //     for (let i = 0;i < htmlStringList.length;++i)
// //   {
// //     var div = document.createElement('FoodItem');
// //     document.body.appendChild(div);
// //   }
// // 
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
// }
export default function FoodItemDisplay({arr=[]}){

    return <FoodList>
      {
        arr.map((o,i)=>
          <FoodItem src={o} />)
      }
    </FoodList>
  }