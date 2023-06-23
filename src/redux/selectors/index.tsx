import { RootState } from '@/redux/store';
import { SelectDetails } from '@/types';

export const selectDetails = (state: RootState): SelectDetails => {
    const { cash, switcher: withoutNDFL } = state.formFields || {};

    const total = Math.ceil(Number(cash) / 0.87);
    const ndfl = Math.ceil(Number(cash) * 0.13);

    const noNDFL = {
        cashOnHands: Number(cash),
        ndfl: total - Number(cash),
        total,
    };
    const NDFL = {
        cashOnHands: Number(cash) - ndfl,
        ndfl,
        total: Number(cash),
    };

    if (withoutNDFL) return noNDFL;

    return NDFL;
};
