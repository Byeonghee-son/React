import code from '../101/getcode.json';
import { useRecoilState, useRecoilValue } from 'recoil';
import { codeAtom } from './CodeAtom';

const CodeList = () => {
    const sell = useRecoilValue(codeAtom);
    const [sell2, setSel2] = useRecoilState(codeAtom);

    let temp = code.filter((i) => i["예보구분"]=== sell)
    console.log(temp);

    let opTags = temp.map((i) =>
        <option key={i["항목값"]} value={i["항목값"]}>{i["항목명"]}({i["항목값"]})</option>
    );
    const selItem2 = (e) => {
        setSel2(e.target.value)
    }
    
    return(
        <>
            <select id='sel2' name='sel2' defaultValue='' onChange={selItem2}>
                <option value=''>선택</option>
                {opTags}

            </select>
        </>
    )
}
export default CodeList;
