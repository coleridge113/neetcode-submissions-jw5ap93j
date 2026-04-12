class Solution {
    fun searchMatrix(matrix: Array<IntArray>, target: Int): Boolean {
        val rows = matrix.size
        val cols = matrix[0].size

        var l = 0
        var r = rows * cols - 1

        while (l <= r) {
            val mid = l + (r - l) / 2
            val value = matrix[mid / cols][mid % cols]

            when {
                target < value -> r = mid - 1
                target > value -> l = mid + 1
                else -> return true
            }
        }

        return false
    }

}
