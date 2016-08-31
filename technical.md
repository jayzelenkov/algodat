# Technical Questions

## Absolute must-have knowledge

Understand how to use and implement them, and where applicable, the space and time complexity.


### Data structures

- Linked Lists
- Trees, Tries & Graphs
- Stacks & Queues
- Heaps
- Vectors / ArrayLists
- HashTables

### Algorithms

- Breadth-First Search
- Depth-First Search
- Binary Search
- Merge Sort
- Quick Sort

### Concepts

- Bit Manipulation
- Memory (Stack vs. Heap)
- Recursion
- Dynamic Programming
- Big O Time & Space



## Problem-Solving Flowchart

### listen

notice clues:
- run on server / run repeatedly vs run once.
- given two arrays that are sorted => optimal algorithm for the sorted situation is probably different than the optimal algorithm for the unsorted situation

### example

most examples are too small or are special cases. Debug your example. Is there any way it's a special case? Is it big enough?

draw example


### brute force

get a brute force solution as soon as possible. Don't worry about developing an efficient algorithm yet. State a naive algorithm and its runtime, then optimize from there. Don't code yet though.


### BUD Optimization

- Bottlenecks
- Unnecessary Work
- Duplicated Work


### test

in order:

- conceptual test. Walk through your code like you would for a detailed code review
- unusual or non-standard code
- hot spots, like arithmetic and null nodes
- small test cases. It's much faster than a big test case and just as effective
- special cases and edge cases


### optimize

- look for unused info
- solve it manually on an example, then reverse engineer your thought process.
- solve it incorrectly
- make a time vs space tradeoff. Hash tables are especially useful


### walk through

now that you have an optimal solution, walk through your approach in detail. Make sure you understand each detail before you start coding

__if you don't understand exactly what you're about to write, you'll struggle to code it. It will take you longer to finish the code, and you're more likely to make major errors.__

### implement

your goal is to write beautiful code. modularize your code from the beginning and refactor to clean up anything that isn't beautiful.

- modularized code
- add TODOs for error checks
- use other classes / structs where appropriate
- good variable names


__KEEP TALKING ALL THE TIME__ The interviewer wants to hear how you approach the problem.
