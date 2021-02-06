const graph = new Map();
graph.set('start', {
  a: 6,
  b: 2
});
graph.set('a', {
  fin: 1
});
graph.set('b', {
  a: 3,
  fin: 5
});
graph.set('fin', {});


const costs = new Map();
costs.set('a', 6);
costs.set('b', 2);
costs.set('fin', Infinity);


const parents = new Map();
parents.set('a', 'start');
parents.set('b', 'start');
parents.set('in', null);

