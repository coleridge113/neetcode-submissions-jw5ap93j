class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
            var l = 0;
    var r = heights.length - 1;

    var max = 0;

    while (l < r) {
        const depth = Math.min(heights[l], heights[r]);
        const len = Math.abs(l - r);
        max = Math.max(max, depth * len);

        if (heights[l] < heights[r]) {
            l++;
        } else {
            r--;
        }
    }

    return max;

    }
}
