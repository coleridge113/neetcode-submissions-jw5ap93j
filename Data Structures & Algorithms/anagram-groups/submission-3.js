class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
            const map = new Map();

    for (const w of strs) {
        const sorted = w.split('').sort().join('');

        if (!map.has(sorted)) {
            map.set(sorted, []);
        }

        map.get(sorted).push(w);
    }

    return Array.from(map.values());

    }
}
