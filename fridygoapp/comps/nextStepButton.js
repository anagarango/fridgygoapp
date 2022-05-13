import styled from 'styled-components';
import{useRouter} from '../node_modules/next/router';



export const NextStepButton = styled.button`
font-size: 18px;
color: ${props=>props.color || "#FFFFFF"};
background-color: ${props=>props.backgroundColor || "#ED9251;"};
font-weight: 700;
border: 0px;
border-radius: 10px;
width: ${props=>props.width || "170px"};
height: 50px;
box-shadow: 0px 4px 4px 0px #00000040;
display: flex;
justify-content: center;
align-items: center;
margin: 30px;
`

{/* <ChangePage onClick={()=>r.replace({
  pathname:"/rules",
  query:{
    type:type
  }
})
}>Fridge Donation Rules</ChangePage>

<MapButtons src={burn.img} onClick={
  ()=>r.push({
    pathname:"/donate",
    query:{
      type:burn.route,
    }
  })
}>
</MapButtons>


export default function NextStep({query = "/1step"}){
    const r = useRouter();
    return <NextButton onclick ={
        ()=>r.replace({
            query: {query}
        })
    } ></NextButton>
} */}