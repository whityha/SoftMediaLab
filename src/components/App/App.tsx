import { Col, Container, Row } from 'react-bootstrap';

import { useAppSelector } from '@/redux/store';
import { VARIANTS } from '@/types';

import './style.sass';

import Details from '../Details';
import FormComponent from '../Form';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const variant = useAppSelector(({ formFields }) => formFields.variant);

    return (
        <Container>
            <Row>
                <Col xs={10} md={5}>
                    <p className="mt-5 text-secondary title">Сумма</p>
                    <FormComponent />
                    {variant === VARIANTS.MONTH && <Details />}
                </Col>
            </Row>
        </Container>
    );
};

export default App;
