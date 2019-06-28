/*
 * @lc app=leetcode id=13 lang=java
 *
 * [13] Roman to Integer
 */
class Solution {
    private HashMap<Character, Integer> map = new HashMap<Character, Integer>(){{
        put('I', 1);
        put('V', 5);
        put('X', 10);
        put('L', 50);
        put('C', 100);
        put('D', 500);
        put('M', 1000);
    }};
    // 从右往左，更大就加，更小就减
    public int romanToInt(String s) {
        if(s == null)
            return 0;
        char[] arr = s.toCharArray();
        int res = 0;
        for (int i = arr.length -1; i >=0; --i) {
            if (i == arr.length - 1 || map.get(arr[i]) >= map.get(arr[i+1]))
                res += map.get(arr[i]);
            else res -= map.get(arr[i]);
        }
        return res;
    }
}
