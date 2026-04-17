class Solution {
        fun minEatingSpeed(piles: IntArray, h: Int): Int {
        var l = 1
        var r = piles.maxOrNull() ?: 109
        var res = r

        while (l <= r) {
            val k = l + (r - l) / 2
            
            var totalTime: Long = 0
            for (p in piles) {
                totalTime += (p.toLong() + k - 1) / k
            }

            if (totalTime <= h) {
                res = k
                r = k - 1
            } else {
                l = k + 1
            }
        }

        return res
    }

}
