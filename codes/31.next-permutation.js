/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let length = nums.length;
    let i, j;
    for(i = length - 2; i >= 0; i--){
        if(nums[i] < nums[i + 1]){
            break;
        }
    }
    if(i < 0){
        nums.reverse();
    }else{
        for(j = length - 1; j > i; j--){
            if(nums[j] > nums[i]){
                break;
            }
        }
        [nums[j], nums[i]] = [nums[i], nums[j]]
        let start = i + 1, end = length - 1;
        while(start < end){
            [nums[start++], nums[end--]] = [nums[end], nums[start]]
        }
    }
    return nums;
};
