import { Form } from 'react-bootstrap';
import { useWatch } from 'react-hook-form';

import { VARIANTS } from '@/types';

import Cash from './Cash';
import Switcher from './Switcher';
import Variant from './Variants';

const FormComponent = ({ control }: { control: any }) => {
    const currentVariant = useWatch({ control, name: 'variant' });

    return (
        <Form>
            <Variant control={control} />
            {!(currentVariant === VARIANTS.MROT) && (
                <>
                    <Switcher control={control} />
                    <Cash control={control} />
                </>
            )}
        </Form>
    );
};

export default FormComponent;
