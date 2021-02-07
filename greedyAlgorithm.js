function intersection(setA, setB) {
  const _intersection = new Set();
  for (let elem of setB) {
    setA.has(elem) && _intersection.add(elem);
  }
  return _intersection;
}

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

console.log(finalStations)

