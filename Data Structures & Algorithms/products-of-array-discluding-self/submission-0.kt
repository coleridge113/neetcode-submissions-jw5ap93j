class Solution {
    fun productExceptSelf(nums: IntArray): IntArray {
        val n = nums.size
        val pre = IntArray(n)
        val pos = IntArray(n)
        val res = IntArray(n)

        pre[0] = 1
        for (i in 1 until n) {
            pre[i] = pre[i - 1] * nums[i - 1]
        }

        pos[n - 1] = 1
        for (i in n - 2 downTo 0) {
            pos[i] = pos[i + 1] * nums[i + 1]
        }

        for (i in 0 until n) {
            res[i] = pos[i] * pre[i]
        }

        return res
    }
}
