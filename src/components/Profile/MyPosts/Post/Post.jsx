import React from 'react';
import s from './Post.module.css';

export default function Post(props) {
    const { msg, likes } = props;

    return (
        <div className={s.post}>
            { msg }
            <div>{ `Лайки: ${likes}` }</div>
        </div>
    );
}