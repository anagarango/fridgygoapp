import styled from 'styled-components';
import{useRouter} from '../node_modules/next/router';

const Gohomebutton = styled.img`
    width: 85px;
    height: 75px;
    position: absolute;
    right: 20px
`

export default function HomeButton(){
  const r = useRouter();
   return <Gohomebutton src="/homebutton.png" onClick={
        ()=>r.replace({
          pathname:"/contact",
          // query:{
          //   page:1,
          // }
        })
      }></Gohomebutton>
}




export const MovePage = styled.button`
font-size: 18px;
color: white;
background-color: #ED9251;
font-weight: 700;
border: 0px;
border-radius: 10px;
width: 170px;
height: 65px;
padding: 25px;
`

export const NextButton = styled.button`
font-size: 18px;
color: white;
background-color: #ED9251;
font-weight: 700;
border: 0px;
border-radius: 10px;
width: 170px;
height: 65px;
padding: 25px;
box-shadow: 0px 4px 4px 0px #00000040;
`

export default function GoBack({text="Enter Here"}, {move="/contact"}){
const r = useRouter();
return <MovePage onClick={
    ()=>r.replace({
      pathname:{move},
    })
  }>{text}</MovePage>
}


export default function NextStep({query = "/1step"}){
    const r = useRouter();
    return <NextButton onclick ={
        ()=>r.replace({
            query: {query}
        })
    } ></NextButton>
}