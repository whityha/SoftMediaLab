import { Row } from 'react-bootstrap';

import { NDFL_PERCENT } from '@/constants';
import { calculateDetails } from '@/utils/calculateDetails';
import { joinNumberFromLocalString } from '@/utils/joinNumberFromLocalString';
import { splitNumberByLocalString } from '@/utils/splitNumberByLocalString';

import './style.sass';
const Details = ({ cash, withoutNDFL }: { cash: string; withoutNDFL: boolean }) => {
    const numberedCash = joinNumberFromLocalString(cash);
    const { cashOnHands, ndfl, total } = calculateDetails(numberedCash, withoutNDFL);
    return (
        <Row>
            <ul className="ms-3 mt-4 details d-flex flex-column gap-2">
                <li>
                    <b>{splitNumberByLocalString(cashOnHands)} ₽</b> сотрудник будет получать на
                    руки
                </li>
                <li>
                    <b>{splitNumberByLocalString(ndfl)} ₽</b> НФДЛ, {NDFL_PERCENT}% от оклада
                </li>
                <li>
                    <b>{splitNumberByLocalString(total)} ₽</b> за сотрудника в месяц
                </li>
            </ul>
        </Row>
    );
};

export default Details;
