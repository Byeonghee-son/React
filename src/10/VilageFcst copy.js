import FcstTable from "./FcstTable";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const VilageFcst = () =>{
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;

    useEffect(()=>{

    },[dt,area,x,y]);

    return(
        <article>
            <header>기상청 단기예보</header>
            <FcstTable />
        </article>
    )
}
export default VilageFcst;