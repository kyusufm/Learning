import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.StdRandom;

public class RandomWord {
    public static void main(String[] args) {
        String temp = "";
        int i = 0;
        while (!StdIn.isEmpty()) {
            i++;
            String newStr = StdIn.readString();
            if (StdRandom.bernoulli(1.0 / i)) {
                temp = newStr;
            }
        }
    StdOut.print(temp);
    }
}