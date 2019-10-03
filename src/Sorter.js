import React from 'react';
import PropTypes from 'prop-types';

function Sorter({ onColumnChange }) {
  return (
    <form>
      <fieldset>
        <legend>Ordena por columna:</legend>
        <select onChange={onColumnChange}>
          <option value="route_id">🚍</option>
          <option value="arrival_estimation">Cuándo</option>
          <option value="bus_distance">Distancia</option>
        </select>
      </fieldset>
    </form>
  );
}

Sorter.propTypes = {
  onColumnChange: PropTypes.func.isRequired
};

export default Sorter;
