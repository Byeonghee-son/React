import { useState, useEffect} from "react";
import CntDisp from "./CntDisp";
import CntInput from "./CntInput";
const Cnt = () => {
    const [bt,setBt] = useState(0);
    if(bt < 0){
        setBt(0);
    }
    
    useEffect(()=>{
        console.log("bt", bt)
    },[bt]);
    
    return (
        <>
            <main className="container">
                <CntInput bt={bt} setBt={setBt} />
                <CntDisp bt ={bt} />
            </main>
        </>
    );

}
export default Cnt;