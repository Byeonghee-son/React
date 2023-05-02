//const MyDivArticle = (probs) => {     
//매개변수를 probs 사용하지 않고 오브젝트에 매개변수명을 넣어서 사용
// import './MyDiv.css';
import style from './MyDiv.module.css';
import { useState } from 'react';  //state 변수 사용 1단계
import React from 'react';

const MyDivArticle = ({ aname }) => {
    //const aname = probs.aname;
    let n = (aname === undefined) ? '0' : aname.slice(-1);
    const [cnt, setCnt] = useState(0);  //state 변수 사용 2단계 무조건 배열사용!!
    
    
    
    //Click 이벤트 처리
    const like = ()=>{
       // cnt = cnt +2;
       setCnt(cnt+1);  //state 변수 사용 3단계 :변수 내용 변경
        console.log(cnt+1)}
   
    return (
        <article>
            <header><h1 className={style.mah1}>{aname || 'MyDiv0'}</h1></header>
            <ul className={style.aul}>
                <li className={style.ali}>{n === '0' ? 'MyDiv0' : 'MyDiv' + n} </li>
                <li className={style.ali}>{'MyDiv' + n}</li>
            </ul>
            {n ==='1' &&            
            <footer>
                {/* 매개변수 함수를 쓸때에는 {() => like(2)} 이런식으로 써야한다 */}
                <h2><span onClick={() => like(2)}>❤</span> {cnt}</h2>   
            </footer>
            }
        </article>
    );
}

export default MyDivArticle;