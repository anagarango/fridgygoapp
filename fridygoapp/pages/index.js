import { HomePageTitle} from '../comps/text'; 

import{useRouter} from 'next/router';

import {ChangePage, HomePage } from '/comps/donatecontainer';
// import "./fridygoapp/styles/global.css"

export default function HomepagePage(){
    const r = useRouter();
    
    
         
      
    return <HomePage>
       
            <HomePageTitle position="relative" top="50em">Welcome to <br></br> FridgyGo</HomePageTitle>
       
            
            
            {/* <Bird></Bird> */}
            <ChangePage position="relative" top="31.5em" bg="#8B967A" onClick={()=>r.replace({
                    pathname:"/pickarea",
                  })
                }>Donate</ChangePage>

                <ChangePage   position="relative" top="32.1em" onClick={()=>r.replace({
                    pathname:"/howitworks",
                  })
                }>How it Works?</ChangePage>
                <ChangePage bg="#8B967A" position="relative" top="32.5em" onClick={()=>r.replace({
                    pathname:"/contact",
                  })
                }>Contact Us</ChangePage>
          
       </HomePage>
}

