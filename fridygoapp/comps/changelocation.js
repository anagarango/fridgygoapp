import styled from 'styled-components';
import{useRouter} from '../node_modules/next/router';
 export const MovePage = styled.button`
    font-size: 18px;
    color: white;
    background-color: #ED9251;
    font-weight: 700;
    border: 0px;
    border-radius: 10px;
    width: 170px;
    height: 65px;
`

export default function GoBack({text="Enter Here"}, {move="/contact"}){
  const r = useRouter();
   return <MovePage onClick={
        ()=>r.replace({
          pathname:{move},
        })
      }>{text}</MovePage>
}