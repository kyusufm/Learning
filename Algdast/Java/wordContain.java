class Solution {
    public int countConsistentStrings(String allowed, String[] words) {
        int total = 0;
        for (int i=0; i<words.length; i++){
            if (words[i].contains(allowed)){
                total++;
            }
        }
        return total;
    }
}
