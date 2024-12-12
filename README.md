# Unhandled Promise Rejection in Async/Await with Long-Running Task

This repository demonstrates a subtle error in Node.js async/await error handling when dealing with long-running tasks.  If an error occurs within the long-running task, it might not be properly caught by the try...catch block, leading to a silent failure.

## Bug Description
The provided code attempts to read a file asynchronously and then performs a long-running task. If the file reading fails, the error is properly caught. However, if an error occurs during the long-running task, the `catch` block does not handle it leading to a unhandled promise rejection.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js`
3. Observe the output.  Even if you introduce an error in the long running task, it is not caught by the try catch block.

## Solution
The solution involves making sure any promises within the long running tasks are awaited or using a process manager to gracefully handle errors.
