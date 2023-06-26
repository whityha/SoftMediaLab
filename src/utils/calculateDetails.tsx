import { NDFL_PERCENT } from '@/constants';
import { Details } from '@/types';

type CalculateDetails = (arg1: number, arg2: boolean) => Details;

export const calculateDetails: CalculateDetails = (cash, withoutNDFL) => {
    const total = Math.ceil(Number(cash) / (1 - NDFL_PERCENT / 100));
    const ndfl = Math.ceil(Number(cash) * (NDFL_PERCENT / 100));

    const noNDFL: Details = {
        cashOnHands: Number(cash),
        ndfl: total - Number(cash),
        total,
    };
    const NDFL: Details = {
        cashOnHands: Number(cash) - ndfl,
        ndfl,
        total: Number(cash),
    };

    return withoutNDFL ? noNDFL : NDFL;
};
