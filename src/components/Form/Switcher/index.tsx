import { Form } from 'react-bootstrap';
import { Controller } from 'react-hook-form';

import { ReactHookFormProperty } from '@/types';

import './style.sass';

const Switcher = ({ control }: ReactHookFormProperty) => {
    return (
        <Controller
            name="withoutNDFL"
            control={control}
            render={({ field }) => (
                <div className="d-flex ms-3 mt-3 align-items-center gap-2">
                    <span
                        className={`
                    switcher__text 
                    px-1 
                    d-flex 
                    justify-content-center
                    ${!field.value ? 'fw-bold' : 'text-secondary'}
                `}
                    >
                        Указать с НДФЛ
                    </span>
                    <Form.Switch
                        className="switcher p-0 d-flex justify-content-center"
                        {...field}
                    />
                    <span
                        className={`
                    switcher__text 
                    d-flex 
                    justify-content-center
                    ${field.value ? 'fw-bold' : 'text-secondary'}
                `}
                    >
                        Без НДФЛ
                    </span>
                </div>
            )}
        />
    );
};

export default Switcher;
