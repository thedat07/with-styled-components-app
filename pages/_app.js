import '../styles/globals.css'
import 'antd/dist/antd.css';
import '../styles/fonts.css';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import {AnimatePresence} from 'framer-motion'
function MyApp({ Component, pageProps }) {
  
  return (
    <AnimatePresence exitBeforeEnter> <Component {...pageProps} /></AnimatePresence>
  )
}

export default MyApp
