class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
            const q = [];
    const map = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);

    for (const c of s) {
        if (map.has(c)) {
            if (q.length === 0 || map.get(c) !== q.pop()) { // [ == (
                return false;
            } 
        } else {
            q.push(c);
        }
    }

    return q.length === 0;

    }
}
