import { Col, Container, Row } from 'react-bootstrap';
import { useForm, useWatch } from 'react-hook-form';

import { FormFields, VARIANTS } from '@/types';

import './style.sass';

import Details from '../Details';
import FormComponent from '../Form';

export const initialState: FormFields = {
    withoutNDFL: false,
    cash: '0',
    variant: VARIANTS.MONTH,
};

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const { control } = useForm({
        defaultValues: initialState,
    });

    const currentVariant = useWatch({ control, name: 'variant' });
    const currentCash = useWatch({ control, name: 'cash' });
    const withoutNDFL = useWatch({ control, name: 'withoutNDFL' });

    return (
        <Container>
            <Row>
                <Col>
                    <p className="mt-4">
                        Пару слов о том, что на экране. Мы можем вводить {`"`}Оклад за месяц{`"`}, а
                        при переключении на {`"`}Оплата за день{`"`} и {`"`}Оплата за час{`"`} сумма
                        автоматически высчитывается исходя из суммы за месяц. Если же мы начнем
                        вводить сумму в поле при включенном {`"`}Оплата за день{`"`}, либо {`"`}
                        Оплата за час{`"`}, на основе введенных данных автоматически считается сумма
                        за месяц. По умолчанию стоит 20-ти дневный рабочий месяц и 8-ми часовой
                        рабочий день. Я хотел ещё создать настройки для того, чтобы можно было
                        настроить рабочие дни в месяц, рабочих часов в день и процент НДФЛ, но
                        просто вынес эти значения в константы и можно легко менять.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col xs={10} md={5}>
                    <p className="mt-5 text-secondary title">Сумма</p>
                    <FormComponent control={control} />
                    {currentVariant === VARIANTS.MONTH && (
                        <Details cash={currentCash} withoutNDFL={withoutNDFL} />
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default App;
