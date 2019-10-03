import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { distance, sort } from './utils';

function ArrivalsResult({ arrivals, sortColumn }) {
  const [values, set] = useState([]);

  useEffect(() => {
    set(sort(arrivals, sortColumn));
  }, [sortColumn]);

  return (
    <table>
      <thead>
        <tr>
          <td>
            <center>{'🚍'}</center>
          </td>
          <td>cuándo</td>
          <td>distancia</td>
        </tr>
      </thead>
      <tbody>
        {values.map(arrival => (
          <tr key={arrival['bus_plate_number'] || arrival['route_id']}>
            <td>
              <code>{arrival.route_id}</code>
            </td>
            <td colSpan={!arrival['bus_distance'] ? 2 : 1}>
              {arrival.arrival_estimation}
            </td>
            {arrival['bus_distance'] && (
              <td>{distance(arrival.bus_distance)}</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

ArrivalsResult.propTypes = {
  arrivals: PropTypes.arrayOf(
    PropTypes.shape({
      bus_distance: PropTypes.string,
      route_id: PropTypes.string,
      bus_plate_number: PropTypes.string
    })
  ).isRequired
};

export default ArrivalsResult;
