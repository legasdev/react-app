import React from 'react';

import s from './PreviewImg.module.css';

export default function PreviewImg({ imgSrc }) { 
    return (
        <img className={s.img_preview} src={imgSrc} alt="" />
    );
}