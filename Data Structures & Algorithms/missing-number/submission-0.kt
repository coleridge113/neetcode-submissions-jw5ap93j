class Solution {
    fun missingNumber(nums: IntArray): Int {
        val n = nums.size

        val seen = IntArray(n + 1)

        for (num in nums) {
            seen[num] = 1
        }

        for (i in seen.indices) {
            if (seen[i] == 0) return i
        }

        return -1

    }
}
