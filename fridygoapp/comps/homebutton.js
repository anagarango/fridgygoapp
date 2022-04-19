import styled from 'styled-components';
import{useRouter} from '../node_modules/next/router';

// const Router = useRouter();
// const r = useRouter();

const Gohomebutton = styled.img`
    width: 75px;
    height: 85px
`

export default function HomeButton(){
   return <Gohomebutton src="/homebutton.png" onClick={
        ()=>r.replace({
          pathname:"/contact",
          query:{
            page:1,
          }
        })
      }></Gohomebutton>
}