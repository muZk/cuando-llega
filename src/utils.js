import get from 'lodash/get';
import round from 'lodash/round';
import sortBy from 'lodash/sortBy';
import { stops } from 'transantiago-api-client';

const config = {
  timeout: 4500
};

export const sort = (arrivals, sortValue) => sortBy(arrivals, [sortValue]);

export const distance = meters =>
  meters && (meters < 1000 ? `${meters}m` : `${round(meters / 1000, 2)}km`);

export const urlForStop = stopId =>
  `https://www.red.cl/planifica?paradero=${stopId}&servicio=&section=cll`;

export function fetchNextArrivals(stopId) {
  return stops
    .nextArrivals(stopId, config)
    .then(response => get(response, 'data.results', []));
}
