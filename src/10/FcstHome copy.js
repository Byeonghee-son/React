import { useState,useRef,useEffect } from "react";
import { Link } from "react-router-dom";
import xy from './getxy.json';
const FcstHome = () => {
    const ops = xy.map((item)=>
        <option value ={item["행정구역코드"]} key={item["행정구역코드"]}>
            {item["1단계"]}
            </option>
    );
    const [dt, setDt] = useState() ;
    const [area, setArea] = useState() ;
    const [x, setX] = useState() ;
    const [y, setY] = useState() ;

    const txt1= useRef();
    const sel1= useRef();

    const getUltraSrtData = (dt,x,y) => {
    let apikey = `XS8eW5EMlErdabDbGqkAgxVFaDgJk%2FO7Pd8JVGkPtcJxDjQIPoZoJB4MtCQ28zXdFZuGjfmpmYP1fAvojYlWsg%3D%3D`
    let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?&pageNo=1&numOfRows=1000&dataType=json&base_time=0500`
    url = url + `&serviceKey=${apikey}`
    url = url + `&base_date=${dt}`
    url = url + `&nx=${x}`
    url = url + `&ny=${y}`

    console.log(url)

    fetch(url)
    .then(response => response.json())
    .then(data=>{setDt(data.response.body.items.item),setArea(data.response.body.items.item),setX(data.response.body.items.item),setY(data.response.body.items.item)})
    .catch(err => {
        console.error(err)
    })

 
    };

const getVilageData = (dt,x,y) => {
    let apikey = `XS8eW5EMlErdabDbGqkAgxVFaDgJk%2FO7Pd8JVGkPtcJxDjQIPoZoJB4MtCQ28zXdFZuGjfmpmYP1fAvojYlWsg%3D%3D`
    let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?&pageNo=1&numOfRows=1000&dataType=json&base_time=0500`
    url = url + `&serviceKey=${apikey}`
    url = url + `&base_date=${dt}`
    url = url + `&nx=${x}`
    url = url + `&ny=${y}`

    console.log(url)

    fetch(url)
    .then(response => response.json())
    .then(data=>{setDt(data.response.body.items.item),setArea(data.response.body.items.item),setX(data.response.body.items.item),setY(data.response.body.items.item)})
    .catch(err => {
        console.error(err)
    })

 
};
    getUltraSrtData(dt,x,y);
    getVilageData(dt,x,y);

    useEffect(()=>{
        console.log('dt', dt)
    },[dt])

    const getDt = () => {
        let tdt = txt1.current.value;
        tdt = tdt.replaceAll('-','');
        setDt(tdt);
    }
    const getSel = () => {
        let temp = xy.filter((item) => item["행정구역코드"] ===parseInt(sel1.current.value))[0] ;
        console.log('temp', temp);
        setArea(temp["1단계"]);
        setX(temp["격자 X"]);
        setY(temp["격자 Y"]);
    }

    return (
        <article>
            <header>단기예보 정보 선택</header>
            <div className="grid">
                <div>
                    <input ref={txt1} type="date" id="date" name="date" onChange={()=>getDt()} />
                </div>
                <div>
                <select ref={sel1} id="sel" name="sel" onChange={()=>getSel()}>
                    <option value="" selected>지역을 선택하세요</option>
                    {ops}
                </select>
                </div>
            </div>
            <footer>
                <div className="grid">
                    <Link to={`/ultra/${dt}/${area}/${x}/${y}`} role='button'>초단기예보</Link>
                    <Link to={`/vilage/${dt}/${area}/${x}/${y}`} role='button'>단기예보</Link>
                </div>
            </footer>
        </article>
    )
}
export default FcstHome;