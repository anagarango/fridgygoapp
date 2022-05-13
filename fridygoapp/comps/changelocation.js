import styled from 'styled-components';
import{useRouter} from '../node_modules/next/router';
import { ChangePage } from '../pages/donate';

export default function GoBack({text="Enter Here", move="/contact"}){
  const r = useRouter();
   return <ChangePage onClick={
        ()=>r.replace({
          pathname:{move}
        })
      }>{text}</ChangePage>
}