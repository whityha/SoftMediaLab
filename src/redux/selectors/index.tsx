import { RootState } from '@/redux/store';
import { SelectDetails } from '@/types';
import { joinCashNumber } from '@/utils/joinCashNumber';

export const selectDetails = (state: RootState): SelectDetails => {
    const { cash, withoutNDFL } = state.formFields || {};
    const newCash = typeof cash === 'string' ? joinCashNumber(cash) : cash;
    const total = Math.ceil(Number(newCash) / 0.87);
    const ndfl = Math.ceil(Number(newCash) * 0.13);

    const noNDFL = {
        cashOnHands: Number(newCash),
        ndfl: total - Number(newCash),
        total,
    };
    const NDFL = {
        cashOnHands: Number(newCash) - ndfl,
        ndfl,
        total: Number(newCash),
    };

    if (withoutNDFL) return noNDFL;

    return NDFL;
};
