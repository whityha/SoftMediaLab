import { useState } from 'react';

import './style.sass';

const Notification = () => {
    const [isShowText, setShowText] = useState(false);
    const handleShowText = () => {
        setShowText((prevState) => !prevState);
    };
    return (
        <div className={`notification ${isShowText ? 'show' : ''}`} onClick={handleShowText}>
            <div className={`notification__text ${isShowText ? 'show' : ''}`}>
                МРОТ - минимальный размер оплаты труда. Разный для разных регионах
            </div>
        </div>
    );
};

export default Notification;
