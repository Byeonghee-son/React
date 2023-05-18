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
                <Route path='/ultra' element={<UltraSrtFcst/>}/>
                <Route path='/vilage' element={<VilageFcst/>}/>
            </Routes>
        </main>
        </BrowserRouter>
    )
}
export default Fcst;