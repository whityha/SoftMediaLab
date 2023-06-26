import { ChangeEvent } from 'react';
import { Form } from 'react-bootstrap';
import { Controller, useWatch } from 'react-hook-form';

import { MAX_CASH_LENGTH } from '@/constants';
import { ReactHookFormProperty, VARIANTS } from '@/types';
import { changeGlobalCashByVariant } from '@/utils/changeGlobalCashByVariant';
import { changeInputValueByVariant } from '@/utils/changeInputValueByVariant';
import { joinNumberFromLocalString } from '@/utils/joinNumberFromLocalString';
import { splitNumberByLocalString } from '@/utils/splitNumberByLocalString';

import './style.sass';

const Cash = ({ control }: ReactHookFormProperty) => {
    const currentVariant = useWatch({ control, name: 'variant' });

    const cashText = () => {
        switch (currentVariant) {
            case VARIANTS.DAY:
                return <span className="emblem ms-3 fw-bold">₽ в день</span>;
            case VARIANTS.HOUR:
                return <span className="emblem ms-3 fw-bold">₽ в час</span>;
            default:
                return <span className="emblem ms-3 fw-bold">₽</span>;
        }
    };

    const handleChangeCash = (onChange: (event: string) => void) => {
        return async (e: ChangeEvent<HTMLInputElement>) => {
            const {
                target: { value },
            } = e;
            let numberedValue = joinNumberFromLocalString(value) || 0;

            numberedValue = changeGlobalCashByVariant(numberedValue, currentVariant);

            const stringedValue = splitNumberByLocalString(numberedValue);
            if (stringedValue.length > MAX_CASH_LENGTH) return;
            onChange(stringedValue);
        };
    };

    return (
        <Controller
            name="cash"
            control={control}
            rules={{
                required: true,
                maxLength: 10,
            }}
            render={({ field: { value, onChange } }) => {
                value = joinNumberFromLocalString(value);
                value = changeInputValueByVariant(value, currentVariant);
                return (
                    <Form.Label className="d-flex align-items-center ms-3 mt-3 ">
                        <Form.Control
                            type="text"
                            className="cash px-4 fw-bold"
                            value={value}
                            onChange={handleChangeCash(onChange)}
                        />
                        {cashText()}
                    </Form.Label>
                );
            }}
        />
    );
};

export default Cash;
