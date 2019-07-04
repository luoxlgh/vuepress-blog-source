/*
 * @lc app=leetcode id=74 lang=java
 *
 * [74] Search a 2D Matrix
 */
class Solution {
    private int searchMatrixRow(int[][] arr, int start, int end,int target) {
        if (start == end)
            return start;
        int col = arr[0].length - 1;
        if (start + 1 == end) {
            if (target <= arr[start][col])
                return start;
            return end;
        }
        int mid = (start + end)/2;
        if (arr[mid][col] == target)
            return mid;
        if (arr[mid][col] > target)
            return searchMatrixRow(arr, start, mid, target);
        return searchMatrixRow(arr, mid +1, end, target);
    }
    private boolean searchMatrixCol(int[] arr, int start, int end,int target) {
        if (start > end || target > arr[end] || target < arr[start])
            return false;
        if (target == arr[end] || target == arr[start])
            return true;
        int mid = (start + end)/2;
        if (target == arr[mid])
            return true;
        if (target > arr[mid])
            return searchMatrixCol(arr, mid + 1, end -1, target);
        return searchMatrixCol(arr, start + 1, mid - 1, target);

    }
    public boolean searchMatrix(int[][] matrix, int target) {
        if (matrix == null || matrix.length < 1 || matrix[0].length < 1)
            return false;

        int row = searchMatrixRow(matrix, 0, matrix.length-1, target);
        // System.out.println(row);
        return searchMatrixCol(matrix[row], 0, matrix[row].length - 1, target);
    }
}
