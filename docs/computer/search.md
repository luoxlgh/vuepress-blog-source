# 查找

常见的查找有：
- 静态查找
    - 有序
    - 无序
- 动态查找
    - 树
- 哈希表

## [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)（二分）

二分的思想是每次筛选掉一半的元素。<br/>
本题可以看做是查找两个数组中第 k 小的元素。<br/>
每次可以在数组中筛选掉 k/2 的元素。

<<< @/codes/4.median-of-two-sorted-arrays.js

## [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)（二分）

二维数组每行每列均递增，__第二行的第一个元素大于第一行的最后一个元素__。查询 target。
1. 二分法根据每行最后一列确定 target 所在的行。
2. 二分法在该行中查找 target。

<<< @/codes/74.search-a-2d-matrix.java

网上有种方法是将二维数组展开成一维数组，进行坐标变换转换为一维二分查找：`n * m matrix convert to an array => matrix[x][y] => a[x * m + y]`。但这样做有几个坏处：
1. m*n 溢出
2. 坐标变换除法和取余时间复杂度高
3. __There is actually a third reason why this method is not the optimal: Cache hit rate. This method is not as cache friendly as doing the row->column 2 binary search way.__
