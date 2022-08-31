package main

import (
	"fmt"
)

func plusMinus(arr []int32) {
	// Write your code here
	lgth := len(arr)
	var p float64 = 0
	var n float64 = 0
	var z float64 = 0
	var ttl float64 = float64(lgth)

	for i := 0; i < lgth; i++ {
		if arr[i] == 0 {
			z++
		}
		if arr[i] < 0 {
			n++
		}
		if arr[i] > 0 {
			p++
		}
	}

	fmt.Println(p / ttl)
	fmt.Println(n / ttl)
	fmt.Println(z / ttl)
	//loop array
	//cek if positif , positif++
	//cek if negatif, negatif++
	//cek if zero, zero++

}
