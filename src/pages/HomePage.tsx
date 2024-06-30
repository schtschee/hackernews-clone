import React, { useState } from 'react';
import NewsList from '../components/NewsList';
import SortSelector from '../components/SortSelector';

const HomePage: React.FC = () => {
    const [sort, setSort] = useState('topstories');

    return (
        <div>
            <SortSelector selectedSort={sort} onChange={setSort} />
            <button /*onClick={handleManualRefresh}*/>Refresh</button>
            <NewsList type={sort} />
        </div>
    );
};

export default HomePage;
