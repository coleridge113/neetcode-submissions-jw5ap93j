class Solution {
    fun topKFrequent(nums: IntArray, k: Int): IntArray {
        val freq = mutableMapOf<Int, Int>()

        for (num in nums) {
            freq[num] = freq.getOrDefault(num, 0) + 1
        }

        val bucket = Array(nums.size + 1) { mutableListOf<Int>() }

        for ((k, v) in freq) {
            bucket[v].add(k)
        }

        val res = mutableListOf<Int>()
        for (i in bucket.size - 1 downTo 0) {
            for (num in bucket[i]) {
                res.add(num)
                if (res.size == k) {
                    return res.toIntArray()
                }
            }
        }

        return res.toIntArray()
    }
}
