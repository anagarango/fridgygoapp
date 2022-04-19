//import {useRouter}
import {PageHeader, SecondPageHeader, ThirdPageHeader, NormalText, NormalCenteredText, BoldNormalText} from '../../comps/text'; 
import List, {BoxedContent} from '../../comps/lists';
import {acceptedList, notAcceptedList} from '../../data/donatelists';
import {DispImg} from '../../comps/backgroundimg';

export default function ContactPage(){

  return <div class="donatepage">
      <div class="donatecontent">
      <PageHeader>Donate</PageHeader>
    <NormalCenteredText>Help out someone in need from your community by visiting one of your near fridges in 4 easy steps.</NormalCenteredText>
    <NormalText><BoldNormalText>Step 1:</BoldNormalText>Pick a Location</NormalText>
    <NormalText><BoldNormalText>Step 2:</BoldNormalText>See the container below the map to see what items are needed for the fridge</NormalText>
    <NormalText><BoldNormalText>Step 3:</BoldNormalText>Check our rules below to review our list of accepted and non-accepted items</NormalText>
    <NormalText><BoldNormalText>Step 4:</BoldNormalText>Donate the needed item to the fridge in person</NormalText>

    <SecondPageHeader>Rules for Donations</SecondPageHeader>
    <BoxedContent>
        <ThirdPageHeader>Sanitize your hands before and after handling food in the fridge</ThirdPageHeader>
        <ThirdPageHeader>Accepted✅</ThirdPageHeader>
        <List arr={acceptedList}></List>
        <ThirdPageHeader>Not Accepted❌</ThirdPageHeader>
        <List arr={notAcceptedList}></List>
    </BoxedContent>

      </div>
  </div>
}
