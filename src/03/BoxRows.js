import { useState } from "react";
import './BoxRows.module.css';
//const BoxRows = (probs) => {
const BoxRows = ({ mv }) => {
    //  const mvlist = [...probs.mv];
    console.log("boxRows", mv);


    const [footTag, setFootTag] = useState('');


    //클릭된 자료 확인
    const showMv = (row) => {
        setFootTag("영화제목: " + row.movieNm + "개봉일: " + row.openDt);
        console.log(row);
    }




    let trTags = [];
    for (let row of mv) {
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten);
        let icon;
        if (parseInt(row.rankInten) === 0) {
            icon = '🟥';
        } else if (parseInt(row.rankInten) > 0) {
            icon = '🔺';
        } else if (parseInt(row.rankInten) < 0) {
            icon = '🔻';
        };
        trTags.push(
            <tr className="mytr" key={row.movieCd} onClick={() => showMv(row)}>
                <td>{row.rank}</td>
                <td>{row.movieNm}</td>
                <td>{parseInt(row.salesAmt).toLocaleString()}</td>
                <td>{icon}{parseInt(row.rankInten) === 0 ? '' : Math.abs(row.rankInten)}</td>
            </tr>
        );
    }
    console.log(trTags);
    return (
        <>
            <tbody>
                {trTags}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={4}>{footTag}</td>
                </tr>
            </tfoot>

        </>
    );
}
export default BoxRows;