// import styled from 'styled-components';
// const NormalText = styled.p`
//     color: #723800
// `
// const BoldedText = styled.span`
//     font-weight:900;
//     color: #723800
// `;

// export default function Donate(){
//     return <div>
//     <NormalText>Donate</NormalText>
//     <NormalText>Help out someone in need from your community by visiting one of your near fridges in 4 easy steps</NormalText>
//     <NormalText><BoldedText>Step 1:</BoldedText> Pick a Location</NormalText>
// </div>
// }



import styled from 'styled-components';

const DispCont = styled.div`
  display:flex;
`;

const DispImg = styled.div`
  object-fit: cover;
  width:100%;
  height: 100%
`;

const ImgCont = styled.div`
  width:100px
  border: #DAD solid 7px;
  border-radius: 10px;
  margin:10px
`;


export default function Display({arr=[]}){

  return <DispCont>
    {
      arr.map((o,i)=><ImgCont>
        <DispImg src={o} height={100}></DispImg>
      </ImgCont>)
    }
  </DispCont>
}
