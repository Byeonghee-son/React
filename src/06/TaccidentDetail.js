import style from './Taccident.module.css'
const TaccidentDetail = ({selData}) =>{

    const tagKey = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수']

    let tags = tagKey.map((k, idk) =>
    <div key={'k'+idk}>
        {k} {selData[k]}
    </div>
    )


    return(
        <div className="grid">
            <div className={style.detail}>{tags}</div>
        </div>
    )
}
export default TaccidentDetail;