// import { useRef } from "react";
const CntInput = ({bt,setBt}) => {
    
    const minus = () =>{
        setBt(bt - 1);
    }
    
    const plus = () =>{
        setBt(bt + 1);
    }
    // const txt1 = useRef();


    return (
        <>
            <article>
                <div className="grid">
                    <div>
                        <button onClick={minus}>-</button>
                    </div>
                    <div>
                        <input type="text" value={bt} readOnly></input>
                    </div>
                    <div>
                        <button onClick={plus}>+</button>
                    </div>
                </div>
            </article>
        </>
    );
}
export default CntInput;