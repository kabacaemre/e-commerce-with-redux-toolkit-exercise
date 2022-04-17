/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../Icons';
import './GlobalSearch.scss';

function GlobalSearch() {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const products = JSON.parse(localStorage.getItem('products'));

  function handleChange(event) {
    const queryVal = event.target.value.toLowerCase();
    setQuery(queryVal);
    if (queryVal.length > 1) {
      const filterSuggestionsData = products.filter((x) => x.name.toLowerCase().indexOf(queryVal) > -1);
      setFilteredSuggestions(filterSuggestionsData);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }

  function autoCompleteClear() {
    setQuery('');
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  }

  return (
    <form className="globalSearch">
      <input
        type="text"
        name="query"
        className="searchInput"
        placeholder="Search"
        onChange={handleChange}
        onBlur={() => setShowSuggestions(false)}
        value={query}
      />
      <button type="button" className="searchBtn">
        <Search />
      </button>
      {filteredSuggestions.length > 0 ? (
        <ul className="autoComplete" style={{ display: showSuggestions ? 'block' : 'none' }}>
          {filteredSuggestions.map((suggestion) => {
            return (
              <li key={suggestion.id} onClick={autoCompleteClear}>
                <Link to={`/product/${suggestion.id}`}>{suggestion.name}</Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className="autoComplete" style={{ display: showSuggestions ? 'block' : 'none' }}>
          <li>Kayıt bulunamadı!</li>
        </ul>
      )}
    </form>
  );
}

export default GlobalSearch;
