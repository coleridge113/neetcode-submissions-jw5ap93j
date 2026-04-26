class Solution {
    fun singleNumber(nums: IntArray): Int {
                val count = mutableMapOf<Int, Int>()

        for (num in nums) {
            count[num] = count.getOrDefault(num, 0) + 1
        }

        for ((key, value) in count) {
            if (value == 1) return key
        }

        return -1

    }
}
