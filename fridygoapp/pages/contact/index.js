import {PageHeader, SecondPageHeader, NormalText} from '../../comps/text'; 
import CreatorName, { FoodBankInfo, ImageContact } from '../../comps/creatorname';
import{useRouter} from 'next/router';
import {ana, ren, eli, organizationloc, orfbname, orfbnum, orfbaddress, orfbnumlink} from '../../data/creator_data';
import HomeButton from '../../comps/homebutton'
import { FoodContainerContact, ChangePage, WholePage } from '../../comps/donatecontainer';

export default function ContactPage(){

    const r = useRouter();

  return <WholePage>
          <HomeButton></HomeButton>
          <PageHeader>Contact Us</PageHeader>
            <FoodContainerContact>
              <SecondPageHeader>Got too many food donations? Contact a local foodbank listed below.</SecondPageHeader>
              <FoodBankInfo txt={orfbname.fb1} txt2={orfbaddress.fb1} txt3={orfbnumlink.fb1} txt4={orfbnum.fb1}></FoodBankInfo>
              <FoodBankInfo txt={orfbname.fb2} txt2={orfbaddress.fb2} txt3={orfbnumlink.fb2} txt4={orfbnum.fb2}></FoodBankInfo>
              <FoodBankInfo txt={orfbname.fb3} txt2={orfbaddress.fb3} txt3={orfbnumlink.fb3} txt4={orfbnum.fb3}></FoodBankInfo>
              <SecondPageHeader>~</SecondPageHeader>
              <SecondPageHeader>Visit Us At Our Headquarters</SecondPageHeader>
              <ImageContact txt={organizationloc.locationname} txt2={organizationloc.locationdata} img={"/organizationlocation.png"} img2={"/pinpoint.svg"}></ImageContact>
              <SecondPageHeader>~</SecondPageHeader>
              <SecondPageHeader>Creator Info</SecondPageHeader>
              <NormalText>Our mission as Digital Design and Development Students at BCIT was to spread out more awareness of community fridges in Vancouver by digitalizing it for ease of use and efficiency.</NormalText>
              <PageHeader></PageHeader>
              <CreatorName txt={ana.title} img={ana.img}></CreatorName>
              <CreatorName txt={ren.title} img={ren.img}></CreatorName>
              <CreatorName txt={eli.title} img={eli.img}></CreatorName>
              {/* <GoBack text="TRYING TO MAKE THIS BUTTON WORK" move="/pickarea"></GoBack> */}
              {/* <ChangePage src="/homebutton.png" onClick={()=>r.replace({
                    pathname:"/pickarea",
                    query:{
                      page:1,
                    }
                  })
                }>Pick Area</ChangePage> */}
            </FoodContainerContact>
          </WholePage>
}

{/* <Gohomebutton src="/homebutton.png" onClick={()=>r.replace({
  pathname:"/contact",
  query:{
    page:1,
  }
  })
}></Gohomebutton> */}
