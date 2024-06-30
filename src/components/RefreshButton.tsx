import React from 'react';

interface RefreshButtonProps {
    onClick: () => void; // Функция обратного вызова для обработки клика
}

const RefreshButton: React.FC<RefreshButtonProps> = ({ onClick }) => {
    return (
        <button onClick={onClick}>
            Refresh News
        </button>
    );
};

export default RefreshButton;
