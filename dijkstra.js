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
    {
      a: 3,
      fin: 5
    }
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

const processed = [];

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
debugger;
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
