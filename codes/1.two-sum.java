/*
 * @lc app=leetcode id=1 lang=java
 *
 * [1] Two Sum
 */
class Solution {
    public int[] twoSum(int[] nums, int target) {
        if (nums != null) {
            HashMap<Integer, Integer> hmap = new HashMap<Integer, Integer>();
            for (int i = 0; i < nums.length; ++i) {
                if (hmap.containsKey(nums[i])) {
                    return new int[] {hmap.get(nums[i]), i};
                } else {
                    hmap.put(target - nums[i], i);
                }
            }
        }
        return new int[2];
    }
}

