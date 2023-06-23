import { Row } from 'react-bootstrap';

import { selectDetails } from '@/redux/selectors';
import { useAppSelector } from '@/redux/store';
import { splitCashNumber } from '@/utils/splitCashNumber';

import './style.sass';
const Details = () => {
    const { cashOnHands, ndfl, total } = useAppSelector(selectDetails);
    console.log(cashOnHands, ndfl, total);
    return (
        <Row>
            <ul className="ms-3 mt-4 details">
                <li>
                    <b>{splitCashNumber(cashOnHands)}</b> ₽ сотрудник будет получать на руки
                </li>
                <li>
                    <b>{splitCashNumber(ndfl)}</b> ₽ НФДЛ, 13% от оклада
                </li>
                <li>
                    <b>{splitCashNumber(total)}</b> ₽ за сотрудника в месяц
                </li>
            </ul>
        </Row>
    );
};

export default Details;
