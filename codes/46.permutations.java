/*
 * @lc app=leetcode id=46 lang=java
 *
 * [46] Permutations
 */
class Solution {
    private List<List<Integer>> res;
    private void permuteInner(int[] nums, int index) {
        if (index == nums.length - 1) {
            ArrayList<Integer> arr = new ArrayList<Integer>();
            for (int n: nums)
                arr.add(n);
            res.add(arr);
            return;
        }
        permuteInner(nums, index + 1);
        int temp = nums[index];
        for (int i = index + 1; i < nums.length; ++i) {
            nums[index] = nums[i];
            nums[i] = temp;
            permuteInner(nums, index + 1);
            nums[i] = nums[index];
            nums[index] = temp;
        }
    }
    public List<List<Integer>> permute(int[] nums) {
        res = new ArrayList<>();
        permuteInner(nums, 0);
        return res;
    }
}
