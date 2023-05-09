import BoxRows from "./BoxRows";
import './Box.css';
import { useState,useEffect,useRef } from "react";

const Box = () => {
    const[mvlist,setMvlist] = useState();
    let seldt;

    //날짜입력창
    const dt1 = useRef();

    
    // 컴포넌트가 처음 렌더링될 때 초기값 설정
    useEffect(() => {
      let yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      seldt = yesterday.getFullYear();
      let month = yesterday.getMonth()+1;
      month = month < 10 ? `0${month}` : month ;
      
      let day = yesterday.getDate();
      day = day < 10 ? `0${day}` : day; 
      
      seldt = `${seldt}${month}`;
      seldt = `${seldt}${day}`;
    dt1.current.value = `${yesterday.getFullYear()}-${month}-${day}`;
    getData(seldt);
  }, []);

    //날짜선택
    const getDt = () => {
        seldt = dt1.current.value.replaceAll('-','');
        console.log("seldt=" , seldt);
        getData(seldt);

        let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt='
        url = url + seldt;
        console.log("url =", url)
        
        fetch(url)
        .then((resp)=>resp.json())
        .then((data)=> setMvlist(data.boxOfficeResult.dailyBoxOfficeList))
        .catch((err)=> console.log(err))
    }
    const getData = (seldt) => {
        let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt='
        url = url + seldt;
        console.log("url =", url)
        
        fetch(url)
        .then((resp)=>resp.json())
        .then((data)=> setMvlist(data.boxOfficeResult.dailyBoxOfficeList))
        .catch((err)=> console.log(err))
    }
    return (
        <main className="container">
            <article>
                <header>
                    <nav>
                        <ul>
                            <li><h1>일일박스오피스</h1></li>
                        </ul>
                        <ul>
                            <li><input ref={dt1} type="date" id = "dt1" name="dt1" onChange={() => getDt()}></input></li>
                        </ul>
                    </nav>
                    </header>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">순위</th>
                            <th scope="col">영화명</th>
                            <th scope="col">매출액</th>
                            <th scope="col">증감</th>
                        </tr>
                    </thead>
                    
                       {mvlist && <BoxRows mv={mvlist}/>}
                    
                </table>
            </article>
        </main>
    );
}
export default Box;