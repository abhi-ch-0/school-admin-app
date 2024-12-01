import React from 'react';
import SearchIcon from "./search-icon.svg?react";
import InputField from './InputField';
import IconButton from './IconButton';

const SearchBar = ({ placeholder }) => {
    return (
        <div className="flex  bg-neutral-light rounded-md shadow p-1">
            <InputField placeholder={placeholder} />

            <IconButton
                icon={SearchIcon}
                className="custom-class"
            />
        </div>
    );
};

export default SearchBar;