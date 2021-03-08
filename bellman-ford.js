function bellman_ford(edges, costs, parents) {
  const edgesCount = edges.size;
  for (let i = 0; i < edgesCount; i++) {
    edges.forEach((peakObj,peakName) => {
      const edgeCost = costs.get(peakName);
      const neighborPeakNames = Object.keys(peakObj);

      neighborPeakNames.forEach(neighborPeakName => {
        const neighborPeakCost = costs.get(neighborPeakName);
        const newNeighborPeakCost = edgeCost + peakObj[neighborPeakName];

        if (neighborPeakCost > newNeighborPeakCost) {
          parents.set(neighborPeakName, peakName);
          costs.set(neighborPeakName, newNeighborPeakCost);
        }
      });
    });
  }
}

const edges = new Map([
  [
    'a',
    {
      c: -3,
      e: 2
    }
  ],
  [
    'b',
    {
      f: -5
    }
  ],
  [
    'c',
    {
      b: 7,
      h: -3
    }
  ],
  [
    'd',
    {}
  ],
  [
    'e',
    {}
  ],
  [
    'f',
    {
      g: 2,
    }
  ],
  [
    'g',
    {
      b: 4
    }
  ],
  [
    'h',
    {
      d: 1
    }
  ],
  [
    's',
    {
      a: 5
    }
  ]
]);

const costs = new Map([
  ['s', 0],
  ['a', Infinity],
  ['b', Infinity],
  ['c', Infinity],
  ['d', Infinity],
  ['e', Infinity],
  ['f', Infinity],
  ['g', Infinity],
  ['h', Infinity]
]);

const parents = new Map([
  ['s', undefined],
  ['a', null],
  ['b', null],
  ['c', null],
  ['d', null],
  ['e', null],
  ['f', null],
  ['g', null],
  ['h', null]
]);

bellman_ford(edges, costs, parents);
