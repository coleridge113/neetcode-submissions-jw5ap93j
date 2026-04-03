class Solution {
    fun maxArea(heights: IntArray): Int {
        var a = 0

        var l = 0
        var r = heights.size - 1
        while (l < r) {
            val h = minOf(heights[l], heights[r])
            val d = r - l

            a = maxOf(h * d, a)

            if (heights[l] < heights[r]) l++ else r--
        }

        return a

    }
}
