class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
            var l = 0;
    var r = nums.length - 1;

    while (l <= r) {
        const m = ~~(l + (r - l) / 2);
        
        if (nums[m] < target) {
            l = m + 1;
        } else if (nums[m] > target) {
            r = m - 1;
        } else {
            return m;
        }
    }

    return -1;

    }
}
