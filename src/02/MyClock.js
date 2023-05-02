import MyClockImage from "./MyClockImage";
import MyClockTime from "./MyClockTime";
import './MyClock.css';

const MyClock = () =>{

    return(
    <main className="container">
        <article data-theme="dark">
            <MyClockImage />
            <MyClockTime  />

        </article> 
    </main>
    );
   
}
export default MyClock;