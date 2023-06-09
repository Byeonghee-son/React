import { useState, useEffect } from "react";
import FcstTb from "./FcstTb";


const Vilage = () => {
    //useState변수: 변수값이 변경이 되면 재 랜더링이 일어난다 
    const [items, setItems] = useState();
   
    //랜더링이 될때 한번 실행
    useEffect(() => {
        
        
        let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?'
        url = url + 'serviceKey=XS8eW5EMlErdabDbGqkAgxVFaDgJk%2FO7Pd8JVGkPtcJxDjQIPoZoJB4MtCQ28zXdFZuGjfmpmYP1fAvojYlWsg%3D%3D'
        url = url + '&numOfRows=900'
        url = url + '&pageNo=1'
        url = url + '&base_date=20230526'
        url = url + '&base_time=0500'
        url = url + '&nx=55'
        url = url + '&ny=127'
        url = url + '&dataType=json'
        
        console.log(url);
        
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setItems(data.response.body.items.item))
            .catch((err) => console.log(err))
            
            
            
           
        }, []); //디팬던시어레이 안에 usestate 같은 변수가 들어가면 이 값들이 변경될때만 실행됨

    useEffect(() => {
        console.log('items', items)
    }, [items])
    
   

    return (
        <>
           {items && <FcstTb items={items} gubun='단기예보'/>}
        </>
    );
}
export default Vilage;