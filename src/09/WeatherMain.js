import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherHome from "./WeatherHome";
import WeatherNav from "./WeatherNav";
import WeatherPage1 from "./WeatherPage1";
import WeatherPage2 from "./WeatherPage2";


const WeatherMain = () => {
    
    
    return(
        <BrowserRouter>
        <main className="container">
            <WeatherNav />
            <Routes>
                <Route path='/' element={<WeatherHome/>}/>
                <Route path='/page1/:item/:item2' element={<WeatherPage1/>}/>
                <Route path='/page2' element={<WeatherPage2/>}/>
            </Routes>
            
        </main>
        </BrowserRouter>
    )
}
export default WeatherMain;