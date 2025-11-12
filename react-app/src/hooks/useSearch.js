import { useState, useMemo, useCallback, useEffect } from 'react';

/**
 * Custom React Hook for product search, filter, and sort
 * Works with dynamic input changes and auto-resets when cleared.
 */
export const useSearch = (data, searchFields = [], options = {}) => {
  const { clearFiltersOnEmptySearch = true } = options;

  // --- States ---
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState('');
  const [displayData, setDisplayData] = useState(Array.isArray(data) ? data : []);

  // ✅ Update displayed data when base data changes
  useEffect(() => {
    if (Array.isArray(data)) {
      setDisplayData(data);
    }
  }, [data]);

  // ✅ Core Filtering + Sorting Logic
  const filteredData = useMemo(() => {
    const baseData = Array.isArray(data) ? data : [];
    let result = [...baseData];

    const term = String(searchTerm || '').trim().toLowerCase();

    // --- Search logic ---
    if (term.length > 0) {
      result = result.filter(item =>
        searchFields.some(field => {
          const value = field.split('.').reduce((obj, key) => obj?.[key], item);
          return String(value ?? '').toLowerCase().includes(term);
        })
      );
    }

    // --- Filter logic ---
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        if (key === 'price' && typeof value === 'string') {
          if (value.includes('-')) {
            const [min, max] = value.split('-').map(Number);
            result = result.filter(item => item.price >= min && item.price <= max);
          } else if (value.includes('+')) {
            const min = parseInt(value.replace('+', ''), 10);
            result = result.filter(item => item.price >= min);
          } else if (value === '0-2000') {
            result = result.filter(item => item.price < 2000);
          } else if (value === '2000-5000') {
            result = result.filter(item => item.price >= 2000 && item.price <= 5000);
          } else if (value === '5000-10000') {
            result = result.filter(item => item.price >= 5000 && item.price <= 10000);
          } else if (value === '10000+') {
            result = result.filter(item => item.price >= 10000);
          }
        } else {
          result = result.filter(item => item[key] === value);
        }
      }
    });

    // --- Sorting logic ---
    if (sortBy) {
      switch (sortBy) {
        case 'price-low':
          result.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          result.sort((a, b) => b.price - a.price);
          break;
        case 'name':
          result.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
          break;
        case 'rating':
          result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
          break;
        case 'featured':
        default:
          // Keep featured items first, then sort by rating
          result.sort((a, b) => {
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            return (b.rating || 0) - (a.rating || 0);
          });
          break;
      }
    }

    return result;
  }, [data, searchTerm, filters, sortBy, searchFields]);

  // ✅ Clear filters/sort when search is empty (if configured)
  useEffect(() => {
    const term = String(searchTerm || '').trim();
    if (term === '' && clearFiltersOnEmptySearch) {
      setFilters({});
      setSortBy('');
    }
  }, [searchTerm, clearFiltersOnEmptySearch]);

  // ✅ Update display data based on filtered results
  useEffect(() => {
    const term = String(searchTerm || '').trim();
    if (term === '') {
      // Reset to full data when search is cleared
      setDisplayData(Array.isArray(data) ? data : []);
    } else {
      // Show filtered results when searching
      setDisplayData(filteredData);
    }
  }, [filteredData, searchTerm, data]);

  // ✅ Input Handlers
  // Accept either an event (e.target.value) or a raw string value.
  // Trim whitespace so empty-but-spaced input counts as empty.
  const handleSearchChange = useCallback((valueOrEvent) => {
    const raw = valueOrEvent && valueOrEvent.target ? valueOrEvent.target.value : valueOrEvent;
    const trimmed = String(raw || '').trim();
    setSearchTerm(trimmed);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchTerm('');
    if (clearFiltersOnEmptySearch) {
      setFilters({});
      setSortBy('');
    }
    setDisplayData(Array.isArray(data) ? data : []);
  }, [clearFiltersOnEmptySearch, data]);

  // ✅ Filter / Sort Handlers
  const updateFilter = useCallback((key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({});
    setSortBy('');
    setSearchTerm('');
    setDisplayData(Array.isArray(data) ? data : []);
  }, [data]);

  // ✅ Return hook API
  return {
    searchTerm,
    handleSearchChange,
    handleClearSearch,
    filters,
    updateFilter,
    sortBy,
    setSortBy,
    filteredData: displayData,
    clearFilters,
  };
};
