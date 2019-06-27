/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArraysInner = (arr1, index1, arr2, index2, k) => {
    if (index1 >= arr1.length) return arr2[index2 + k - 1];
    if (index2 >= arr2.length) return arr1[index1 + k - 1];
    if (k === 1) return Math.min(arr1[index1], arr2[index2]);
    const temp = k/2 >>> 0;
    const val1 = arr1[index1 + temp -1];
    const val2 = arr2[index2 + temp -1];
    if (val1 === undefined || val1 > val2) {
        return findMedianSortedArraysInner(arr1, index1, arr2, index2 + temp, k - temp);
    }
    return findMedianSortedArraysInner(arr1, index1 + temp, arr2, index2, k - temp);
};
var findMedianSortedArrays = function(nums1, nums2) {
    const len = nums1.length + nums2.length;
    return (findMedianSortedArraysInner(nums1, 0, nums2, 0, (len + 1)/2 >>> 0) + findMedianSortedArraysInner(nums1, 0, nums2, 0, (len + 2)/2 >>> 0))/2;
};
