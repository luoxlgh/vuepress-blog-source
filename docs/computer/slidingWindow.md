# 滑动窗口

::: tip
用 HashSet/Array 记录位置。left 和 right 指向两个边界。先移动 right, 某些情况下移动 left。
:::

## [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

Given a string, find the length of the longest substring without repeating characters.
> Input: "abcabcbb"<br/>
Output: 3<br/>
Explanation: The answer is "abc", with the length of 3.

- left = -1; right = 0; HashMap<Character, Integer(下标)> hmap;
- 如果 hmap 中含有 right，移动 left 到 上一个right的值。此时的长度为 right - left。

<<< @/codes/3.longest-substring-without-repeating-characters.js{17}

