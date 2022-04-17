/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RadioButton } from 'primereact/radiobutton';
import { Checkbox } from 'primereact/checkbox';
import { Search } from '../Icons';
import './FilterBox.scss';

function FilterBox({ type, isSearch, groupName, data, selectedData, onChangeFunc }) {
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState(data);

  function handleChange(event) {
    const queryVal = event.target.value.toLowerCase();
    setQuery(queryVal);
    if (queryVal.length > 1) {
      const filterSuggestionsData = data.filter((x) => x.name.toLowerCase().indexOf(queryVal) > -1);
      setFilteredSuggestions(filterSuggestionsData);
    } else {
      setFilteredSuggestions(data);
    }
  }
  return (
    <div className="formElement">
      {isSearch && (
        <div className="filterBoxSearch">
          <input
            type="text"
            name="query"
            className="searchInput"
            placeholder="Search"
            onChange={handleChange}
            value={query}
          />
          <Search className="searchIcon" />
        </div>
      )}
      {type === 'radio' ? (
        <div className="filterBox scrollBar">
          {filteredSuggestions.map((item) => {
            return (
              <div key={item.key} className="p-field-radiobutton">
                <RadioButton
                  inputId={item.key}
                  name={groupName}
                  value={item}
                  checked={selectedData.key === item.key}
                  onChange={(e) => onChangeFunc(e.value)}
                />
                <label htmlFor={item.key}>{item.name}</label>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="filterBox scrollBar">
          {filteredSuggestions.map((item) => {
            return (
              <div key={item.key} className="p-field-checkbox">
                <Checkbox
                  inputId={item.key}
                  name={groupName}
                  value={item}
                  checked={selectedData.some((x) => x.key === item.key)}
                  onChange={onChangeFunc}
                />
                <label htmlFor={item.key}>{item.name}</label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

FilterBox.propTypes = {
  type: PropTypes.string.isRequired,
  isSearch: PropTypes.bool.isRequired,
  groupName: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  selectedData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChangeFunc: PropTypes.func,
};

export default FilterBox;
