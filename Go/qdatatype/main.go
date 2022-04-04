package main

import "fmt"

func main() {
	//hitung rata rata
	scores := [8]int{100, 80, 75, 82, 93, 44, 66, 99}
	fmt.Println(scores)
	//sum scores, kemudian bagi 8
	var temp float64
	for _, skor := range scores {
		temp += float64(skor)
	}
	fmt.Println(temp / 8)

	//good score, >= 90
	skortu := [8]int{100, 80, 75, 82, 93, 44, 67, 99}
	var skorbagus []int
	for _, skk := range skortu {
		if skk >= 90 {
			skorbagus = append(skorbagus, skk)
		}
	}
	fmt.Println(skorbagus)

}
