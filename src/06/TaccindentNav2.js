import style from './Taccident.module.css'
const TaccindentNav2 = ({ c2, sel1, sel2, setSel2 }) => {
    const c2Arr = c2.filter((item) => item[0] === sel1);

    
    console.log(c2Arr);
    // console.log(c1);
    // const show = (item) => {
    //     console.log(item);
    // }

    const btTag = c2Arr.map((item) =>
        <li key={item}>
            <button onClick={() => setSel2(item)}>{item[1]}</button>
        </li>
    );

    return (
        <nav>
            <ul>
                <h2 className={style.txt}>사고유형 중분류</h2>
            </ul>
            <ul className={style.bt}>
                {btTag}
            </ul>
        </nav>
    );
}
export default TaccindentNav2;