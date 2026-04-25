class Solution {
    fun searchMatrix(matrix: Array<IntArray>, target: Int): Boolean {
        val rows = matrix.size
        val cols = matrix[0].size

        var l = 0
        var r = rows * cols - 1

        while (l <= r) {
            val m = l + (r - l) / 2
            val v = matrix[m / cols][m % cols]

            when {
                target > v -> l = m + 1
                target < v -> r = m - 1
                else -> return true
            }
        }

        return false
    }
}
