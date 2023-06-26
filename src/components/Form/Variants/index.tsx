import { Form, ListGroup } from 'react-bootstrap';
import { Controller, useWatch } from 'react-hook-form';

import { initialState } from '@/components/App';
import Notification from '@/components/Notification';
import { ReactHookFormProperty, VARIANTS } from '@/types';

import './style.sass';

import { RADIO_LIST } from '../config';

const Variant = ({ control }: ReactHookFormProperty) => {
    const { variant: defaultValue } = initialState;
    const variant = useWatch({ control, name: 'variant' });

    return (
        <Controller
            name="variant"
            control={control}
            render={({ field }) => (
                <ListGroup className="align-items-start" as={'ul'}>
                    {RADIO_LIST.map(({ id, title }) => {
                        return (
                            <li key={id} className="position-relative mb-2">
                                <Form.Label
                                    htmlFor={id}
                                    className="d-flex input_label fw-bold w-auto mb-0"
                                >
                                    <Form.Check
                                        id={id}
                                        type="radio"
                                        className="me-2 radio_point"
                                        defaultChecked={id === defaultValue}
                                        {...field}
                                        value={id}
                                    />
                                    {title}
                                </Form.Label>
                                {variant === field.value && id === VARIANTS.MROT && (
                                    <Notification />
                                )}
                            </li>
                        );
                    })}
                </ListGroup>
            )}
        />
    );
};

export default Variant;
