# TypeScript Closure Issue in setTimeout Loop

This repository demonstrates a common closure issue in JavaScript (and therefore TypeScript) when using `setTimeout` within a loop.  The problem arises because the closure created by `setTimeout` doesn't capture the value of `i` at the time of each iteration, but rather captures the final value of `i` after the loop has completed.

## The Bug

The `printNumbers2` function attempts to print numbers 1 through 5 with a delay using `setTimeout`. However, due to the closure issue, it prints 6 five times. This is because the closure in `setTimeout` only captures the final value of `i` (which is 6 after the loop completes). 

## The Solution

The solution involves using an immediately invoked function expression (IIFE) to create a new scope for each iteration of the loop, ensuring that the correct value of `i` is captured by each closure.