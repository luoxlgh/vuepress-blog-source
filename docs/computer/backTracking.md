# 迭代/递归/回溯

::: warning
如果要求空间复杂度是 `O(1)`，需要用迭代。因为递归有函数调用栈的空间消耗。__面试的时候千万不要说的空间复杂度是 `O(1)`， 最后写了个递归__
:::

## [Permutations](https://leetcode.com/problems/permutations/)

经典全排列的题目。有两种方法：
- :thumbsup: 从当前位置 i 开始，分别与后面的替换，递归回溯 i+1 的情况。
- 用另一个数组标记当前值是否有被使用，每次递归都遍历完整的数组，放入还未被使用的值，再往下递归。

<<< @/codes/46.permutations.js
<<< @/codes/46.permutations.java

## [Permutations II](https://leetcode.com/problems/permutations-ii/)
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

> 与 __permutations__ 不同的地方在于有重复的情况。对于 `arr[i]` 这个位置，为了避免重复，不能出现重复的字符。所以需要加一个 map 来去重。

<<< @/codes/47.permutations-ii.js{15}



