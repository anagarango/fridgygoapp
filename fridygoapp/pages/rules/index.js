//import {useRouter}
import styled from 'styled-components';
import {PageHeader, SecondPageHeader, ThirdPageHeader, NormalText, NormalCenteredText, BoldNormalText} from '../../comps/text'; 
import List from '../../comps/lists';
import {acceptedList, notAcceptedList} from '../../data/donatelists';
import {DonationRules, Gohomebutton} from '../donate/index';
import HomeButton from '../../comps/homebutton'
import{useRouter} from 'next/router';
import {DispImg} from '../../comps/backgroundimg';

export const BoxedContentButtons = styled.div`
    background-color: rgba(233, 233, 233, 0.9);
    padding: 0px 20px;
    border: 7px #8B967A solid;
    width: 50%;
    height: 75px;
    border-radius: 15px 15px 0px 0px;
`;

export const BoxedContent = styled.div`
    background-color: rgba(233, 233, 233, 0.9);
    padding: 15px 30px;
    border: 7px #8B967A solid;
    border-radius: 0px 0px 15px 15px;
`;

export const ButtonNames = styled.h2`
    padding: 0
`

export default function DonatePage(){
  const r = useRouter();

  return <div class="donatepage">
      <div class="donatecontent">
      <Gohomebutton src="/homebutton.png" onClick={()=>r.replace({
      pathname:"/contact",
      query:{
        page:1,
      }
    })
  }></Gohomebutton>
    <SecondPageHeader>Rules for Donations</SecondPageHeader>
    <div class="flexbuttons">
      <BoxedContentButtons onClick={
        ()=>r.replace({
          pathname:"/contact",
          query:{
            type:cat1.route
          }
        })
      }><ButtonNames>Accepted✅</ButtonNames></BoxedContentButtons>
      <BoxedContentButtons><ButtonNames>Rejected❌</ButtonNames></BoxedContentButtons>
    </div>
    
    <BoxedContent>
        <ThirdPageHeader>Sanitize your hands before and after handling food in the fridge</ThirdPageHeader>
        <ThirdPageHeader>Accepted✅</ThirdPageHeader>
        <List arr={acceptedList}></List>
        <ThirdPageHeader>Not Accepted❌</ThirdPageHeader>
        <List arr={notAcceptedList}></List>
    </BoxedContent>
    <NormalText><BoldNormalText>Step 4:</BoldNormalText>Donate the needed item to the fridge in person</NormalText>
    <DonationRules src="/homebutton.png" onClick={()=>r.replace({
      pathname:"/donate",
      query:{
        page:1,
      }
    })
  }>Go Back to Donate</DonationRules>
 
    </div>
  </div>
}