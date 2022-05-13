import {PageHeader, SecondPageHeader, ThirdPageHeader, BoldNormalText, NormalText} from '../../comps/text'; 
import HomeButton from '../../comps/homebutton'
import{useRouter} from 'next/router';
import FoodItemDisplay, {MapButtons} from '../../comps/food_item';
// import {burn, dtvan, richm, burnImgs, dtvanImgs, richmImgs, surrImgs} from '../../data/food_data'
// import { CenteredDiv } from '../pickarea';
import DisplayMap from '../../comps/map';

// import FoodItemDisplay from '../../comps/food_item';
import { burnImgs, dtvanImgs, richmImgs, surrImgs, burnFoodNames} from '../../data/food_data'
import { CenteredButtonDivs, ChangePage, CenteredDiv, CenteredDivDonate , FoodContainerDonate, WholePage } from '../../comps/donatecontainer'

export default function DonatePage(){
  const r = useRouter();
  const {type} = r.query;
  const {mappoint} = r.query;
  //сделать еще один тайп и потом если тайп равен этому и сити этому то делай это


  return <WholePage>
      <HomeButton></HomeButton>
      <PageHeader>Donate</PageHeader>
      {/* <NormalCenteredText>Help out someone in need from your community by visiting one of your near fridges in 4 easy steps.</NormalCenteredText> */}
      <CenteredDivDonate>
        <FoodContainerDonate>
          <SecondPageHeader>Choose A Fridge Location</SecondPageHeader>

              {mappoint === 'loc1' && 
              <CenteredDiv>
                {/* {data[city][type].header} */}
              Burnaby Food Items
                <DisplayMap img="/burnabyMap.png"></DisplayMap>
                <BoldNormalText>Location:</BoldNormalText><NormalText>729 Nanaimo Ave, Burnaby</NormalText><br/>
                <BoldNormalText>Phone Number:</BoldNormalText><NormalText>1-250-643-9172</NormalText><br/>
                <BoldNormalText>Needed Food Items:</BoldNormalText>
                <FoodItemDisplay arr={burnImgs}></FoodItemDisplay>
                </CenteredDiv>  
              }
              {mappoint === 'loc2' && 
              <CenteredDiv>
              Burnaby Food Items
                <DisplayMap img="/burnabyMap.png"></DisplayMap>
                <BoldNormalText>Location:</BoldNormalText><NormalText>322 Willington Ave, Burnaby</NormalText><br/>
                <BoldNormalText>Phone Number:</BoldNormalText><NormalText>1-250-773-9473</NormalText><br/>
                <BoldNormalText>Needed Food Items:</BoldNormalText>
                <FoodItemDisplay arr={dtvanImgs}></FoodItemDisplay>
                </CenteredDiv>  
              }
              {mappoint === 'loc3' && 
              <CenteredDiv>
              Burnaby Food Items
                <DisplayMap img="/burnabyMap.png"></DisplayMap>
                <BoldNormalText>Location:</BoldNormalText><NormalText>Metrotown, Burnaby</NormalText><br/>
                <BoldNormalText>Phone Number:</BoldNormalText><NormalText>1-250-654-2453</NormalText><br/>
                <BoldNormalText>Needed Food Items:</BoldNormalText>
                <FoodItemDisplay arr={richmImgs}></FoodItemDisplay>
                </CenteredDiv>  
              }

                {type === 'bur' && <CenteredDiv>
                   Vancouver Items
                  <DisplayMap img="/burnabyMap.png"></DisplayMap>
                </CenteredDiv>  
              }

              {type === 'van' && <CenteredDiv>
                   Vancouver Items
                  <DisplayMap img="/mapImage.png"></DisplayMap>
                </CenteredDiv>  
              }

              {type === 'rich' && <CenteredDiv>
                Richmond Items
                <DisplayMap img="/richmondMap.png"></DisplayMap>
                </CenteredDiv>  
              }
              {type === 'sur' && <CenteredDiv>
                Surrey Items
                <DisplayMap img="/surreyMap.png"></DisplayMap>
                </CenteredDiv>  
              }

              <CenteredButtonDivs>

                <ChangePage onClick={()=>r.replace({
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


