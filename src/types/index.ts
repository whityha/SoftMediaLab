export enum VARIANTS {
    MONTH = 'month',
    MROT = 'mrot',
    DAY = 'day',
    HOUR = 'hour',
}

export interface FormFields {
    radio: VARIANTS;
    switcher: boolean;
    cash: number;
}

export interface SelectDetails {
    cashOnHands: number;
    ndfl: number;
    total: number;
}

export type TRegister = any;
export type TChangeField = (name: keyof FormFields, e: number | boolean | VARIANTS) => void;
export interface ReactHookFormProperty {
    register: TRegister;
    changeField: TChangeField;
}
