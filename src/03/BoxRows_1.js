//const BoxRows = (probs) => {
const BoxRows = ({mv}) => {
  //  const mvlist = [...probs.mv];
console.log("boxRows",mv);

let trTags = [];
    for(let row of mv){
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten);
        let icon;
        if(parseInt(row.rankInten) === 0){
            icon = '🟥';
        } else if(parseInt(row.rankInten) > 0){
            icon = '🔺';
        } else if(parseInt(row.rankInten) < 0){
            icon = '🔻';
        };
       trTags.push(
        <tr className="mytr" key={row.movieCd}>
        <td>{row.rank}</td>
        <td>{row.movieNm}</td>
        <td>{parseInt(row.salesAmt).toLocaleString()}</td>
        <td>{icon}{parseInt(row.rankInten) === 0 ? '' : Math.abs(row.rankInten)}</td>
        </tr>
       );
    }
    console.log(trTags);
    return(
        <>
            {trTags}
        </>
    );
}
export default BoxRows;