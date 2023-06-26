import { Form } from 'react-bootstrap';

import { useAppSelector } from '@/redux/store';
import { ReactHookFormProperty } from '@/types';

import './style.sass';

const Switcher = ({ register, changeField }: ReactHookFormProperty) => {
    const { withoutNDFL } = useAppSelector(({ formFields }) => formFields);

    const handleNDFL = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeField('withoutNDFL', e.target.checked);
    };

    return (
        <div className="d-flex ms-3 mt-3 align-items-center gap-2">
            <span
                className={`
                    switcher__text 
                    px-1 
                    d-flex 
                    justify-content-center
                    ${!withoutNDFL ? 'fw-bold' : 'text-secondary'}
                `}
            >
                Указать с НДФЛ
            </span>
            <Form.Switch
                {...register('switcher')}
                className="switcher p-0 d-flex justify-content-center"
                onChange={handleNDFL}
            />
            <span
                className={`
                    switcher__text 
                    d-flex 
                    justify-content-center
                    ${withoutNDFL ? 'fw-bold' : 'text-secondary'}
                `}
            >
                Без НДФЛ
            </span>
        </div>
    );
};

export default Switcher;
