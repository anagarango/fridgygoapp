import styled from 'styled-components';
import { PageHeader, SecondPageHeader, ThirdPageHeader, FifthPageHeader, NormalText, NormalCenteredText, BoldNormalText } from '../../comps/text';
import HomeButton from '../../comps/homebutton';
import { useRouter } from 'next/router';
import JustforImg from '../../comps/justimg';

const HeaderContain = styled.div`
  width:fit-content;
  height:fit-content;
  padding:70px 0px 30px 0px;
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
    const{type} = r.query;

    return <div class="howitworksPage">
        <div class = "hiw_content">
        <HomeButton></HomeButton>
        <HeaderContain><FifthPageHeader>How it works?</FifthPageHeader></HeaderContain>
        <JustforImg img="fridge.svg"></JustforImg>
        <NormalText>A community fridge is a refrigerator (colloquially "fridge") located in a public space. </NormalText>
        <NormalText>The main aim of community fridges is to reduce food insecurity, while also mitigating food waste. They enable people facing hardship to have easy access to fresh, nutritious food.</NormalText>
        </div>
    </div>
}