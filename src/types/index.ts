export enum VARIANTS {
    MONTH = 'month',
    MROT = 'mrot',
    DAY = 'day',
    HOUR = 'hour',
}

export interface FormFields {
    variant: VARIANTS;
    withoutNDFL: boolean;
    cash: string;
}

export interface SelectDetails {
    cashOnHands: number;
    ndfl: number;
    total: number;
}
export interface ReactHookFormProperty {
    control?: any;
}
export interface Details {
    cashOnHands: number;
    ndfl: number;
    total: number;
}

export type FormFieldsKeys = keyof FormFields;
