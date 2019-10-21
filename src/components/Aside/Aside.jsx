import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Aside.module.css';
 
export default function Aside() {
    return (
        <aside className={s.aside}>
            <nav className={s.nav}>
                <li><NavLink to="/profile" className={s.link} activeClassName={s.active}>Профиль</NavLink></li>
                <li><NavLink to="/dialogs" className={s.link} activeClassName={s.active}>Сообщения</NavLink></li>
                <li><NavLink to="/users" className={s.link} activeClassName={s.active}>Пользователи</NavLink></li>
                <li><NavLink to="/news" className={s.link} activeClassName={s.active}>Новости</NavLink></li>
                <li><NavLink to="/music" className={s.link} activeClassName={s.active}>Музыка</NavLink></li>
                <li><NavLink to="/settings" className={s.link} activeClassName={s.active}>Настройки</NavLink></li>
            </nav>
        </aside>
    );
}