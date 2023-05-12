import { useState,useRef,useEffect } from "react";
import style from './Gallery.module.css';
import GalleryView from './GalleryView'

const Gallery = () => {

    const[itemTag, setItemTag] = useState();
    const txt1 = useRef();
    

    useEffect(()=>{
        txt1.current.focus();
        
    }, []);
    useEffect(()=>{
        console.log(itemTag)
        
    }, [itemTag]);

    const search = (e) => {
        e.preventDefault();
        if(txt1.current.value ==='')return;
       
        let kw = encodeURI(txt1.current.value);
        console.log(txt1.current.value ,kw);
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=XS8eW5EMlErdabDbGqkAgxVFaDgJk%2FO7Pd8JVGkPtcJxDjQIPoZoJB4MtCQ28zXdFZuGjfmpmYP1fAvojYlWsg%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${kw}&_type=json`;
        console.log(url)
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            setItemTag(data.response.body.items.item)
        });
        

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
                <div>
                   {/* {itemTag} */}
                </div>
        </article>
    </main>
    )
}
export default Gallery;