/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteInner = (arr, start, res) => {
    if (start === arr.length - 1) {
        res.push([].concat(arr));
        return;
    }
    permuteInner(arr, start+1, res);
    for(let i = start+1; i < arr.length; ++i) {
        [arr[start], arr[i]] = [arr[i], arr[start]];
        permuteInner(arr, start+1, res);
        [arr[start], arr[i]] = [arr[i], arr[start]];
    }
}
var permute = function(nums) {
    const res = [];
    if (!nums || nums.length <= 1) {
        res.push(nums);
    } else {
        permuteInner(nums, 0, res);
    }

    return res;
};
