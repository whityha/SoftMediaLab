import { useState } from 'react';
import { Container } from 'react-bootstrap';

import Details from '../Details';
import Form from '../Form';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [showDetails, setShowDetails] = useState(true);
    return (
        <Container>
            <Form />
            {showDetails && <Details />}
        </Container>
    );
};

export default App;
