# 查找

常见的查找有：
- 静态查找
    - 有序
    - 无序
- 动态查找
    - 树
- 哈希表

## 二分： [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)

二分的思想是每次筛选掉一半的元素。<br/>
本题可以看做是查找两个数组中第 k 小的元素。<br/>
每次可以在数组中筛选掉 k/2 的元素。

<<< @/codes/4.median-of-two-sorted-arrays.js

