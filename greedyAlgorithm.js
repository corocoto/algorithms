/**
 * Intersection `Set` operation
 * @param {Set} setA - first set
 * @param {Set} setB - second set
 * @return {Set<any>} - result of intersection operation
 */
function intersection(setA, setB) {
  const _intersection = new Set();
  for (let elem of setB) {
    setA.has(elem) && _intersection.add(elem);
  }
  return _intersection;
}

/**
 * Difference `Set` operation
 * @param {Set} setA - first set
 * @param {Set} setB - second set
 * @return {Set<any>} - result of difference operation
 */
function difference(setA, setB) {
  const _difference = new Set(setA);
  for (let elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}


let statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);
const stations = new Map([
  ['kone', new Set(['id', 'nv', 'ut'])],
  ['ktwo', new Set(['wa', 'id', 'mt'])],
  ['kthree', new Set(['or', 'nv', 'ca'])],
  ['kfour', new Set(['nv', 'ut'])],
  ['kfive', new Set(['ca', 'az'])],
]);

const finalStations = new Set();

/**
 * Greedy algorithm implementation. For task with stations.
 * @param {Set} statesNeeded
 * @param {Set} stations
 * @return {Set<any>} - result of greedy algorithm
 */
function greedyAlgorithm(statesNeeded, stations) {
  while (statesNeeded.size) {
    let bestStation = null;
    let statesCovered = new Set();

    stations.forEach((statesForStation, station) => {
      const covered = intersection(statesNeeded, statesForStation);
      if (covered.size > statesCovered.size) {
        bestStation = station;
        statesCovered = covered;
      }
    });

    statesNeeded = difference(statesNeeded, statesCovered);
    finalStations.add(bestStation);
  }
  return finalStations;
}
console.log(greedyAlgorithm(statesNeeded, stations));