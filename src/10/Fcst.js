import { BrowserRouter, Routes, Route } from "react-router-dom";
import FcstHome from "./FcstHome";
import FcstNav from "./FcstNav";
import UltraSrtFcst from "./UltraSrtFcst";
import VilageFcst from "./VilageFcst";

const Fcst = () =>{

    return(
        <BrowserRouter>
        <main className="container">
            <FcstNav />
            <Routes>
                <Route path='/' element={<FcstHome/>}/>
                <Route path='/ultra/:dt/:area:/:x/:y' element={<UltraSrtFcst/>}/>
                <Route path='/vilage/:dt/:area:/:x/:y' element={<VilageFcst/>}/>
            </Routes>
        </main>
        </BrowserRouter>
    )
}
export default Fcst;