import { ChangeEvent, useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';

import { WORK_DAY_IN_MONTH, WORK_HOUR_IN_DAY } from '@/constants';
import { useAppSelector } from '@/redux/store';
import { ReactHookFormProperty, VARIANTS } from '@/types';
import { joinCashNumber } from '@/utils/joinCashNumber';
import { splitCashNumber } from '@/utils/splitCashNumber';

import './style.sass';

const Cash = ({ register, changeField }: ReactHookFormProperty) => {
    const monthCashRef = useRef<number>(0);
    const { radio, cash } = useAppSelector(({ formFields }) => formFields);

    const handleChangeCash = (e: ChangeEvent<HTMLInputElement>) => {
        const currentCashValue = e.target.value === '' ? 0 : joinCashNumber(e.target.value);
        changeField('cash', currentCashValue);

        let monthCashMemory = currentCashValue;
        switch (radio) {
            case VARIANTS.DAY:
                monthCashMemory = monthCashMemory * WORK_DAY_IN_MONTH;
                break;
            case VARIANTS.HOUR:
                monthCashMemory = monthCashMemory * WORK_DAY_IN_MONTH * WORK_HOUR_IN_DAY;
                break;
        }

        monthCashRef.current = monthCashMemory;
    };

    const cashText = () => {
        switch (radio) {
            case VARIANTS.DAY:
                return <span className="emblem ms-3 fw-bold">₽ в день</span>;
            case VARIANTS.HOUR:
                return <span className="emblem ms-3 fw-bold">₽ в час</span>;
            default:
                return <span className="emblem ms-3 fw-bold">₽</span>;
        }
    };

    const inputCashValue = () => {
        switch (radio) {
            case VARIANTS.DAY:
                return monthCashRef.current / WORK_DAY_IN_MONTH;
            case VARIANTS.HOUR:
                return monthCashRef.current / WORK_DAY_IN_MONTH / WORK_HOUR_IN_DAY;
            default:
                return monthCashRef.current;
        }
    };

    useEffect(() => {
        changeField('cash', inputCashValue());
    }, [radio]);

    return (
        <Form.Label className="d-flex align-items-center ms-3 mt-3 ">
            <Form.Control
                {...register('cash')}
                type="string"
                className="cash px-4 fw-bold"
                onChange={handleChangeCash}
                value={splitCashNumber(cash)}
            />
            {cashText()}
        </Form.Label>
    );
};

export default Cash;
