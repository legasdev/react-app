export const requiredField = value => {
    return value ? undefined : 'error message';
}

export const maxLength = maxLengthValue => value => {
    if (value && value.length > maxLengthValue) return 'max length 30 symbols';
    return undefined;
}