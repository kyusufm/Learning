package main

import "fmt"

func main() {
	luas, keliling := calculate(10, 2)
	fmt.Println(luas)
	fmt.Println(keliling)

	fmt.Println("----------------")
	//jika output hanya 1, maka harus dikasih _
	luasDua, _ := calculate(11, 3)
	fmt.Println(luasDua)

}

func calculate(panjang int, lebar int) (int, int) {
	luas := panjang * lebar
	keliling := 2 * (panjang * lebar)

	return luas, keliling
}
