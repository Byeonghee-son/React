import FcstTable from "./FcstTable";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
const UltraSrtFcst = () =>{
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;

    const [fdata, setFdata] = useState();
    useEffect(()=>{
        
            let apikey = `XS8eW5EMlErdabDbGqkAgxVFaDgJk%2FO7Pd8JVGkPtcJxDjQIPoZoJB4MtCQ28zXdFZuGjfmpmYP1fAvojYlWsg%3D%3D`
            let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?&pageNo=1&numOfRows=1000&dataType=json&base_time=0500`
            url = url + `&serviceKey=${apikey}`
            url = url + `&base_date=${dt}`
            url = url + `&nx=${x}`
            url = url + `&ny=${y}`
        
            console.log(url)

            fetch(url)
            .then((resp) => resp.json())
            .then(data => setFdata(data.response.body.items))
            .catch(err => {
                console.error(err)
            })
    },[dt,area,x,y]);
    return(
        <article>
            <header>{area}</header>
            {fdata && <FcstTable fdata={fdata} gubun="초단기예보" /> }
        </article>
    )
}
export default UltraSrtFcst;