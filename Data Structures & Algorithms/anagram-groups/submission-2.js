class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
            const seen = new Map();

    for (const word of strs) {
        const sortedWord = word.split('').sort().join('');

        if (!seen.has(sortedWord)) {
            seen.set(sortedWord, []);
        }

        seen.get(sortedWord).push(word);
    }

    return Array.from(seen.values());

    }
}
