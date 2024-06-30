import React from 'react';
import { Link } from 'react-router-dom';
import RefreshButton from "./RefreshButton";

interface HeaderProps {
    onRefresh: () => void; // Функция для обновления списка новостей
}

const Header: React.FC<HeaderProps> = ({ onRefresh }) => {
    const handleRefresh = () => {
        onRefresh(); // Вызываем функцию для обновления списка новостей при клике
    };
    return (
        <header style={headerStyle}>
            <div style={containerStyle}>
                <h1 style={titleStyle}>Hacker News Clone</h1>
                <nav style={navStyle}>
                    <Link to="/" style={linkStyle}>Home</Link>
                </nav>
            </div>
        </header>
    );
};

const headerStyle: React.CSSProperties = {
    backgroundColor: '#ff6600',
    padding: '10px 0',
};

const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '800px',
    margin: '5px auto',
    padding: '5px 10px',
};

const titleStyle: React.CSSProperties = {
    margin: '10 px',
    fontSize: '1.5rem',
    color: '#ffffff',
};

const linkStyle: React.CSSProperties = {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    marginRight: '10px'
};

const navStyle: React.CSSProperties = {
    display: 'flex', // Располагаем элементы в строку
    gap: '10px', // Добавляем небольшой отступ между элементами
};

export default Header;
