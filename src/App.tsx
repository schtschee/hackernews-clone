import React, {useCallback} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import CommentsPage from './pages/CommentsPage';
import Header from './components/Header';

const App: React.FC = () => {
    // Функция для обновления списка новостей
    const handleRefresh = useCallback(() => {

        console.log('Refreshing news list...');
    }, []);

    return (
        <div className="app">
            <Header onRefresh={handleRefresh}/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/news/:id" element={<NewsPage />} />
                <Route path="/comments/:id" element={<CommentsPage />} />
            </Routes>
        </div>
    );
};

export default App;
