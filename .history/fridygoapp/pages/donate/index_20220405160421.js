import styled from 'styled-components';
const NormalText = styled.p`
    color: #723800
`
const BoldedText = styled.span`
    font-weight:900;
    color: #723800
`;

export default function Donate(){
    return <div>
    <NormalText>Donate</NormalText>
    <NormalText>Help out someone in need from your community by visiting one of your near fridges in 4 easy steps</NormalText>
    <NormalText><BoldedText>Step 1:</BoldedText> Pick a Location</NormalText>
</div>
}

