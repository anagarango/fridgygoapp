import {PageHeader, SecondPageHeader, ThirdPageHeader, BoldNormalText, NormalText} from '../../comps/text'; 
import HomeButton from '../../comps/homebutton'
import{useRouter} from 'next/router';
import FoodItemDisplay, {MapButtons} from '../../comps/food_item';
// import {burn, dtvan, richm, burnImgs, dtvanImgs, richmImgs, surrImgs} from '../../data/food_data'
// import { CenteredDiv } from '../pickarea';
import DisplayMap from '../../comps/map';
import DisplaySecondMap from '../../comps/mapTwo';

// import FoodItemDisplay from '../../comps/food_item';
import { burnImgs, dtvanImgs, richmImgs, surrImgs, burnFoodNames} from '../../data/food_data'
import { CenteredButtonDivs, ChangePage, CenteredDiv, CenteredDivDonate , FoodContainerDonate, WholePage } from '../../comps/donatecontainer'
import DisplayThirdMap from '../../comps/mapThree';

import Modal from  '/comps/model';

export default function DonatePage(){
  const r = useRouter();

  const {type, mappoint} = r.query;
  // const {mappoint} = r.query;

  return <WholePage>
      <HomeButton></HomeButton>
      <PageHeader>Donate</PageHeader>
      {/* <NormalCenteredText>Help out someone in need from your community by visiting one of your near fridges in 4 easy steps.</NormalCenteredText> */}
      <CenteredDivDonate>
        <FoodContainerDonate>
          <SecondPageHeader>Choose A Fridge Location</SecondPageHeader>

              {mappoint === 'loc1' && type === 'bur' && 
              <CenteredDiv>
              Burnaby Food Items
                <DisplayMap img="/burnabyMap.png"></DisplayMap>
                <BoldNormalText>Location:</BoldNormalText><NormalText>729 Nanaimo Ave, Burnaby</NormalText><br/>
                <BoldNormalText>Phone Number:</BoldNormalText><NormalText>1-250-643-9172</NormalText><br/>
                <BoldNormalText>Needed Food Items:</BoldNormalText>
                <FoodItemDisplay arr={burnImgs}></FoodItemDisplay> 
                <Modal></Modal>

                </CenteredDiv>
              }
              
              {mappoint === 'loc2' && type === 'bur' && 
              <CenteredDiv>
              Burnaby Food Items
                <DisplayMap img="/burnabyMap.png"></DisplayMap>
                <BoldNormalText>Location:</BoldNormalText><NormalText>322 Willington Ave, Burnaby</NormalText><br/>
                <BoldNormalText>Phone Number:</BoldNormalText><NormalText>1-250-773-9473</NormalText><br/>
                <BoldNormalText>Needed Food Items:</BoldNormalText>
                <FoodItemDisplay arr={dtvanImgs}></FoodItemDisplay>
                </CenteredDiv>  
              }

              {mappoint === 'loc3' && type === 'bur' && 
              <CenteredDiv>
              Burnaby Food Items
                <DisplayMap img="/burnabyMap.png"></DisplayMap>
                <BoldNormalText>Location:</BoldNormalText><NormalText>Metrotown, Burnaby</NormalText><br/>
                <BoldNormalText>Phone Number:</BoldNormalText><NormalText>1-250-654-2453</NormalText><br/>
                <BoldNormalText>Needed Food Items:</BoldNormalText>
                <FoodItemDisplay arr={richmImgs}></FoodItemDisplay>
                </CenteredDiv>  
              }



              
              {mappoint === 'loc1' && type === 'van' && 
              <CenteredDiv>
              Vancouver Food Items
                <DisplaySecondMap img="/mapImage.png"></DisplaySecondMap>
                <BoldNormalText>Location:</BoldNormalText><NormalText>1255 Seymour St, Vancouver</NormalText><br/>
                <BoldNormalText>Phone Number:</BoldNormalText><NormalText>1-250-533-9172</NormalText><br/>
                <BoldNormalText>Needed Food Items:</BoldNormalText>
                <FoodItemDisplay arr={burnImgs}></FoodItemDisplay>
                </CenteredDiv>
              }
              
              {mappoint === 'loc2' && type === 'van' && 
              <CenteredDiv>
              Vancouver Food Items
              <DisplaySecondMap img="/mapImage.png"></DisplaySecondMap>
                <BoldNormalText>Location:</BoldNormalText><NormalText>543 Main St, Vancouver</NormalText><br/>
                <BoldNormalText>Phone Number:</BoldNormalText><NormalText>1-250-533-9172</NormalText><br/>
                <BoldNormalText>Needed Food Items:</BoldNormalText>
                <FoodItemDisplay arr={dtvanImgs}></FoodItemDisplay>
                </CenteredDiv>  
              }

              {mappoint === 'loc3' && type === 'van' && 
              <CenteredDiv>
              Vancouver Food Items
              <DisplaySecondMap img="/mapImage.png"></DisplaySecondMap>
                <BoldNormalText>Location:</BoldNormalText><NormalText>123 Pacific Center, Vancouver</NormalText><br/>
                <BoldNormalText>Phone Number:</BoldNormalText><NormalText>1-250-533-9172</NormalText><br/>
                <BoldNormalText>Needed Food Items:</BoldNormalText>
                <FoodItemDisplay arr={richmImgs}></FoodItemDisplay>
                </CenteredDiv>  
              }

              {mappoint === 'loc4' && type === 'van' && 
              <CenteredDiv>
              Vancouver Food Items
              <DisplaySecondMap img="/mapImage.png"></DisplaySecondMap>
                <BoldNormalText>Location:</BoldNormalText><NormalText>233 Granville Sr, Vancouver</NormalText><br/>
                <BoldNormalText>Phone Number:</BoldNormalText><NormalText>1-250-533-9172</NormalText><br/>
                <BoldNormalText>Needed Food Items:</BoldNormalText>
                <FoodItemDisplay arr={dtvanImgs}></FoodItemDisplay>
                </CenteredDiv>  
              }





              {mappoint === 'loc1' && type === 'rich' && 
              <CenteredDiv>
              Richmond Food Items
                <DisplayMap img="/richmondMap.png"></DisplayMap>
                <BoldNormalText>Location:</BoldNormalText><NormalText> 6916 No. 3 Rd, Richmond, BC V6Y 2C5</NormalText><br/>
                <BoldNormalText>Phone Number:</BoldNormalText><NormalText>1-250-533-9172</NormalText><br/>
                <BoldNormalText>Needed Food Items:</BoldNormalText>
                <FoodItemDisplay arr={burnImgs}></FoodItemDisplay>
                </CenteredDiv>
              }
              
              {mappoint === 'loc2' && type === 'rich' && 
              <CenteredDiv>
              Richmond Food Items
              <DisplayMap img="/richmondMap.png"></DisplayMap>
                <BoldNormalText>Location:</BoldNormalText><NormalText>8391 Alexandra Rd #1110, Richmond, BC V6X 1C3</NormalText><br/>
                <BoldNormalText>Phone Number:</BoldNormalText><NormalText>1-250-533-9172</NormalText><br/>
                <BoldNormalText>Needed Food Items:</BoldNormalText>
                <FoodItemDisplay arr={dtvanImgs}></FoodItemDisplay>
                </CenteredDiv>  
              }

              {mappoint === 'loc3' && type === 'rich' && 
              <CenteredDiv>
              Richmond Food Items
              <DisplayMap img="/richmondMap.png"></DisplayMap>
                <BoldNormalText>Location:</BoldNormalText><NormalText>8391 Alexandra Rd #1110, Richmond, BC V6X 1C3</NormalText><br/>
                <BoldNormalText>Phone Number:</BoldNormalText><NormalText>1-250-533-9172</NormalText><br/>
                <BoldNormalText>Needed Food Items:</BoldNormalText>
                <FoodItemDisplay arr={richmImgs}></FoodItemDisplay>
                </CenteredDiv>  
              }




              {mappoint === 'loc1' && type === 'sur' && 
              <CenteredDiv>
              Surrey Food Items
                <DisplayThirdMap img="/surreyMap.png"></DisplayThirdMap>
                <BoldNormalText>Location:</BoldNormalText><NormalText> 7310 120 St #110, Surrey, BC V3W 3M9</NormalText><br/>
                <BoldNormalText>Phone Number:</BoldNormalText><NormalText>1-250-813-9132</NormalText><br/>
                <BoldNormalText>Needed Food Items:</BoldNormalText>
                <FoodItemDisplay arr={burnImgs}></FoodItemDisplay>
                </CenteredDiv>
              }
              
              {mappoint === 'loc2' && type === 'sur' && 
              <CenteredDiv>
              Surrey Food Items
              <DisplayThirdMap img="/surreyMap.png"></DisplayThirdMap>
                <BoldNormalText>Location:</BoldNormalText><NormalText>13750 96 Ave, Surrey, BC V3V 1Z2</NormalText><br/>
                <BoldNormalText>Phone Number:</BoldNormalText><NormalText>1-250-813-9132</NormalText><br/>
                <BoldNormalText>Needed Food Items:</BoldNormalText>
                <FoodItemDisplay arr={dtvanImgs}></FoodItemDisplay>
                </CenteredDiv>  
              }




              {mappoint === undefined && type === 'bur' && <CenteredDiv>
                   Vancouver Items
                  <DisplayMap img="/burnabyMap.png"></DisplayMap>
                </CenteredDiv>  
              }

              {mappoint === undefined && type === 'van' && <CenteredDiv>
                   Vancouver Items
                  <DisplaySecondMap img="/mapImage.png"></DisplaySecondMap>
                </CenteredDiv>  
              }

              {mappoint === undefined && type === 'rich' && <CenteredDiv>
                Richmond Items
                <DisplayMap img="/richmondMap.png"></DisplayMap>
                </CenteredDiv>  
              }
              {mappoint === undefined && type === 'sur' && <CenteredDiv>
                Surrey Items
                <DisplayThirdMap img="/surreyMap.png"></DisplayThirdMap>
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