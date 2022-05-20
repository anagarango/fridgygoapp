import { HomePageTitle} from '../comps/text'; 
import{useState,useEffect}from'react'
import { css } from "@emotion/react";
import{useRouter} from 'next/router';
import RingLoader from "react-spinners/RingLoader";
import {ChangePage, HomePage } from '/comps/donatecontainer';
// import "./fridygoapp/styles/global.css"
const override = css`
  display: flex;
  margin: 10vh;
  border-color: red;
  top: 20vh;
  background-fill: coral;
`;
export default function HomepagePage(){
    const r = useRouter();
    
    const[loading,setLoading]= useState(false)
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },5000)
    },[])
      


     return  <div className='Home'>
       
          {
           loading ?
            <RingLoader color={'#F5A623'} loading={loading} css={override} size={300}  position={"fixed"} />
            : 
            <HomePage>
               <HomePageTitle position="relative" top="50em">Welcome to <br></br> FridgyGo</HomePageTitle>
    
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
     </div>
     
    ;
}

           