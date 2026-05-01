class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
            var l = 0;
    var max = 0;

    var chars = new Set();

    for (let r = 0; r < s.length; r++) {
        while (chars.has(s[r])) {
            chars.delete(s[l]);
            l++;
        }

        chars.add(s[r]);
        max = Math.max(max, chars.size);
    }

    return max;

    }
}
