class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
            const counts = new Map();

    for (const num of nums) {
        const value = counts.get(num) ?? 0;
        counts.set(num, value + 1);
    }

    const buckets = Array.from({ length: nums.length + 1}, () => []);

    for (const [num, freq] of counts) {
        buckets[freq].push(num);
    }

    const res = [];
    for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
        if (buckets[i].length > 0) {
            res.push(...buckets[i]);
        }
    }

    return res.slice(0, k);

    }
}
