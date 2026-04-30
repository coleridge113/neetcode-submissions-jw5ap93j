class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
            if (s.length !== t.length) {
        return false;
    }
    const seen = new Map();

    for (const c of s) {
        const v = seen.get(c) ?? 0;
        seen.set(c, v + 1);
    }

    for (const c of t) {
        const v = seen.get(c) ?? 0;
        if (v <= 0) {
            return false;
        }
        seen.set(c, v - 1);

    }

    return true;

    }
}
