import React, { useState, useEffect } from 'react';
import RecommendedList from './RecommendedList';
import './body.css';

const FilterBar = () => {
    const [recommenList, setRecommenlist] = useState(false);

    const handleRecommended = () => {
        setRecommenlist(!recommenList);
    };

    useEffect(() => {
        const handleScroll = () => {
            setRecommenlist(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="container">
            <div className="left-items">
                <div>20 ITEMS</div>
                <div>FILTER</div>
            </div>
            <div className="right-item">
                <div onClick={handleRecommended}>RECOMMENDED</div>
            </div>
            {recommenList && <RecommendedList />}
        </div>
    );
};

export default FilterBar;
