import dataTaccident from './dataTaccident.json';
import TaccindentNav1 from './TaccindentNav1';
import TaccindentNav2 from './TaccindentNav2';
import { useState,useEffect } from 'react';

const Taccident = () => {
    //console.log(dataTaccident.data);
    const data = dataTaccident.data; //사고건수 obj 배열(15)
    data.map((item) => console.log(item['사고유형_대분류']))
    let c1 = new Set(data.map(item => item.사고유형_대분류)); // 중복 제거된 대분류 집합을 추출
    c1 = [...c1];
    console.log('c1', c1);

    data.map((item) => console.log(item['사고유형_중분류']))
    let c2 = data.map((item => [item.사고유형_대분류, item.사고유형_중분류]))
    console.log('c2', c2);

    const [sel1, setSel1] = useState(0);  //대분류 선택
    const [sel2, setSel2] = useState([]);  //중분류 선택
    const [selData, setSelData] = useState({sel2,});


    useEffect(()=>{
        console.log('Taccident sel1 useeffect []' , sel1);
    },[]);

    useEffect(()=>{
        console.log('Taccident sel1 useeffect [sel1]' , sel1);
    },[sel1]);

    useEffect(()=>{
        console.log('Taccident sel2 useeffect [sel2]' , sel2);
        let temp = data.filter((item)=>
                    item.사고유형_대분류 === sel2[0] && item.사고유형_중분류 === sel2[1])
        setSelData(temp[0]);
    },[sel2]);

    useEffect(()=>{
        console.log('Taccident selData useeffect', selData);
    },[selData]);

    useEffect(()=>{
        console.log('Taccident sel1 useeffect', sel1);
        console.log('Taccident sel2 useeffect', sel2);
    });


    return (
        <main className='container'>
            <article>
                <header>
                    <TaccindentNav1 c1={c1} sel1={sel1} setSel1={setSel1} />
                    <TaccindentNav2 c2={c2} sel1={sel1} sel2={sel2} setSel2={setSel2} />
                </header>
            </article>
        </main>
    );

}

export default Taccident;