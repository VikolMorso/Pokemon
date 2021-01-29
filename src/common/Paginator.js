import React from "react";
import s from './Common.module.css'


const { useState } = require("react");

const Paginator = ({count, page, currentPage, onPageChanget, portSize = 6}) =>{
    let pagesCount = Math.ceil(count / page);

    let pages = [];
    
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    let [portionNumber, setPortionNumber] = useState(1)

    let portionCount = Math.ceil(pagesCount / portSize);
    let leftNumber = (portionNumber-1)*portSize+1;
    let rigthNumber = leftNumber + portSize-1;


    return  <div className={s.paginator}>
        {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber-1)} className={s.btn}>PREV</button>}
        {pages.filter(p => p>=leftNumber && p<=rigthNumber).map(p => {
                return <span className={s.number__page} >
                    <span className={currentPage === p && s.bold} onClick={() => onPageChanget(p)}>
                   {p}</span></span>
                
        })}
        {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber+1)} className={s.btn}>NEXT</button>}
    </div>
} 

export default Paginator;