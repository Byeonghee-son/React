import { useState,useRef,useEffect } from "react";
import style from './Gallery.module.css';
import GalleryView from './GalleryView'

const Gallery = () => {
    //state변수
    const[itemTag, setItemTag] = useState();

    //input 제어
    const txt1 = useRef();
    
    //컴포넌트가 처음 렌더링되었을 때 한번 실행
    useEffect(()=>{
        txt1.current.focus();
    },[]);
    //컴포넌트 해당하는 state 변수가 변경이 될때마다 실행
    useEffect(()=>{
        txt1.current.focus();
    },[itemTag]);


    //사용자 정의 함수
    const getData = (kw,num,no) => {
        let apikey =`XS8eW5EMlErdabDbGqkAgxVFaDgJk%2FO7Pd8JVGkPtcJxDjQIPoZoJB4MtCQ28zXdFZuGjfmpmYP1fAvojYlWsg%3D%3D`
        let url =`https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
        url = url +`&serviceKey=${apikey}`;
        url = url +`&numOfRows=${num}`;
        url = url +`&pageNo=${no}`;
        url = url +`&MobileOS=ETC`;
        url = url +`&MobileApp=AppTest`;
        url = url +`&arrange=A`;
        url = url +`&keyword=${kw}`;
        url = url +`&_type=json`;

        console.log(url);

        fetch(url)
        .then((resp) => resp.json())
        .then((data) => setItemTag(data.response.body.items.item))
        .catch((err) => console.log(err))
    };
    
    const search = (e) => {
      e.preventDefault();
       
        //공백체크
        if(txt1.current.value === '') {
            alert('키워드를 입력해주세요.');
            txt1.current.focus();
            return;
        }

      //인코딩한 코드
        const kw = encodeURI(txt1.current.value);
        getData(kw,10,1);
        console.log(kw);

    }



    const searchClear = (e) => {
        e.preventDefault();

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
                   {itemTag && <GalleryView content={itemTag} />}
                </div>
        </article>
    </main>
    )
}
export default Gallery;