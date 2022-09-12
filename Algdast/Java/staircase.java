
    /*
    Staircase detail

    This is a staircase of size :

    #
    ##
    ###
    ####
    Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

    Write a program that prints a staircase of size .

     * Complete the 'staircase' function below.
     *
     * The function accepts INTEGER n as parameter.
     */

    public static void staircase(int n) {
    // Write your code here
        String a = " ";
        String b = "#";
        for (int i=1; i<=n; i++){
            System.out.println(a.repeat(n-i)+b.repeat(i));
        }
    }



