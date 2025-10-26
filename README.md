<h1>Linked List Implementation</h1>
A JavaScript implementation of a singly linked list data structure, completed as part of The Odin Project's curriculum to master dynamic data structures and pointer manipulation.

<h2>Overview</h2>
This project demonstrates the fundamental linked list data structure from scratch, featuring all core operations and additional utility methods. Linked lists provide efficient insertion and deletion operations compared to arrays, making them essential for understanding more complex data structures.

<h2>Features</h2>

<h3>Core LinkedList Methods</h3>

- append(value) - adds a new node to the end of the list

- prepend(value) - adds a new node to the start of the list

- size() - returns the total number of nodes

- getHead() - returns the first node

- getTail() - returns the last node

- at(index) - returns the node at given index

- pop() - removes the last element

- contains(value) - checks if value exists

- find(value) - returns index of value

- toString() - visualizes the list as a string

<h2>Data Structure</h2>

<pre>[Node(head)] -> [Node] -> [Node] -> [Node(tail)] -> null</pre>

Each node contains:

- value - the stored data

- nextNode - reference to the next node in sequence

<h2>Installation</h2>

1. Clone the repository:

<pre>git clone https://github.com/Basliel-Sisay/Linked-List.git</pre>

2. Navigate to the project directory:

<pre>cd Linked-List</pre>

<h2>File Structure</h2>

<pre>
  Linked-List/
├── linkedList.js      # Node and LinkedList class implementation
├── example.js         # Demonstration and test cases
├── package.json       # Project configuration
└── README.md          # Project documentation
</pre>

<h2>Technical Details</h2>

<h3>Time Complexity</h3>

- Access: O(n) - linear traversal required

- Search: O(n) - linear traversal required

- Insertion: O(1) at head, O(n) at arbitrary position

- Deletion: O(1) at head, O(n) at arbitrary position

<h3>Space Complexity</h3>

- Overall: O(n) - linear space based on number of elements

<h3>Learning Objectives</h3>

This project helps understand:

- Pointer/reference manipulation

- Dynamic memory allocation concepts

- Node-based data structures

- Efficient insertion/deletion algorithms

- Recursive traversal patterns

- Foundation for trees, graphs, and other advanced structures

<h2>Testing</h2>

Run the demonstration:

<pre>node example.js</pre>

The test suite validates all core functionality including edge cases for empty lists, single-element lists, and boundary conditions.

<h2>Contributing</h2>

Contributions are welcome! Feel free to:

- Add additional linked list variants (doubly linked, circular)

- Implement additional utility methods

- Add comprehensive test suites

- Improve documentation and examples

<h2>License</h2>

This project is open source and available under the MIT License.
