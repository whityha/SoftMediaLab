import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { actions } from '@/redux/slice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { FormFields, VARIANTS } from '@/types';

import Cash from './Cash';
import Switcher from './Switcher';
import Variant from './Variants';

export const initialState: FormFields = {
    switcher: true,
    cash: 0,
    variant: VARIANTS.MONTH,
};

const FormComponent = () => {
    const { register, setValue, getValues } = useForm({
        defaultValues: initialState,
    });

    const variant = useAppSelector(({ formFields }) => formFields.variant);
    const dispatch = useAppDispatch();
    const { setFormFields } = actions;

    const changeFormField = (name: keyof FormFields, arg: number | boolean | VARIANTS) => {
        setValue(name, arg);
        const data = getValues();
        dispatch(setFormFields(data));
    };

    return (
        <Form>
            <Variant changeField={changeFormField} register={register} />
            {!(variant === VARIANTS.MROT) && (
                <>
                    <Switcher changeField={changeFormField} register={register} />
                    <Cash changeField={changeFormField} register={register} />
                </>
            )}
        </Form>
    );
};

export default FormComponent;
