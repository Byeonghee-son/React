import { useState } from "react";
const MyClockTime = () =>{
   let t = new Date().toLocaleTimeString();
    const [myTime, setmyTime] = useState(t);
    let cnt = 0;
    setTimeout(setmyTime)(new Date().toLocaleTimeString(),1000)
    return(
        <footer>
            
            <h1>{myTime}</h1>
        </footer>

    );
   
}
export default MyClockTime;