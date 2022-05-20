import { HomePageTitle} from '../comps/text'; 

import{useRouter} from 'next/router';

import {ChangePage, HomePage } from '/comps/donatecontainer';

export default function ContactPage(){
    const r = useRouter();
    

    return <HomePage>
            <HomePageTitle>Welcome to <br></br> FridgyGo</HomePageTitle>
            
            {/* <Bird></Bird> */}
          
            
            <ChangePage position="relative" top="356px" bg="#8B967A" onClick={()=>r.replace({
                    pathname:"/pickarea",
                    // query:{
                    //   page:1,
                    // }
                  })
                }>Donate</ChangePage>

                <ChangePage   position="relative" top="358px" onClick={()=>r.replace({
                    pathname:"/howitworks",
                    // query:{
                    //   page:#,
                    // }
                  })
                }>How it Works?</ChangePage>
                <ChangePage bg="#8B967A" position="relative" top="360px" onClick={()=>r.replace({
                    pathname:"/contact",
                    // query:{
                    //   page:3,S
                    // }
                  })
                }>Contact Us</ChangePage>
              {/* <FoodContainerContact>
                <ChangePage src="/homebutton.png" onClick={()=>r.replace({
                      pathname:"/pickarea",
                      query:{
                        page:1,
                      }
                    })
                  }>Pick Area</ChangePage>
              </FoodContainerContact> */}
            </HomePage>
}
