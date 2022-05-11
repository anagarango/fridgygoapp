import styled from 'styled-components';
import { BoldNormalText, NormalText, ThirdPageHeader } from './text';

const CreatorImage = styled.img`
    object-fit:cover;
    border-radius: 50%;
    width:100px;
    height:100px;
`;
export const FlexDiv= styled.div`
    display:flex;
    align-items: center;
    padding:10px
`
export const FlexDiv2= styled.div`
    display:flex;
    flex-direction: column;
    align-items: left;
    padding:0px
`
const ThirdPageHeader2 = styled.h3`
    padding-left: 8%;
    text-align:start;
    color: #723800;
`
const NormalTextHere = styled.a`
    padding:0px;
    color: #723800;
    text-align: start;
    margin-top:-8px;
    font-weight:400
`
const BoldNormalTextHere = styled.span`
    padding:0px;
    color: #723800;
    text-align: start;
    font-weight:800;
    padding-right:5px;
    padding-bottom:10px
`
const BoldNormalTextLast = styled.span`
    padding:0px;
    color: #723800;
    text-align: start;
    font-weight:800;
    padding-right:5px;
    padding-bottom:30px
`

const PhoneNumberLink = styled.a`
    padding:0px;
    color: #723800;
    text-align: start;
    text-decoration:underline;
    font-weight:400
  
`

// export default function CreatorName({
//     txt=["Item#1", "Item#2", "Item#3"],
//     img="/donatebackground.svg",
//     onClickImg=()=>{}
// }){
//     return <div>
//     <CreatorImage onClick={onClickImg} src={img}></CreatorImage>

const MapImage = styled.img`
    border-radius: 5%;
    width:88%;
    height:170%;
    position:absolute
`;
const Div = styled.div`
    height:310px;
    display:flex;
    justify-content:center;
`
const Div2 = styled.div`
    width:80%;
    display:flex;
    align-items:center;
    flex-direction:column;
    position:absolute
`
const Pinpoint = styled.img`
    width:70px;
    height:70px;
    position:relative;
    top:70px;
`
export const BoxedContentButtonsBold = styled.div`
    background-color:rgba(226, 219, 207, 0.9);
    padding: 15px 10px 5px 10px;
    border: 7px #8B967A solid;
    border-radius: 15px;
    position:relative;
    text-align:center;
    top:110px;
`;



export default function CreatorName({txt=["Item#1", "Item#2", "Item#3"], img="/homebutton.png"}){
    return <FlexDiv>
    <CreatorImage src={img}></CreatorImage>
    <ThirdPageHeader2>{txt}</ThirdPageHeader2>
    </FlexDiv>
}
export function FoodBankInfo({txt="foodname",txt2="address", txt3="phonenumlink", txt4="phonenum"}){
    return <FlexDiv2>
    <ThirdPageHeader>{txt}</ThirdPageHeader>
    <BoldNormalTextHere>Address: <NormalTextHere>{txt2}</NormalTextHere></BoldNormalTextHere>
    <BoldNormalTextLast>Phone Number: <PhoneNumberLink href={txt3}>{txt4}</PhoneNumberLink></BoldNormalTextLast>
    </FlexDiv2>
}
export function ImageContact({txt="locationtitle", txt2="locationname", img="/homebutton.png", img2="/homebutton.png"}){
    return <Div>
        <Div2>
            <MapImage src={img}></MapImage>
            <Pinpoint src={img2}></Pinpoint>
            <BoxedContentButtonsBold>
                <BoldNormalText>{txt}</BoldNormalText>
                <NormalText>{txt2}</NormalText>
            </BoxedContentButtonsBold>
        </Div2>
    </Div>
}