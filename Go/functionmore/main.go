package main

import "fmt"

func main() {

	result := add(10, 20)
	fmt.Println(result)

	result2 := addTwo(11, 20)
	fmt.Println(result2)

}

func add(number int, numberDua int) int {
	return number + numberDua
}

func addTwo(number, numberDua int) int {
	return number + numberDua
}
