import styled from 'styled-components';
import {ThirdPageHeader} from '../comps/text'; 

// const CreatorName = styled.h3`
//     margin-top: -10px
// `;
// const PhoneNumbers = styled.span`
//     margin-top: -10px
// `;


// export default function PhoneNumber({arr=["Item#1", "Item#2"]}){
//     return{arr.map((o)=><PhoneNumber info={o}></Item>)}
//             {/* <Item txt="Item#1"></Item>   */}
//             {/* calling one component to come here */}
// }

export default function CreatorName({txt=["Item#1", "Item#2", "Item#3"]}){
    return <ThirdPageHeader>{txt}</ThirdPageHeader>
}