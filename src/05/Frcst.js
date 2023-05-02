import data from './dataFrcst.json';
import style from './Frcst.module.css';
import { useState } from 'react';
//console.log(data);


const Frcst = () => {
    const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"]
    const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"]

    //dtKey.map((item) => console.log(data[item]))
    //cnKey.map((item) => console.log(data[item]))

    //오브젝트
    let dtcn = {};
    dtKey.map((item, idx) => (dtcn[data[item]] = data[cnKey[idx]]));
    //console.log(dtcn)
    //onclick 했을때 hover 가 계속 남아있게하기
    const [selDt, setselDt] = useState();
    
    //상세정보
    const [cnTag, setcnTag] = useState();
    const detail = (k) => {
        let dtcnItem = dtcn[k].split(',')
        setselDt(k);
        dtcnItem = dtcnItem.map((item) => item.split(':'))
        dtcnItem = dtcnItem.map((item) =>
            <div key={item[0]}>
                <span className={style.sp1}>{item[0]}</span>
                {item[1].trim() ==='낮음'?<span className={style.sp21}>{item[1]+'😀'}</span>
                    :[item[1].trim() ==='보통'?<span className={style.sp22}>{item[1]+'😐'}</span>
                        :<span className={style.sp23}>{item[1]+'😷'}</span>]}
                {/* //<span className={style.sp2}>{item[1]}</span> */}
            </div>
        )
        console.log(dtcnItem)
        setcnTag(dtcnItem);
        
    }

    let dtTag = [];
    dtTag = Object.keys(dtcn).map((item, idx) =>
        <div className={selDt === item ? style.dt1 : style.dt}
            key={'dt' + idx}
            onClick={() => detail(item)}>
            {item}
        </div>
    );

    return (
        <main className='container'>
            <article>
                <header>
                    <h1>초미세먼지 주간예보🤬</h1>
                    <div className='grid'>
                        {dtTag}
                    </div>
                </header>
                
                <div className='grid'>
                    {cnTag}
                </div>
                
            </article>

        </main>
    );
}
export default Frcst; 