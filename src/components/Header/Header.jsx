import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Header.module.css';

const Header = props => {
    return (
        <header className={s.header}>
            <img className={s.img_logo} src="/img/logo.png" alt="Текст"/>

            <div className={s.loginBlock}>
                { 
                    props.isAuth 
                        ? <div>{props.login} - <button onClick={props.logout}>Выйти</button></div> 
                        : <NavLink to={'/login'} className={s.link}>Войти</NavLink> 
                }                
            </div>
        </header>
    );
}

export default Header;