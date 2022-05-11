import styled from 'styled-components';
import{useRouter} from '../node_modules/next/router';
<<<<<<< HEAD
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

export default function GoBack({text="Enter Here"}, {move="/contact"}){
  const r = useRouter();
   return <MovePage onClick={
        ()=>r.replace({
          pathname:{move},
        })
      }>{text}</MovePage>
=======
import { ChangePage } from '../pages/donate';

export default function GoBack({text="Enter Here", move="/contact"}){
  const r = useRouter();
   return <ChangePage onClick={
        ()=>r.replace({
          pathname:{move}
        })
      }>{text}</ChangePage>
>>>>>>> aef6f794bd770ce5f7108c7524bb58f5131d6b56
}