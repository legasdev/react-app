import React from 'react';

import s from './Paginator.module.css';


const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {

    const pagesCounter = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCounter; i++) pages.push(i);

    return (
        <div>
            {
                pages.map(item => 
                    <button key={item}
                        className={ currentPage === item ? s.selectedPage : undefined }
                        onClick={ () => { onPageChanged(item); } } >
                    {item}
                    </button>
                )
            }
        </div>
    );
}

export default Paginator;