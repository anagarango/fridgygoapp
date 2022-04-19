//import {useRouter}
import styled from 'styled-components';
import {PageHeader, SecondPageHeader, NormalCenteredText, BoldNormalText} from '../../comps/text'; 
import CreatorName from '../../comps/creatorname';
// import CreatorName, {BoxedContent} from '../../comps/lists';
import {phoneNumbers} from '../../data/donatelists';
import {DispImg} from '../../comps/backgroundimg';

export const NormalText = styled.span`
    color: #723800;
    font-weight: 400;
    text-align: start;
    padding-left: 10px
`
export const ThirdPageHeader = styled.h3`
    text-align: start;
    color: #723800;
`

export default function ContactPage(){

  return <div class="donatepage">
      <div class="donatecontent">
      <PageHeader>Contact Us</PageHeader>
      <SecondPageHeader>Phone Numbers</SecondPageHeader>
      <ThirdPageHeader>FoodBank:<NormalText>604-535-2423</NormalText></ThirdPageHeader>
      <ThirdPageHeader>Chat:<NormalText>778-985-5763</NormalText></ThirdPageHeader>
      <SecondPageHeader>Creator Info</SecondPageHeader>
      <NormalText>Our mission as Digtal Design and Development Students at BCIT was to spread out more awareness of community fridges in Vancouver by digitalizing it for ease of use and efficiency.</NormalText>
      <CreatorName txt="Ana Arango"></CreatorName>
      <CreatorName txt="Renata Dzotova"></CreatorName>
      <CreatorName txt="Elizabeth Melgarejo-Lazarte"></CreatorName>
      </div>
  </div>
}
