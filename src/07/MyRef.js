import style from './MyRef.module.css'
import { useState, useRef, useEffect } from "react";  //useRef는 랜더링이일어날떄(usestate가 실행될때등) 같이 화면에 반영된다. 그전에는 콘솔에는 바뀌는데 화면은 안바뀐다. 그리고 Ref 변수 쓸때는 .current를 붙여줘야한다.
const MyRef = () => {
    const txtref = useRef();

    const itemArr = useRef([]);
    const [itemTag, setItemTag] = useState();
    //커서가 처음 시작할때 어디서 시작할지 설정
    useEffect(()=>{
        txtref.current.focus();
    },[]);

    const addItem = (e) => {
        e.preventDefault(); 
        const newItem = txtref.current.value;
        if (itemArr.current.includes(newItem)) {
          alert("이미 등록된 항목입니다.");
        } else {
          itemArr.current = [...itemArr.current, newItem];
          setItemTag(
            itemArr.current.map((item, fruit) => (
              
                <span key={fruit} className={style.s1}>{item}</span>
              
            )))
        console.log("addItem = ", itemArr.current)
    }
}
    const resetItem = () => {
        txtref.current.value =' ';
        txtref.current.focus();
    }
    return (
        <main className="container">
            <article>
                <header>
                    <form>
                        <div className="grid">
                             <div>
                                <label htmlFor="txt1">과일/채소 입력</label>
                                <input ref={txtref} type="text" id="txt1" name="txt1" required />
                            </div>
                            <div>
                                <button onClick={(e) => addItem(e)}>등록</button>
                                <button onClick={(e) => resetItem(e)}>취소</button>
                            </div>
                        </div>
                    </form>
                </header>
                <div>
                    {itemTag}
                </div>
            </article>
        </main>
    )
}
export default MyRef;