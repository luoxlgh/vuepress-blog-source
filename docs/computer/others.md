# 找规律

## [Next Permutation](https://leetcode.com/problems/next-permutation/)

从后往前，找到一个峰谷（位置记为 i）。
- if i < 0: reverse 整个 String
- else: (len...i+1) 找出比 i-1 大的 j 与 i 交换。(i...len) reverse;

<<< @/codes/31.next-permutation.js

