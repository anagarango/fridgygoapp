import styled from 'styled-components';


export default function Donate(){
    return <div class="donatepage">
    <div class="donatecontent">
        <img class="homebutton" onClick="" src="/homebutton.png"></img>
        <h1>Donate</h1>
        <p>Help out someone in need from your community by visiting one of your near fridges in 4 easy steps</p>
        <p class="donatetext"><span class="steps">Step 1:</span> Pick a Location</p>
        <p class="donatetext"><span class="steps">Step 2:</span> See the container below the map to see what items are needed for the fridge</p>
        <p class="donatetext"><span class="steps">Step 3:</span> Check our rules below to review our list of accepted and non-accepted items</p>
        <p class="donatetext"><span class="steps">Step 4:</span> Donate the needed item to the fridge in person</p>
        <h2>Rules for Donations</h2>
        <div class="rulesfordonations donatetext">
            <h3>Sanitize your hands before and after handling food in the fridge</h3>
        </div>
    </div>
    
</div>
}

// import styled from 'styled-components';
// const NormalText = styled.p`
//     color: #723800
// `
// const BoldedText = styled.p`
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

