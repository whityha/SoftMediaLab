import { ChangeEvent } from 'react';
import { Form, ListGroup } from 'react-bootstrap';

import Notification from '@/components/Notification';
import { useAppSelector } from '@/redux/store';
import { ReactHookFormProperty, VARIANTS } from '@/types';

import './style.sass';

import { RADIO_LIST } from '../config';

const Variant = ({ register, changeField }: ReactHookFormProperty) => {
    const variant = useAppSelector(({ formFields }) => formFields.radio);

    const handleShowDetails = (e: ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.target.value as VARIANTS;
        changeField('radio', currentValue);
    };

    return (
        <ListGroup className="align-items-start">
            {RADIO_LIST.map(({ id, title, name }) => {
                return (
                    <Form.Label key={id} htmlFor={id} className="d-flex input_label fw-bold w-auto">
                        <Form.Check
                            id={id}
                            {...register(name)}
                            value={id}
                            checked={variant === id}
                            type="radio"
                            className="me-2 radio_point"
                            onChange={handleShowDetails}
                        />
                        {title}
                        {variant === id && id === VARIANTS.MROT && <Notification />}
                    </Form.Label>
                );
            })}
        </ListGroup>
    );
};

export default Variant;
