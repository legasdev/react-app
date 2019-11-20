/**
 * 
 * Фнукции описывают валидацию форм 
 * 
 * 
 */

export const requiredField = msg => value => {
    return value ? undefined : msg;
}

export const maxLength = maxLengthValue => value => {
    if (value && value.length > maxLengthValue) return `max length ${maxLengthValue} symbols`;
    return undefined;
}