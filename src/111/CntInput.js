import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { CntAtoms } from "./CntAtoms";

const CntInput = () => {
    const [n, setN] = useRecoilState(CntAtoms);
    
    const minus = () => {
        if(n -1 < 0) setN(0);
        else setN(n - 1);
    }

    const plus = () => {
        if(n+1 > 10) setN(10);
        else setN(n + 1);
    }



    return (
        <>
            <article>
                <div className="grid">
                    <div>
                        <button onClick={minus}>-</button>
                    </div>
                    <div>
                        <input type="text" value={n} readOnly></input>
                    </div>
                    <div>
                        <button onClick={plus}>+</button>
                    </div>
                </div>
            <footer>
                <Link to='/disp'>출력화면 이동</Link>
            </footer>
            </article>
        </>
    );
}
export default CntInput;