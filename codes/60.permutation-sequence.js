/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let res = "";
    const arr = "123456789".split("");
    const numArr = [1];
    for (let i = 1; i < n; ++i)
        numArr.push(numArr[i-1]*i);
    --k;
    for (let i = n; i >= 1; --i) {
        const j = k / numArr[i - 1] >>> 0;
        k %= numArr[i - 1];
        res += arr[j];
        arr.splice(j, 1);
    }
    return res;
};
