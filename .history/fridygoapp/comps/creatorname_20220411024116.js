import styled from 'styled-components';
import {ThirdPageHeader} from '../comps/text'; 
const CreatorImage = styled.img`
    border-radius: 50%
`;
// const CreatorName = styled.h3`
//     margin-top: -10px
// `;
// const PhoneNumbers = styled.span`
//     margin-top: -10px
// `;


export default function CreatorName({imgs=["Item#1", "Item#2", "Item#3"]}, {txt=["Item#1", "Item#2", "Item#3"]}){
    return <div>
    <ThirdPageHeader>{txt}</ThirdPageHeader>
    <CreatorImage src={imgs}></CreatorImage>
    </div>
}