/**
 * @description Implementation of Dijkstra algorithm.
 *
 * >Result of this implementation contains inside `parents` hash-table
 * @param {Map} graph - `graph` hash-table
 * @param {Map} costs - `costs` hash-table
 * @param {Map} parents - `parents` hash-table
 * @return {void}
 */
function dijkstra(graph, costs, parents) {
  const processed = [];

  /**
   * Find lowest cost node from the `costs` hash-table and return it `key` value.
   * @param {Map} costs - `costs` hash-table
   * @return {string} - key value of the lowest cost node
   */
  function findLowestCostNode(costs) {
    let lowestCost = Infinity;
    let lowestCostNode = null;
    costs.forEach((val, key) => {
      if (lowestCost > val && !processed.includes(key)) {
        lowestCost = val;
        lowestCostNode = key;
      }
    })
    return lowestCostNode;
  }

  let node = findLowestCostNode(costs);
  while (node) {
    let cost = costs.get(node);
    let neighbors = graph.get(node);
    for (let n in neighbors) {
      let newCost = cost + neighbors[n];
      if (costs.get(n) > newCost) {
        costs.set(n, newCost);
        parents.set(n, node);
      }
    }
    processed.push(node);
    node = findLowestCostNode(costs);
  }
}

/**
 * Sets path for lowest cost path.
 * @param {Map} parents - `parents` hash-table
 * @param {string} point - endpoint key value.
 * @return {string} - forming path
 */
function getPath(parents, point) {
  const path = [point];
  while (point) {
    const pointVal = parents.get(point);
    path.unshift(pointVal);
    point = parents.has(pointVal) ? pointVal : null;
  }
  return path.join(' => ')
}

const graph = new Map([
  [
    'start',
    {
      a: 6,
      b: 2
    }
  ],
  [
    'a',
    {
      fin: 1
    }
  ],
  [
    'b',
    {
      a: 3,
      fin: 5
    }
  ],
  [
    'fin',
    {}
  ]
]);

const costs = new Map([
  ['a', 6],
  ['b', 2],
  ['fin', Infinity]
]);

const parents = new Map([
  ['a', 'start'],
  ['b', 'start'],
  ['fin', null]
]);

dijkstra(graph, costs, parents);
console.log(getPath(parents, 'fin'));
