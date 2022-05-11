import {PageHeader, SecondPageHeader, ThirdPageHeader, BoxedContentButtons} from '../../comps/text'; 
import List from '../../comps/lists';
import HomeButton from '../../comps/homebutton';
import {useRouter} from 'next/router';
import {accepted, notaccepted, acceptedList, notAcceptedList} from '../../data/donatelists';
import {useState} from 'react';
import { FoodContainer, CenteredButtonDivs, BoxedContent, ChangePage, WholePage, ButtonContainer } from '../../comps/donatecontainer';


export default function RulesPage(){
  const r = useRouter();
  const {type} = r.query;
  const[popup,setPop]=useState();
  const[popup2,setPop2]=useState();
  const[color, setColor]=useState(0);
  const handleClickOpen=()=>{
      setPop(!popup);
      setPop2(false);

  }
  const handleClickOpen2=()=>{
    setPop2(!popup2);
    setPop(false)
}

  return <WholePage>
      <HomeButton></HomeButton>
      <PageHeader>Donate</PageHeader>
        <FoodContainer>
          <SecondPageHeader>Rules for Donations</SecondPageHeader>
          <ButtonContainer>
            <BoxedContentButtons bg={(color === 1) ?  "#F1AE7E": "#F6D2AD"} onClick={handleClickOpen} onClickCapture={()=>setColor(1)}>{accepted.title}</BoxedContentButtons>
            <BoxedContentButtons bg={(color === 2) ? "#F1AE7E" : "#F6D2AD"} onClick={handleClickOpen2} onClickCapture={()=>setColor(2)}>{notaccepted.title}</BoxedContentButtons>
          </ButtonContainer>
          <BoxedContent>
              <ThirdPageHeader>Sanitize your hands before and after handling food in the fridge</ThirdPageHeader>
              {popup?
              <div>
              <ThirdPageHeader>{accepted.message}</ThirdPageHeader>
                  <List arr={acceptedList}></List>
              </div>
              :""}
              {popup2?
              <div>
              <ThirdPageHeader>{notaccepted.message}</ThirdPageHeader>
                  <List arr={notAcceptedList}></List>
              </div>
              :""}
          </BoxedContent>
          <CenteredButtonDivs>
            <ChangePage onClick={()=>r.replace({
              pathname:"/donate",
              query:{
                page:2,
                type: type
                }
              })
            }>Go Back to Donate</ChangePage> 
    </CenteredButtonDivs>
        </FoodContainer>
      {/* </CenteredDiv> */}
    </WholePage>
}
