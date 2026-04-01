class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        // Map: Key = Sorted String, Value = List of Anagrams
        Map<String, List<String>> groups = new HashMap<>();

        for (String s : strs) {
            // 1. Create the Key (Sort the characters)
            char[] chars = s.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);

            // 2. Put into the Map
            if (!groups.containsKey(key)) {
                groups.put(key, new ArrayList<>());
            }
            groups.get(key).add(s);
        }

        // 3. Return all values as a List of Lists
        return new ArrayList<>(groups.values());
    }
}
