public class Tulisin {
    public static void main (String[] args) {
        System.out.println("WE NEED TO");
        System.out.println("\n");
        boolean E = evenlySpaced(4,6,8);
        System.out.println(E);
    }
    public boolean evenlySpaced(int a, int b, int c) {
        boolean r;
        r = true;
        if ( a<b) {
            if (b<c){
                r = jack(a,b,c);
            }else{
                //c<b
                r = jack(a,c,b);
            }
        }
        if (b<a){
            if (a<c){
                jack (b,a,c);
            }else{
                //c<a
                jack (b,c,a);
            }
        }
        if (c<a){
            if (a<b){
                jack(c,a,b);
            }else{
                //b<a
                jack(c,b,a);
            }
        }
        return r;
    }

    public boolean jack (int d, int e, int f){
        if (d-e == e-f){
            return true;
        }else{
            return false;
        }
    }

}
