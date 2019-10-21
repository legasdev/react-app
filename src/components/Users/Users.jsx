import React from 'react';

const Users = (props) => {

    if (props.users.length === 0) 
        props.setUsers([
            {id: 1, followed: true, name: 'Машуня', status: 'I am a boss!', location: { city: 'Городец', country: 'Россия' }},
            {id: 2, followed: true, name: 'Артем', status: 'And I am too!', location: { city: 'Нижний Новгород', country: 'Россия' }},
            {id: 3, followed: false, name: 'Аноним', status: 'Да-да', location: { city: 'Москва', country: 'Россия' }},
        ]);

    return (
        <div>
            {
                props.users.map( item => 
                <div key={item.id}>
                    <span>
                        <div>
                            <img src="" alt=""/>
                        </div>
                        <div>
                            { item.followed 
                                ? <button onClick={ () => { props.unfollow(item.id) } }>Unfollow</button>
                                : <button onClick={ () => {props.follow(item.id) } }>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{item.name}</div>
                            <div>{item.status}</div>
                        </span>
                        <span>
                            <div>{item.location.city}</div>
                            <div>{item.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}

export default Users;