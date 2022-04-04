package main

import "fmt"

func main() {

	luas, keliling := calculateOld(10, 2)
	fmt.Println(luas)
	fmt.Println(keliling)

	luas2, keliling2 := calculate(10, 2)
	fmt.Println(luas2)
	fmt.Println(keliling2)

}

func calculateOld(panjang int, lebar int) (int, int) {
	var luas int
	luas = panjang * lebar

	var keliling int
	keliling = 2 * (panjang + lebar)

	return luas, keliling
}

func calculate(panjang int, lebar int) (luas int, keliling int) {
	luas = panjang * lebar

	keliling = 2 * (panjang + lebar)

	return

}
