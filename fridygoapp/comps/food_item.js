import styled from 'styled-components';

const FoodItem = styled.img`
    width:100px;
    height:100px;
`;
const FoodList = styled.div`
    display:flex;
    flex-direction:row;
    width: 95%;
    margin: 0px, 30px;
    overflow-y: scroll
`;
const Grouped = styled.div`
  display:flex;
  padding: 15px 15px 0px 0px;
  flex-direction:column;
`
export const MapButtons = styled.img`
    width:200px;
    height:190px;
    display:flex;
    border-radius: 10px;
    border: 7px #8B967A solid;
    margin:10px
`
const FoodNames = styled.h4`
  width:100px;
  text-align:center;
  color: #723800;
`

// export default function FoodItems({imgs="/homebutton.png"}){
//     for (let i = 0;i < htmlStringList.length;++i)
//   {
//     var div = document.createElement('FoodItem');
//     document.body.appendChild(div);
//   }
// 
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
        arr.map((o,i)=><Grouped>
          <FoodItem src={"/"+o+".svg"}></FoodItem>
          <FoodNames>{o}</FoodNames>
        </Grouped>
          )
      }
      {/* {
        names.map((o,i)=><Grouped>
          <FoodNames>{o}</FoodNames>
        </Grouped>
          )
      } */}
      
    </FoodList>
  }