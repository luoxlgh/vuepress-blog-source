# 迭代/递归/回溯

如果要求空间复杂度是 `O(1)`，需要用迭代。因为递归有函数调用栈的空间消耗。

## [Permutations](https://leetcode.com/problems/permutations/)

经典全排列的题目。有两种方法：
- 从当前位置 i 开始，分别与后面的替换，递归回溯 i+1 的情况。
- 用另一个数组标记当前值是否有被使用，每次递归都遍历完整的数组，放入还未被使用的值，再往下递归。

<<< @/codes/46.permutations.js
<<< @/codes/46.permutations.java
