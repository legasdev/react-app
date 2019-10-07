import React from 'react';

import s from './MyPosts.module.css';

import Post from './Post/Post';

export default function MyPosts({ postsData }) {

    return (
        <section className={s.posts}>
            <h2>Посты</h2>
            <div className={s.add_post}>
                <textarea name="addNewPost"></textarea>
                <button>Добавить пост</button>
            </div>
            <div className={s.post_wrapper}>
                {DrawDataPost(postsData)}
            </div>
        </section>
    );
}

// Обработка данных для постов
function DrawDataPost(array) {
    return array.map( ({ key, post, likes }) => <Post id={key} msg={post} likes={likes} /> );
}