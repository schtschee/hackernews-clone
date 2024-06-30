import * as React from 'react';

interface SortSelectorProps {
    selectedSort: string;
    onChange: (sort: string) => void;
}

const SortSelector: React.FC<SortSelectorProps> = ({ selectedSort, onChange }) => {
    return (
        <select className="news-type" value={selectedSort} onChange={(e) => onChange(e.target.value)}>
            <option value="topstories">Top Stories</option>
            <option value="newstories">New Stories</option>
            <option value="beststories">Best Stories</option>
        </select>
    );
};

export default SortSelector;
