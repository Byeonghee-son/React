import React from "react";
const FcstTable = ({fdata}) => {


    return (

        <table>
            <thead>
                <tr>
                    <th scope="col">항목명</th>
                    <th scope="col">예측일자</th>
                    <th scope="col">예측시간</th>
                    <th scope="col">예보값</th>
                </tr>
            </thead>
            <tbody>
                {fdata.map((item, index) => (
                    <tr key={index}>
                        <td>{item.항목명}</td>
                        <td>{item.예측일자}</td>
                        <td>{item.예측시간}</td>
                        <td>{item.예보값}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    )
}
export default FcstTable;