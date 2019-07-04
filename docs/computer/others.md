# 找规律

## [Next Permutation](https://leetcode.com/problems/next-permutation/)

从后往前，找到一个峰谷（位置记为 i）。
- if i < 0: reverse 整个 String
- else: (len...i+1) 找出比 i-1 大的 j 与 i 交换。(i...len) reverse;

<<< @/codes/31.next-permutation.js

## [Permutation Sequence](https://leetcode.com/problems/permutation-sequence/)

Given n and k, return the kth permutation sequence.

- 用 next permutation 的方法依次寻找。
- 找规律。对于 "xyzu" 中的 y， 后面的排列组合个数为 1*2 = 2种，即 1*2...*n。

<<< @/codes/60.permutation-sequence.js




