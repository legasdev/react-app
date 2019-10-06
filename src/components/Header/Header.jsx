import React from 'react';
import s from './Header.module.css';

export default function Header() {
    return (
        <header className={s.header}>
            <img className={s.img_logo} src="/img/logo.png" alt="Текст"/>
        </header>
    );
}