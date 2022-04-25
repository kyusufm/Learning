public class DiagonalDiff {
    public static int diagonalDifference(List<List<Integer>> arr) {
        // Write your code here
            int downToUp = 0, upToDown = 0;
            int length = arr.size();
            for (int i = 0; i < length; i++) {
                upToDown += arr.get(i).get(i);
                downToUp += arr.get(length - (i + 1)).get(i);
            }
            return Math.abs(upToDown - downToUp);
        }
    
}
