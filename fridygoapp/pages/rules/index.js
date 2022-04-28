import styled from 'styled-components';
import {PageHeader, SecondPageHeader, ThirdPageHeader, NormalText, NormalCenteredText, BoldNormalText} from '../../comps/text'; 
import List from '../../comps/lists';
import {ChangePage} from '../donate';
import HomeButton from '../../comps/homebutton';
import{useRouter} from 'next/router';
import {BoxedContent, BoxedContentButtons} from '../../comps/donatecontainer'
import {accepted, notaccepted, acceptedList, notAcceptedList, ChangeButtonColor} from '../../data/donatelists'

// const BoxedContentButtons = styled.div`
//     background-color: rgba(233, 233, 233, 0.9);
//     padding: 0px 20px;
//     border: 7px #8B967A solid;
//     width: 50%;
//     height: 75px;
//     border-radius: 15px 15px 0px 0px;
// `;

// const BoxedContent = styled.div`
//     background-color: rgba(233, 233, 233, 0.9);
//     padding: 15px 30px;
//     border: 7px #8B967A solid;
//     border-radius: 0px 0px 15px 15px;
// `;

// const ButtonNames = styled.h2`
//     padding: 0
// `

export default function RulesPage(){
  const r = useRouter();
  const {type} = r.query;

  return <div class="donatepage">
      <div class="donatecontent">
      <HomeButton></HomeButton>
    <SecondPageHeader>Rules for Donations</SecondPageHeader>
    <div class="flexbuttons">
      <BoxedContentButtons onClick={
        ()=>r.replace({
          pathname:"/rules",
          query:{
            type:accepted.route
          }
          })
        }>
        {accepted.title}
      </BoxedContentButtons>
      <BoxedContentButtons onClickCapture={()=>
         r.replace({
            pathname:"/rules",
            query:{
              type:notaccepted.route
            }
          })
          } onClick={(e)=>e.target.style.backgroundColor = "rgba(214, 214, 214, 0.9)"
          } 
          // onMouseEnter={(e)=>e.target.style.backgroundColor = "rgba(233, 233, 233, 0.9"}
          >{notaccepted.title}
        
        {/* <ButtonNames onClick={
        ()=>r.replace({
          pathname:"/rules",
          query:{
            type:notaccepted.route
          }
          })
        }>{notaccepted.title}</ButtonNames> */}
      </BoxedContentButtons>
    </div>
    <BoxedContent>
        <ThirdPageHeader>Sanitize your hands before and after handling food in the fridge</ThirdPageHeader>
        {type === 'acc' && <div>
            <ThirdPageHeader>{accepted.message}</ThirdPageHeader>
            <List arr={acceptedList}></List>
            </div>  
          }
          {type === 'not' && <div>
          <ThirdPageHeader>{notaccepted.message}</ThirdPageHeader>
          <List arr={notAcceptedList}></List>
            </div>  
          }
    </BoxedContent>
    {/* <NormalText><BoldNormalText>Step 4:</BoldNormalText>Donate the needed item to the fridge in person</NormalText> */}
    <ChangePage src="/homebutton.png" onClick={()=>r.replace({
      pathname:"/donate",
      query:{
        page:1,
      }
    })
  }>Go Back to Donate</ChangePage>
 
    </div>
  </div>
}




// export default function DonatePage(){
//   const r = useRouter();
//   const {type} = r.query;

//   return <div class="donatepage">
//       <div class="donatecontent">
//       <Gohomebutton src="/homebutton.png" onClick={()=>r.replace({
//       pathname:"/contact",
//       query:{
//         page:1,
//       }
//     })
//   }></Gohomebutton>
//     <PageHeader>Donate</PageHeader>
//     <NormalCenteredText>Help out someone in need from your community by visiting one of your near fridges in 4 easy steps.</NormalCenteredText>
//     <NormalText><BoldNormalText>Step 1:</BoldNormalText>Pick a Location</NormalText>
//     <NormalText><BoldNormalText>Step 2:</BoldNormalText>See the container below the map to see what items are needed for the fridge</NormalText>
//         <FoodContainer>
//           <SecondPageHeader>Choose A Location</SecondPageHeader>
//           <ButtonContainer>
//             <MapButtons src={burn.img} onClick={
//               ()=>r.replace({
//                 // pathname:"/donate",
//                 query:{
//                   type:burn.route
//                 }
//               })
//             }>
//             </MapButtons>

//             <MapButtons src={dtvan.img} onClick={
//               ()=>r.replace({
//                 // pathname:"/donate",
//                 query:{
//                   type:dtvan.route
//                 }
//               })
//             }>
//             </MapButtons>

//             <MapButtons src={richm.img} onClick={
//               ()=>r.replace({
//                 // pathname:"/donate",
//                 query:{
//                   type:richm.route
//                 }
//               })
//             }>
//             </MapButtons>
//           </ButtonContainer>

          // {type === 'bur' && <div>
          //   Burnaby Food Items
          //   <FoodItemDisplay arr={burnImgs}></FoodItemDisplay>
          //   </div>  
          // }
          // {type === 'van' && <div>
          //   Downtown Vancouver Items
          //   <FoodItemDisplay arr={dtvanImgs}></FoodItemDisplay>
          //   </div>  
          // }
          // {type === 'rich' && <div>
          //   Richmond Items
          //   <FoodItemDisplay arr={richmImgs}></FoodItemDisplay>
          //   </div>  
          // }
//         </FoodContainer>
//     <NormalText><BoldNormalText>Step 3:</BoldNormalText>Check our rules by following the button below to review our list of accepted and non-accepted items</NormalText>
//     <DonationRules src="/homebutton.png" onClick={()=>r.replace({
//       pathname:"/rules",
//       query:{
//         page:1,
//       }
//     })
//   }>Donation Rules</DonationRules>

//     </div>
//   </div>
// }