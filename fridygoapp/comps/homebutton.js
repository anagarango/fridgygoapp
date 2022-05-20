import styled from 'styled-components';
import{useRouter} from '../node_modules/next/router';

// const Router = useRouter();
// const r = useRouter();

// const Gohomebutton = styled.img`
//     width: 75px;
//     height: 85px
// `
const Gohomebutton = styled.img`
    width: 85px;
    height: 75px;
    position: absolute;
    right: 20px;
    top:10px
`

export default function HomeButton(){
  const r = useRouter();
   return <Gohomebutton src="/homebutton.png" onClick={
        ()=>r.replace({
          pathname:"/",
          // query:{
          //   page:1,
          // }
        })
      }></Gohomebutton>
}