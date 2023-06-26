import { WORK_DAY_IN_MONTH, WORK_HOUR_IN_DAY } from '@/constants';
import { VARIANTS } from '@/types';

import { splitNumberByLocalString } from './splitNumberByLocalString';

export const changeInputValueByVariant = (cash: number, variant: VARIANTS): string => {
    let currentCash = cash;
    switch (variant) {
        case VARIANTS.DAY:
            currentCash = cash / WORK_DAY_IN_MONTH;
            break;
        case VARIANTS.HOUR:
            currentCash = cash / WORK_DAY_IN_MONTH / WORK_HOUR_IN_DAY;
            break;
        default:
            currentCash = cash;
    }
    return splitNumberByLocalString(currentCash);
};
