import React from 'react';

import s from './FormsControls.module.css';

export const Textarea = ({input, meta, ...props}) => {

    const hasError =  meta.touched && meta.error;

    return (
        <>
        <div>
            <textarea { ...input } { ...props } className={s.formsControl + ' ' + (hasError ? s.error : '') } />
        </div>
        {
           hasError && <span>{meta.error}</span>
        }
        </>
    );
} 