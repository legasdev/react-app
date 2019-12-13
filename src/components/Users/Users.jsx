import React from 'react';

import Paginator from './../common/Paginator/Paginator';
import User from './User';

const Users = ({currentPage, pageSize, onPageChanged, totalUsersCount, ...props}) => {

    return (
        <div>
            <Paginator 
                currentPage={currentPage} 
                onPageChanged={onPageChanged}
                pageSize={pageSize}
                totalItemsCount={totalUsersCount}
            />
            <div>
                {props.users.map( 
                    item => <User 
                                key={item.id}
                                user={item} 
                                follow={props.follow} 
                                followingInProgress={props.followingInProgress}
                            /> )
                }
            </div>
        </div>
    );
}

export default Users;