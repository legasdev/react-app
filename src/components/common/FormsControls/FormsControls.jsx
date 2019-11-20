import React from 'react';

import s from './FormsControls.module.css';

export const FieldComponent = Component => ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formsControl + ' ' + (hasError ? s.error : '')}>
            <Component {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    );
}

// export const FormControls = ({input, meta, ...props}) => {

//     const hasError =  meta.touched && meta.error;

//     return (
//         <>
//         <div className={s.formsControl + ' ' + (hasError ? s.error : '')}>
//             {props.child}
//         </div>
//         {
//            hasError && <span>{meta.error}</span>
//         }
//         </>
//     );
// }

// // Textarea с полем для ошибки
// export const Textarea = ({input, meta, ...props}) => <FormControls {...props}><textarea {...input} {...props} /></FormControls>;

// // Input с полем для ошибки
// export const Input = ({input, meta, ...props}) => {
//     return (
//         <FormControls {...props}><input {...input} {...props} /></FormControls>
//     );
// } 