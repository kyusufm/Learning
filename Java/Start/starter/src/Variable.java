public class Variable {
    //local variable, dapat di akses darimana saja
    int nilai = 1;

    //konstanta tidak bisa diubah ubah.
    final int angka = 8;
    public void name(){
        //member variabel tidak bisa diakses dari fungsi lain
        int nilaiKedua =2;
    }

    public void kelas(){
         
    }

    public static void main(String[] args){
        Variable v = new Variable();
        //cannot re-assign or update angka
        //v.angka += 4;

        System.out.println(v.angka);
    }

    //constanta, nilai variabel yang tidak bisa diubah ubah.
    //variabel biasa disebut juga mutabel karena nilainya bisa diubah ubah
}
