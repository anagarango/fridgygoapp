import React from 'react';
import { Route, Routes, useLocation} from "react-router-dom";
import {MapButtons} from '../comps/food_item';
import {burn, dtvan, richm, surr} from '../data/food_data';
import Gohomebutton from '../comps/homebutton';
import {AnimatePresence} from "framer-motion";
import ContactPage from "../pages/contact"
// function HomeButtonAnimated(){
//     const location = useLocation();
//     return <Routes location={location} key={location.pathname}>
//         <Route element={<Gohomebutton src="/homebutton.png" onClick={
//         ()=>r.replace({
//           pathname:"/"
//         })
//       }></Gohomebutton>}>
//         </Route>
//     </Routes>
// }

export function AnimatedRoutes(){
    const location = useLocation();

    return <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/contact" element={<ContactPage />}></Route>
                {/* <Route element={<MapButtons src={dtvan.img} onClick={
                        ()=>r.replace({
                            pathname:"/donate",
                            query:{
                            type:dtvan.route
                            }
                        })
                        }>
                        </MapButtons>}>
                </Route>
                <Route element={<MapButtons src={richm.img} onClick={
                        ()=>r.replace({
                            pathname:"/donate",
                            query:{
                            type:richm.route
                            }
                        })
                        }>
                        </MapButtons>}>
                </Route>
                <Route element={<MapButtons src={surr.img} onClick={
                        ()=>r.replace({
                            pathname:"/donate",
                            query:{
                            type:surr.route
                            }
                        })
                        }>
                        </MapButtons>}>
                </Route> */}
            </Routes>
        </AnimatePresence> 
}