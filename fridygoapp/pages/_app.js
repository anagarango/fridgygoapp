import '../styles/globals.css'

import { useState } from "react";
import { css } from "@emotion/react";
// import logo from  "./logosvg"
import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

// function App() {
//   const [ loading, setLoading] =useState(false);

//    useEffect(()=>{
//     setLoading(true)
//     setTimeout(()=> {
//      setLoading(false)
//     },5000);
// //  },[])

//   return (
//     <div className="App">
//      {
//         loading?

//          <ClipLoader
//         //  css={override}
//          size={150}
//          color={"#123abc"}
//          loading={this.state.loading}
//           />

//      }
     

//       <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
//       <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

//       <ClipLoader color={color} loading={loading} css={override} size={150} />
//     </div>
//   );
// }
// --------

export default MyApp



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}