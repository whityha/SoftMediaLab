export const joinCashNumber = (str: string) => {
    return parseFloat(str.replace(/\s/g, '').replace(',', '.'));
};
