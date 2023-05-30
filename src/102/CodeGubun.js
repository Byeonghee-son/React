import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { codeAtom } from "./CodeAtom";

const CodeGubun = () => {
    const [sel, setSel] = useRecoilState(codeAtom);
    
    const selItem = (e) => {
        console.log(e.target.value);
        setSel(e.target.value);
    }
    useEffect(() => {
        console.log(sel);
    }, [sel]);




    return (
        <>
            <form>
                <div className="grid">
                    <div>
                        <select id="sel" name="sel" onChange={selItem}>
                            <option value="">선택</option>
                            <option value="단기예보">단기예보</option>
                            <option value="초단기예보">초단기예보</option>
                        </select>
                    </div>
                </div>
            </form>
        </>
    )
}
export default CodeGubun;