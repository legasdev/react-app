import React, { useState } from 'react';

import s from './Paginator.module.css';

const Paginator = ({totalItemsCount, pageSize, currentPage = 1, onPageChanged, portionSize = 10, ...props}) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div>
            {
                portionNumber > 1 &&
                    <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Пред.</button>
            }
            {pages
                .filter(item => item >= leftPortionPageNumber && item <= rightPortionPageNumber)
                .map(item => 
                    <button key={item}
                        className={currentPage === item ? s.selectedPage : undefined}
                        onClick={() => {onPageChanged(item);}} 
                    >
                        {item}
                    </button>
                )
            }
            {
                portionCount > portionNumber &&
                    <button onClick={() => { setPortionNumber(portionNumber + 1) }}>След.</button>
            }
        </div>
    );
}

export default Paginator;