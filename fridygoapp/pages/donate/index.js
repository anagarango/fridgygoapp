import {PageHeader, SecondPageHeader, ThirdPageHeader} from '../../comps/text'; 
import HomeButton from '../../comps/homebutton'
import{useRouter} from 'next/router';
import FoodItemDisplay from '../../comps/food_item';
import { burnImgs, dtvanImgs, richmImgs, surrImgs, burnFoodNames} from '../../data/food_data'
import { CenteredButtonDivs, ChangePage, CenteredDiv, CenteredDivDonate , FoodContainerDonate, WholePage } from '../../comps/donatecontainer'

export default function DonatePage(){
  const r = useRouter();
  const {type} = r.query;

  return <WholePage>
      <HomeButton></HomeButton>
      <PageHeader>Donate</PageHeader>
      {/* <NormalCenteredText>Help out someone in need from your community by visiting one of your near fridges in 4 easy steps.</NormalCenteredText> */}
      <CenteredDivDonate>
        <FoodContainerDonate>
          <SecondPageHeader>Choose A Fridge Location</SecondPageHeader>
              {type === 'bur' && <CenteredDiv>
                <ThirdPageHeader>Burnaby Food Items</ThirdPageHeader>
                <FoodItemDisplay arr={burnImgs} names={burnFoodNames}></FoodItemDisplay>
                </CenteredDiv>  
              }
              {type === 'van' && <CenteredDiv>
                <ThirdPageHeader>Downtown Vancouver Items</ThirdPageHeader>
                <FoodItemDisplay arr={dtvanImgs}></FoodItemDisplay>
                </CenteredDiv>  
              }
              {type === 'rich' && <CenteredDiv>
                <ThirdPageHeader>Richmond Items</ThirdPageHeader>
                <FoodItemDisplay arr={richmImgs}></FoodItemDisplay>
                </CenteredDiv>  
              }
              {type === 'sur' && <CenteredDiv>
                <ThirdPageHeader>Surrey Items</ThirdPageHeader>
                <FoodItemDisplay arr={surrImgs}></FoodItemDisplay>
                </CenteredDiv>  
              }

              <CenteredButtonDivs>
                <ChangePage src="/homebutton.png" onClick={()=>r.replace({
                  pathname:"/pickarea",
                  query:{
                    page:1,
                  }
                })
              }>Go Back</ChangePage>
                <ChangePage onClick={()=>r.replace({
                  pathname:"/rules",
                  query:{
                    type:type
                  }
                })
              }>Fridge Donation Rules</ChangePage>
          </CenteredButtonDivs>
        </FoodContainerDonate>
      </CenteredDivDonate>
    </WholePage>
  
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





//  <p>Help out someone in need from your community by visiting one of your near fridges in 4 easy steps</p>
//  <p class="donatetext"><span class="steps">Step 1:</span> Pick a Location</p>
//  <p class="donatetext"><span class="steps">Step 2:</span> See the container below the map to see what items are needed for the fridge</p>
//  <p class="donatetext"><span class="steps">Step 3:</span> Check our rules below to review our list of accepted and non-accepted items</p>
//  <p class="donatetext"><span class="steps">Step 4:</span> Donate the needed item to the fridge in person</p>


