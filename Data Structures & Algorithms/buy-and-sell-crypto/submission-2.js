class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
            var mp = 0;
    var lp = Number.MAX_SAFE_INTEGER;

    for (const price of prices) {
        if (price < lp) {
            lp = price
        } else {
            mp = Math.max(price - lp, mp);
        }
    }

    return mp;

    }
}
