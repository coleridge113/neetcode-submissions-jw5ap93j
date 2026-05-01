class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
            const rows = matrix.length;
    const cols = matrix[0].length;

    var l = 0;
    var r = cols * rows - 1;

    while (l <= r) {
        const m =  ~~(l + (r - l) / 2);
        const v = matrix[~~(m / cols)][m % cols];

        if (v < target) {
            l = m + 1;
        } else if (v > target) {
            r = m - 1;
        } else {
            return true;
        }
    }

    return false;

    }
}
