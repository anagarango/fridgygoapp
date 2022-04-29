import {PageHeader, SecondPageHeader} from '../../comps/text'; 
import{useRouter} from 'next/router';
import FoodItemDisplay, {MapButtons} from '../../comps/food_item';
import {burn, dtvan, richm, surr} from '../../data/food_data';
import HomeButton from '../../comps/homebutton';
import { WholePage, FoodContainer, ButtonContainer } from '../../comps/donatecontainer';


export default function DonatePage(){
    const r = useRouter();
    const {type} = r.query;
  
    return <WholePage>
      <HomeButton></HomeButton>
      <PageHeader>Donate</PageHeader>
          <FoodContainer>
            <SecondPageHeader>Choose A Location</SecondPageHeader>
            <ButtonContainer>
              <MapButtons src={burn.img} onClick={
                ()=>r.push({
                  pathname:"/donate",
                  query:{
                    type:burn.route,
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
              <FoodItemDisplay arr={burnImgs} names={burnImgs}></FoodItemDisplay>
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
    </WholePage>
  }