import React, { useState } from 'react';
import SearchTabs from './SearchTabs';
import SearchForm from './SearchForm';

const SearchContainer = (props) => {

    const { handleClickBtnLocation } = props;
    const [activeTab, setActiveTab] = useState("selfDrive");
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="container search-container">
            <SearchTabs activeTab={activeTab} onTabChange={handleTabChange} />
            <SearchForm activeTab={activeTab}
                handleClickBtnLocation={handleClickBtnLocation}
            />
        </div>
    );
};

export default SearchContainer;
