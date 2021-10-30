# PRNGs

## Description

**PRNGs** also called as pseudo-random number generators are algorithmic random number generations.
They are using or used by the browser for implement `Math.random` function.

## Additional info 

Since 2015 pretty much every browser (the major ones at least) ditched their old PRNG algorithms, and now they all use the same one: called **xorshift128+**.
They used like **Marsenne-Twister**, **Multiply With Carry**, or **Linear Congruential Generator** algorithms in the past.
