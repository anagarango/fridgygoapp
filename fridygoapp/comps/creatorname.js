import styled from 'styled-components';

const CreatorImage = styled.img`
    object-fit:cover;
    border-radius: 50%;
    width:100px;
    height:100px;
`;
const FlexDiv= styled.div`
    display:flex;
    align-items: center
`
const ThirdPageHeader = styled.h3`
    padding-left: 50px
`
// const CreatorName = styled.h3`
//     margin-top: -10px
// `;
// const PhoneNumbers = styled.span`
//     margin-top: -10px
// `;


export default function CreatorName({txt=["Item#1", "Item#2", "Item#3"]}, {ig="/homebutton.png"}){
    return <FlexDiv>
    <CreatorImage src={ig}></CreatorImage>
    <ThirdPageHeader>{txt}</ThirdPageHeader>
    </FlexDiv>
}