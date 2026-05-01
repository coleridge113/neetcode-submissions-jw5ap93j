class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
    const isAlphaNumeric = (char) => /^[a-z0-9]$/i.test(char);

    var l = 0;
    var r = s.length - 1;

    while (l < r) {
        while (l < r && !isAlphaNumeric(s[l])) l++;
        while (l < r && !isAlphaNumeric(s[r])) r--;

        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false
        }
        l++;
        r--;
    }

    return true;

    }
}
