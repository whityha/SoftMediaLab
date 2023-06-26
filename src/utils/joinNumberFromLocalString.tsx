export const joinNumberFromLocalString = (str: string): number => {
    return parseFloat(str.replace(/\s/g, '').replace(',', '.'));
};
