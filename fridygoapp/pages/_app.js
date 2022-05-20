import '../styles/globals.css';
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
  <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit ="pageExit" variants={{
    pageInitial: {
      position: "relative",
      width:"100vw",
      left: "-100vw",
      // opacity:0,
      animation: "slide-in",
      transform: "skew(25deg)"

    },
    pageAnimate: {
      position: "relative",
      width:"100vw",
      left:0,
      // opacity:1,
      animation: "slide-in",
      transform: "skew(0deg)"
    },

    pageExit: {
      position: "relative",
      width:"100vw",
      left:"100vw",
      // opacity:1,
      animation: "slide-in",
      transform: "skew(0deg)"
    }
  }}>
  <Component {...pageProps} />
  </motion.div>
  )}

export default MyApp
