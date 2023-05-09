import { useState,useRef,useEffect } from "react";
import style from './Gallery.module.css';





const Gallery = () => {

    
    const txt1 = useRef();

    useEffect(()=>{
        txt1.current.focus();
        
    }, []);

    const search = (e) => {
        e.preventDefault();
        if(txt1.current.value ==='')return;

        let kw = encodeURI(txt1.current.value);
        console.log(txt1.current.value ,kw);


    }



    const searchClear = () => {
        txt1.current.value =' ';
        txt1.current.focus();
    }
   

    return (
        <main className="container">
        <article>
            <header>
                <h1>한국관광공사_관광사진 정보</h1>
                <form>
                    <div className="grid">
                        <input ref={txt1} type="text" id="txt1" name="txt1" placeholder='키워드를 입력하세요' required />
                    
                        <div className={style.btDiv}>
                            <button onClick={(e) => search(e)}>검색</button>
                            <button onClick={(e) => searchClear(e)}>취소</button>
                        </div>
                    </div>
                </form>
            </header>

        </article>
    </main>
    )
}
export default Gallery;