# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
start and end node are the same, it should return a list containing only this
node. If there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = {'foo': {'boo': 7},
             'boo': {'foo': 3, 'bar': 2},
             'bar': {'boo': 4}};
augmentingPath(graph, 'foo', 'bar');
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

The worst case time complexity of the implemented code is $\Theta(V + E)$. This is because the initialization of the queue and the visited set along with adding start node to the visited set, all of them take constant time resulting in $O(1)$. Next the loop continues until the queue is emtpy which makes sure to visit all the nodes which is given by $O(V)$. And then the inner loop goes through each node and checks the edges of that node which takes $O(E)$. In a worst case scenerio we have to traverse through every single node to ensure every node is marked visites which in total we get the worst case complexity as $\Theta(V + E)$.


References:

https://www.simplilearn.com/tutorials/data-structure-tutorial/bfs-algorithm

The above website gave me a good understanding of the BFS algorithm with the pseudo code for implementing it with a stating point.

The following website included a video that helped  in understanding it better with theoretical exmaples.

https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/

https://www.cs.usfca.edu/~galles/visualization/BFS.html

The website has always been helpful in visualizing the algorithms including the current BFS search

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice