function bfs (graph, startingPoint){
    const searchQueue = [];
    searchQueue.push(graph.get(startingPoint));

    while (searchQueue.length > 0){
        const person = searchQueue.shift();
        if(!person.isVisited){
            person.isVisited = true;
            if (person.isSaller){
                console.log(`${person.name} is a mango seller!`);
                return true;
            } 
            console.log(`-> ${person.name} isn't a mango seller!`);
            person.friends.forEach(name => searchQueue.push(graph.get(name)));
        }
    }
    console.log(`Sorry! But we didn't find a mango seller!`);
    return false;
}


const graph = new Map();
graph.set('you', {
    name: 'you',
    isVisited: false,
    isSaller: false,
    friends: ['Alice', 'Bob', 'Clare']
});
graph.set('Alice', {
    name: 'Alice',
    isVisited: false,
    isSaller: false,
    friends: ['Peggy']
});
graph.set('Peggy', {
    name: 'Peggy',
    isVisited: false,
    isSaller: false,
    friends: []
});
graph.set('Bob', {
    name: 'Bob',
    isVisited: false,
    isSaller: false,
    friends: ['Peggy', 'Anuj']
});
graph.set('Anuj', {
    name: 'Anuj',
    isSaller: true,
    isVisited: false,
    friends: []
});
graph.set('Clare', {
    name: 'Clare',
    isVisited: false,
    isSaller: false,
    friends: ['Tom', 'Johnny']
});
graph.set('Tom', {
    name: 'Tom',
    isVisited: false,
    isSaller: false,
    friends: []
});
graph.set('Johnny', {
    name: 'Johnny',
    isVisited: false,
    isSaller: true,
    friends: []
});

bfs(graph, 'you')