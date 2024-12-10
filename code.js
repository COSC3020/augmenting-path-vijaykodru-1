function augmentingPath(graph, start, end) {
    //base case where the start and end are same
    if (start === end) {
        return [start];
    }

    let queue = [[start]]; // Queue to store paths
    let visited = new Set(); // tracks the visited nodes
    visited.add(start);//add the start node to the visitied set

    while (queue.length > 0) {
        let path = queue.shift(); // Dequeue the first path
        let currentNode = path[path.length - 1]; // Get the last node in the path

        if (graph[currentNode]) {
            for (let neighbor in graph[currentNode]) {
                if (!visited.has(neighbor)) {
                    let newPath = [...path, neighbor]; // Create a new path with the original path included
                    if (neighbor === end) {
                        return newPath; // Return the path if it reaches the end node
                    }
                    queue.push(newPath); // Enqueue the new path
                    visited.add(neighbor); // Mark the neighbor as visited
                }
            }
        }
    }

    return []; // Return an empty list if no path is found
}
