import { useState,useRef,useEffect } from "react";
import { Link } from "react-router-dom";
import xy from './getxy.json';
const FcstHome = () => {
    const ops = xy.map((item)=>
        <option value ={item["행정구역코드"]} key={item["행정구역코드"]}>
            {item["1단계"]}
            </option>
    );
const [data, setData] = useState();
const date = useRef();
const sel = useRef();

const getData = () => {
    let apikey = `XS8eW5EMlErdabDbGqkAgxVFaDgJk%2FO7Pd8JVGkPtcJxDjQIPoZoJB4MtCQ28zXdFZuGjfmpmYP1fAvojYlWsg%3D%3D`
    let url = 
}


    return (
        <article>
            <header>단기예보 정보 선택</header>
            <div className="grid">
                <div>
                    <input type="date" id="date" name="date" />
                </div>
                <div>
                <select id="sel" name="sel">
                    <option value="" selected>지역을 선택하세요</option>
                    {ops}
                </select>
                </div>
            </div>
            <footer>
                <div className="grid">
                    <Link to='/ultra' role='button'>초단기예보</Link>
                    <Link to='/vilage' role='button'>단기예보</Link>
                </div>
            </footer>
        </article>
    )
}
export default FcstHome;