import styled from 'styled-components';
import { PageHeader, SecondPageHeader, ThirdPageHeader, FifthPageHeader, NormalText, NormalCenteredText, BoldNormalText, WhiteText } from '../../comps/text';
import HomeButton from '../../comps/homebutton';
import { useRouter } from 'next/router';
import JustforImg from '../../comps/justimg';
import { NextStepButton } from '../../comps/nextStepButton';
import { ButtonNext } from '../../data/howitworksData';
import { DivForImg } from '../../comps/justimg';
import { MapImg } from '../../comps/map';
import FoodItemDisplay from '../../comps/food_item';
import { richmImgs, burnImgs} from '../../data/food_data';

const HeaderContain = styled.div`
  padding:70px 0px 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ChangePage = styled.button`
    font-size: 18px;
    color: white;
    background-color: #ED9251;
    font-weight: 700;
    border: 0px;
    border-radius: 10px;
    width: 170px;
    height: 65px;
    margin: 15px;
`



export default function HowitworksPage(){
    const r = useRouter();
    var{type} = r.query;

  if (type === undefined){
    type=0;
  }

  type=Number(type);

  return <div class="howitworksPage">
      <div class = "hiw_content">
      <HomeButton></HomeButton>
      {type === 0 &&
      <div class = "divforHIW">
      <HeaderContain><FifthPageHeader>How it works?</FifthPageHeader></HeaderContain>
      <div><DivForImg><WhiteText width = "200px" left="220px" top="250px">What are community fridges?</WhiteText></DivForImg></div>
      <NormalText>A community fridge is a refrigerator (colloquially "fridge") located in a public space. </NormalText>
      <NormalText>The main aim of community fridges is to reduce food insecurity, while also mitigating food waste. They enable people facing hardship to have easy access to fresh, nutritious food.</NormalText>
      <NextStepButton onClick = {
          ()=>r.push({
              pathname:"/howitworks",
              query:{
                type:Number(type) + 1
              //   type:ButtonNext.Number(route)+1,
              }
            })
      }>Step 1</NextStepButton>
      </div>
      }
      {type === 1 &&
      <div class = "divforHIW">
      <HeaderContain><FifthPageHeader weight="800px" size="38px">1. Pick a location of your choice</FifthPageHeader></HeaderContain>
      <DivForImg b_img="url(/map_forHIW.png)" width = "300px" height = "150px"></DivForImg>
      <DivForImg b_img="url(/hand.svg)" width = "300px" height = "250px" position = "relative" top = "-100px" left = "60px"></DivForImg>

      <NextStepButton color="#5B3713" backgroundColor = "#F8E0C9" width = "240px" onClick = {
          ()=>r.push({
              pathname:"/pickarea",
              query:{
                type: 1
              }
            })
      }>Pick location</NextStepButton>

      <NextStepButton onClick = {
          ()=>r.push({
              pathname:"/howitworks",
              query:{
                type:Number(type) + 1
              //   type:ButtonNext.Number(route)+1,
              }
            })
      }>Step 2</NextStepButton>
      </div>
      }
      {type === 2 &&
      <div class = "divforHIW">
      <HeaderContain><FifthPageHeader weight="800px" size="38px">2. Check what items are needed in the fridge</FifthPageHeader></HeaderContain>
      <DivForImg b_img="url(/fooditems.png)" width = "470px" height = "130px"></DivForImg>
      {/* <FoodItemDisplay arr={burnImgs}></FoodItemDisplay> */}

      <NextStepButton color="#5B3713" backgroundColor = "#F8E0C9" width = "240px" onClick = {
          ()=>r.push({
              pathname:"/donate",
              query:{
                type: "bur"
              }
            })
      }>Check items</NextStepButton>

      <NextStepButton onClick = {
          ()=>r.push({
              pathname:"/howitworks",
              query:{
                type:Number(type) + 1
              //   type:ButtonNext.Number(route)+1,
              }
            })
      }>Step 3</NextStepButton>
      </div>
      }
      {type === 3 &&
      <div class = "divforHIW">
      <HeaderContain><FifthPageHeader weight="800px" size="38px">3. Check the rules of donation</FifthPageHeader></HeaderContain>
      <NextStepButton color="#5B3713" backgroundColor = "#F8E0C9" width = "240px" onClick = {
          ()=>r.push({
              pathname:"/rules",
              query:{
                type: "bur"
              }
            })
      }>Check the rules</NextStepButton>

      <NextStepButton onClick = {
          ()=>r.push({
              pathname:"/howitworks",
              query:{
                type:Number(type) + 1
              //   type:ButtonNext.Number(route)+1,
              }
            })
      }>Step 4</NextStepButton>
      </div>
      }
      {type === 4 &&
      <div class = "divforHIW">
      <HeaderContain><FifthPageHeader weight="800px" size="38px">4. Bring donated items to the fridge of your choice</FifthPageHeader></HeaderContain>
      <DivForImg b_img="url(/correct.png)" width = "300px" height = "300px"></DivForImg>
      <NextStepButton onClick = {
          ()=>r.push({
              pathname:"/pickarea",
              query:{
                page: 1
              //   type:ButtonNext.Number(route)+1,
              }
            })
      }>Donate</NextStepButton>
      </div>
      }
      </div>
  </div>
}

// что если куери.тайп и куери.мэппойнт