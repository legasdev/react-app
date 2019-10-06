import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export default function MyPosts() { 
    return (
        <section className={s.posts}>
            <h2>Посты</h2>
            <div>Новый пост</div>
            <div className={s.post_wrapper}>
                <Post msg="Text post 1" likes={20} />
                <Post msg="Text post 2" likes={15} />
            </div>
        </section>
    );
}