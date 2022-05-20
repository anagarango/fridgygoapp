import styled from 'styled-components';
export const PageHeader = styled.h1`
    text-align: center;
    color: #723800;
    margin: 35px 0px
`
export const SecondPageHeader = styled.h2`
    text-align: center;
    color: #723800
`
export const ThirdPageHeader = styled.h3`
    text-align: start;
    color: #723800
`

export const FifthPageHeader = styled.span`
    text-align: center;
    color: #723800;
    font-size: ${props=>props.size|| "46px"};
    font-weight: ${props=>props.weight || "bold"};
`


export const NormalCenteredText = styled.p`
    color: #723800;
    text-align: center;
`
export const NormalText = styled.p`
    color: #723800;
    padding-left: 20px;
    padding-right: 20px;
    // text-align: start;
`

export const WhiteText = styled.p`
    color: #FFFFFF;
    text-shadow: 0px 4px 4px #00000040;
    font-weight: 800;
    width: ${props=>props.width || "100px"};
    text-align: center;
    font-size: 30px;
    position: relative;
    left: ${props=>props.left || "100px"};
    top: ${props=>props.top || "100px"};
`


export const BoldNormalText = styled.span`
    color: #723800;
    text-align: left;
    font-weight:800;
    padding-right:5px
`

export const BoxedContentButtons = styled.h3`
    background-color: ${props=>props.bg || "rgba(233, 233, 233, 0.9)"};
    border: 7px #8B967A solid;
    width: 50%;
    height: 75px;
    border-radius: 15px 15px 0px 0px;
    display:flex;
    justify-content:center;
    align-items:center;
    color: #723800;
`;

export const HomePageTitle = styled.h1`
    text-align: center;
    color: #ffff;
    margin: 90px 0px
`