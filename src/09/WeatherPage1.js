import { useParams } from "react-router-dom";
const WeatherPage1 = () => {
    const item = useParams().item;
    const item2 = useParams().item2;
    return(
        <article>
        <header><h1>WeatherPage1</h1></header>
        <h1>{item}</h1> 
        <h1>{item2}</h1>
                
        </article>
    )
}
export default WeatherPage1;