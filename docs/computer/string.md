# String

::: tip
String 类型的问题都不太好做，暴力解法 OK，大部分情况可以用动态规划，但动态规划总不是最优的。KMP，马车拉算法... 才是最优解。
:::

## :raised_hand: [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)

- 暴力解法：从每个字符，字符间隙向两边找长度
- dp: `dp[i][j]` 表示 `substring(i, j+1)` 是否是 palindromic
- 马车拉 :hear_no_evil: 暂时放弃了吧

<<< @/codes/5.longest-palindromic-substring.js
