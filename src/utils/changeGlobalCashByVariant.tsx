import { WORK_DAY_IN_MONTH, WORK_HOUR_IN_DAY } from '@/constants';
import { VARIANTS } from '@/types';

export const changeGlobalCashByVariant = (cash: number, variant: VARIANTS): number => {
    switch (variant) {
        case VARIANTS.DAY:
            return cash * WORK_DAY_IN_MONTH;
        case VARIANTS.HOUR:
            return cash * WORK_DAY_IN_MONTH * WORK_HOUR_IN_DAY;
        default:
            return cash;
    }
};
