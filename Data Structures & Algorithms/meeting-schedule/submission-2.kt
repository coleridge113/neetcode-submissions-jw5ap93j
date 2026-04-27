/**
 * Definition of Interval:
 * class Interval(var start: Int, var end: Int) {}
 */

class Solution {
    fun canAttendMeetings(intervals: List<Interval>): Boolean {
        if (intervals.size <= 1) return true

        val sorted = intervals.sortedBy { it.start }
        var prev = sorted[0]
        for (i in 1 until sorted.size) {
            if (prev.end > sorted[i].start) {
                return false
            }
            prev = sorted[i]
        }

        return true
    }
}
