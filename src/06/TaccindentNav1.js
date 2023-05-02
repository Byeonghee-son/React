
const TaccindentNav1 = ({c1,sel1,setSel1}) => {

    console.log(c1);
    // const show = (item) => {
    //     console.log(item);
    // }

    const btTag = c1.map((item)=>
        <li key={item}>
            <button onClick = {()=>setSel1(item)}>{item}</button>
            </li>
    );

    return (
        <nav>
            <ul>
                <h2>사고유형 대분류</h2>
            </ul>
            <ul>
                {btTag}           
            </ul>
        </nav>
    );
}
export default TaccindentNav1;