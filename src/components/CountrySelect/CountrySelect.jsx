import React, { useState, useRef, useEffect } from 'react';
import { countries } from '../../data/countries';
import './CountrySelect.css';

const CountrySelect = ({ name = 'country', value, onChange, required = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(value || '');
  const containerRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedCountry(value);
    }
  }, [value]);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(search.trim().toLowerCase()) ||
    c.code.toLowerCase().includes(search.trim().toLowerCase())
  );

  const handleSelect = (country) => {
    const val = country.name;
    setSelectedCountry(val);
    setIsOpen(false);
    setSearch('');
    if (onChange) {
      onChange(val);
    }
  };

  const selectedObj = countries.find((c) => c.name === selectedCountry);

  return (
    <div className={`country-select-wrapper ${isOpen ? 'is-open' : ''}`} ref={containerRef}>
      {/* Hidden input to ensure native form submission (Formspree) captures the value */}
      <input type="hidden" name={name} value={selectedCountry} required={required} />

      {/* Trigger Button */}
      <button
        type="button"
        className={`country-select-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={`country-trigger-text ${!selectedCountry ? 'placeholder' : ''}`}>
          {selectedObj ? (
            <span className="selected-item">
              <span className="country-flag">{selectedObj.flag}</span>
              <span className="country-name">{selectedObj.name}</span>
            </span>
          ) : (
            'Select Country'
          )}
        </span>
        <span className={`country-chevron ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      <div className="ct-underline" />

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="country-dropdown-menu">
          {/* Search Box */}
          <div className="country-search-box">
            <svg
              className="country-search-icon"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              ref={searchInputRef}
              type="text"
              className="country-search-input"
              placeholder="Search country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
            {search && (
              <button
                type="button"
                className="country-search-clear"
                onClick={(e) => {
                  e.stopPropagation();
                  setSearch('');
                  searchInputRef.current?.focus();
                }}
              >
                ✕
              </button>
            )}
          </div>

          {/* List of Countries */}
          <ul className="country-list" role="listbox">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((c) => {
                const isSelected = c.name === selectedCountry;
                return (
                  <li
                    key={c.code}
                    className={`country-list-item ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSelect(c)}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <span className="country-flag">{c.flag}</span>
                    <span className="country-name">{c.name}</span>
                    {isSelected && <span className="country-check">✓</span>}
                  </li>
                );
              })
            ) : (
              <li className="country-no-results">No country found for "{search}"</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountrySelect;
