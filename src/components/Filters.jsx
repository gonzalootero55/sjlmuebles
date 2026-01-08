// src/components/Filters.jsx
import React from 'react';

const Filters = ({ setFilters, currentFilters }) => {
  // Datos simulados para el filtro de categorías
  const categories = ['Todos', 'Sofás', 'Mesas', 'Sillas']; 

  const handleCategoryChange = (e) => {
    setFilters(prev => ({ ...prev, category: e.target.value }));
  };

  return (
    <div className="filters-sidebar">
      <h3>Filtros</h3>
      <div className="filter-group">
        <label>Categoría:</label>
        <select value={currentFilters ? currentFilters.category : 'Todos'} onChange={handleCategoryChange}>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;