class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;

        Map<Character, Integer> map = new HashMap();

        for (char c : s.toCharArray()) {
            int count = map.getOrDefault(c, 0) + 1;
            map.put(c, count);
        }

        for (char c : t.toCharArray()) {
            if (!map.containsKey(c)) return false;

            int count = map.get(c) - 1;
            if (count < 0) {
                return false;
            } else {
                map.put(c, count);
            }
        }

        return true;
    }
}
