//import {useRouter}
import styled from 'styled-components';
import {PageHeader, SecondPageHeader, ThirdPageHeader, NormalText, NormalCenteredText, BoldNormalText} from '../../comps/text'; 
import List, {BoxedContent} from '../../comps/lists';
import {acceptedList, notAcceptedList} from '../../data/donatelists';
import HomeButton from '../../comps/homebutton'
import{useRouter} from 'next/router';
import {DispImg} from '../../comps/backgroundimg';
import FoodItemDisplay, {MapButtons} from '../../comps/food_item';
import {burn, dtvan, richm, burnImgs, dtvanImgs, richmImgs} from '../../data/food_data'

export const Gohomebutton = styled.img`
    width: 85px;
    height: 75px;
    position: absolute;
    right: 20px
`
export const DonationRules = styled.button`
    font-size: 18px;
    color: white;
    background-color: #ED9251;
    font-weight: 700;
    border: 0px;
    border-radius: 10px;
    width: 170px;
    height: 65px;
`
const FoodContainer = styled.div`
  width:500px;
  height:fit-content;
  padding:20px;
  background-color: white;
  border-radius: 10px;
`
const ButtonContainer = styled.div`
  width:480px;
  height:fit-content;
  padding:20px;
  background-color: white;
  border-radius: 10px;
  display:flex;
  flex-wrap: wrap;
`

export default function DonatePage(){
  const r = useRouter();
  const {type} = r.query;

  return <div class="donatepage">
      <div class="donatecontent">
      <Gohomebutton src="/homebutton.png" onClick={()=>r.replace({
      pathname:"/contact",
      query:{
        page:1,
      }
    })
  }></Gohomebutton>
    <PageHeader>Donate</PageHeader>
    <NormalCenteredText>Help out someone in need from your community by visiting one of your near fridges in 4 easy steps.</NormalCenteredText>
    <NormalText><BoldNormalText>Step 1:</BoldNormalText>Pick a Location</NormalText>
    <NormalText><BoldNormalText>Step 2:</BoldNormalText>See the container below the map to see what items are needed for the fridge</NormalText>
        <FoodContainer>
          <SecondPageHeader>Choose A Location</SecondPageHeader>
          <ButtonContainer>
            <MapButtons src={burn.img} onClick={
              ()=>r.replace({
                // pathname:"/donate",
                query:{
                  type:burn.route
                }
              })
            }>
            </MapButtons>

            <MapButtons src={dtvan.img} onClick={
              ()=>r.replace({
                // pathname:"/donate",
                query:{
                  type:dtvan.route
                }
              })
            }>
            </MapButtons>

            <MapButtons src={richm.img} onClick={
              ()=>r.replace({
                // pathname:"/donate",
                query:{
                  type:richm.route
                }
              })
            }>
            </MapButtons>
          </ButtonContainer>

          {type === 'bur' && <div>
            Burnaby Food Items
            <FoodItemDisplay arr={burnImgs}></FoodItemDisplay>
            </div>  
          }
          {type === 'van' && <div>
            Downtown Vancouver Items
            <FoodItemDisplay arr={dtvanImgs}></FoodItemDisplay>
            </div>  
          }
          {type === 'rich' && <div>
            Richmond Items
            <FoodItemDisplay arr={richmImgs}></FoodItemDisplay>
            </div>  
          }
        </FoodContainer>
    <NormalText><BoldNormalText>Step 3:</BoldNormalText>Check our rules by following the button below to review our list of accepted and non-accepted items</NormalText>
    <DonationRules src="/homebutton.png" onClick={()=>r.replace({
      pathname:"/rules",
      query:{
        page:1,
      }
    })
  }>Donation Rules</DonationRules>

    </div>
  </div>
}


/*Conditional Statements shortcuts
1. ? :
2. &&
3. ||


if the boolean condition is true, use value1, else use value2
value can be both a data type (like int, string, array etc) and a UI Element (<div>)
1. boolean condition ? value : value2

if the boolean condition us true, then use value
2. boolean condition && value

if value1 can be used, then use it, otherwise use value2
3. value1 || value2


*/




// import styled from 'styled-components';


// export default function Donate(){
//     return <div class="donatepage">
//     <div class="donatecontent">
//         <img class="homebutton" onClick="" src="/homebutton.png"></img>
//         <h1>Donate</h1>
//         <p>Help out someone in need from your community by visiting one of your near fridges in 4 easy steps</p>
//         <p class="donatetext"><span class="steps">Step 1:</span> Pick a Location</p>
//         <p class="donatetext"><span class="steps">Step 2:</span> See the container below the map to see what items are needed for the fridge</p>
//         <p class="donatetext"><span class="steps">Step 3:</span> Check our rules below to review our list of accepted and non-accepted items</p>
//         <p class="donatetext"><span class="steps">Step 4:</span> Donate the needed item to the fridge in person</p>
//         <h2>Rules for Donations</h2>
//         <div class="rulesfordonations donatetext">
//             <h3>Sanitize your hands before and after handling food in the fridge</h3>
//             <br></br>
//             <h3>Accepted✅</h3>
//             <ul>
//                 <li>Fresh produce</li>
//                 <li>Non-perishable items</li>
//                 <li>Canned and dried goods</li>
//                 <li>Baked goods</li>
//                 <li>Prepackaged goods</li>
//                 <li>Dairy products</li>
//                 <li>Beverages (non-alcoholic)</li>
//             </ul>
//             <h3>Not Accepted❌</h3>
//             <ul>
//                 <li>Unsealed or half-consumed food</li>
//                 <li>Meat, poultry, or fish (raw/cooked)</li>
//                 <li>Any Homecooked meals</li>
//                 <li>Food the poses known health risks (ie. Salmonella)</li>
//                 <li>Alcohol</li>
//             </ul>
//         </div>
//     </div>
    
// </div>
// }




// import styled from 'styled-components';
// const NormalText = styled.div`
//     color: #723800
// `
// const BoldedText = styled.div`
//     font-weight:900;
//     color: #723800
// `;

// export default function Donate(){
//     return <div>
//     <NormalText>Donate</NormalText>
//     <NormalText>Help out someone in need from your community by visiting one of your near fridges in 4 easy steps</NormalText>
//     <NormalText><BoldedText>Step 1:</BoldedText> Pick a Location</NormalText>
// </div>
// }



