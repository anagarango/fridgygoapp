import styled from 'styled-components';
import {PageHeader, SecondPageHeader, NormalText, BoldNormalText} from '../../comps/text'; 
import{useRouter} from 'next/router';
import FoodItemDisplay, {MapButtons} from '../../comps/food_item';
import {burn, dtvan, richm, surr} from '../../data/food_data';
import HomeButton, {Gohomebutton} from '../../comps/homebutton';

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

 export const CenteredDiv = styled.div`
    display:flex;
    justify-content: center
`

export default function DonatePage(){
    const r = useRouter();
    const {type} = r.query;
  
    return <div class="donatepage">
        <div class="donatecontent">
        {/* <Gohomebutton src="/homebutton.png" onClick={()=>r.replace({
        pathname:"/contact",
        query:{
          page:1,
        }
      })
    }></Gohomebutton> */}
        <HomeButton></HomeButton>
      <PageHeader> </PageHeader>
      <CenteredDiv>
          <FoodContainer>
            <SecondPageHeader>Choose A Location</SecondPageHeader>
            <ButtonContainer>
              <MapButtons src={burn.img} onClick={
                ()=>r.replace({
                  pathname:"/donate",
                  query:{
                    type:burn.route
                  }
                })
              }>
              </MapButtons>
  
              <MapButtons src={dtvan.img} onClick={
                ()=>r.replace({
                  pathname:"/donate",
                  query:{
                    type:dtvan.route
                  }
                })
              }>
              </MapButtons>
  
              <MapButtons src={richm.img} onClick={
                ()=>r.replace({
                  pathname:"/donate",
                  query:{
                    type:richm.route
                  }
                })
              }>
              </MapButtons>
              <MapButtons src={surr.img} onClick={
                ()=>r.replace({
                  pathname:"/donate",
                  query:{
                    type:surr.route
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
        </CenteredDiv>
      {/* <DonationRules src="/homebutton.png" onClick={()=>r.replace({
        pathname:"/rules",
        query:{
          page:1,
        }
      })
    }>Donation Rules</DonationRules> */}

      </div>
    </div>
  }