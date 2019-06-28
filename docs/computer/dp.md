# 动态规划

主要有四种情况：
- `dp[i] = fx(dp[i-1], dp[i-2])`。斐波那契。
- `dp[i][j]` 由 `dp[i-1][j]` 或 `dp[i][j-1]` 推导而来。这时候当前行只由上一行决定，因此可以退化为一维数组形式。:exclamation: 注意遍历顺序，不要覆盖。
- 斜对角线：`dp[i][j]` 由 `dp[i+1][j+1]` 推导而来。
- 由之前其他值推导而来：买卖股票系列。

## [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)

Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.
> '.' Matches any single character.<br/>
'*' Matches zero or more of the preceding element.

### 递归解法
这种题的第一反应是用递归做，按 a-z, . 和 * 三种情况依次分析：

<<< @/codes/10.regular-expression-matching-re.js

效率更优的解法一般是dp，有时候递归会超时。
### DP

`dp[i][j]` 表示 `s.substring(0, i+1)` 与 `p.substring(0, j+1)` 是否匹配。
- `s[i] === p[j] || p[j] === '.'` 时： `dp[i][j] = dp[i-1][j-1]`。
- `p[j] === '*'` 时：
    - `s[i] !== p[j-1] && p[j-1] !== '.'` 时：`dp[i][j] = dp[i][j-2]`。`i` 与 `*` 之前的字符无法匹配。`*` 此时表示 0。
    - `*` 之前的字符可以匹配当前字符。`dp[i-1][j] || dp[i][j-1] || d[i][j-2]`。依次表示匹配n次，1次和0次。

<<< @/codes/10.regular-expression-matching.js
