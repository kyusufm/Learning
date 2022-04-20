public class Operator {
    /*
    1. Aritmatika  ( + - * / %(pecahan hasil bagi))
    2. Assignment (operator yang digunakan untuk memberi nilai)
        x+=y (x=x+y)
    3. Increment (operator untuk menambahkan satu nilai)
        i++ tambah 1 setelah
        ++i tambah 1 sebelumnya
    4. decrement (operator yang digunakan untuk mengurangi satu nilai)
        i-- 
        --i 
    5. relasi (operator yang menghasilkan nilai boolean.)
    >  >= < <= == != 
    6. logika 
    AND, OR, XOR

    */
    public static void main(String[] args){
    int nilaiAwal = 0;
    int nilaiDua = 100; 
 
    int nilaiTotal = nilaiAwal + nilaiDua;

    boolean status = nilaiAwal>nilaiDua;

     nilaiAwal+=10;

    boolean statusAkhir = nilaiAwal<nilaiDua && nilaiDua>90;

    System.out.println("Berikut nilai totalnya:"+nilaiTotal);

    System.out.println("Berikut nilai status:"+status);

    System.out.println("Berikut nilai awal update:"+nilaiAwal);

    System.out.println("Berikut nilai totalnya:"+statusAkhir);
    }
}
