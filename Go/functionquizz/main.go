package main

import (
	"errors"
	"fmt"
)

func main() {
	// scores := []int(10,5,8,9,7)
	//total := sum (scores)
	scores := []int{10, 5, 8, 9, 7}

	total := sum(scores)

	fmt.Println(total)

	//result, err := calculate (10,2,"-")
	//result, err := calculate (10,2,"+")
	//result, err := calculate (10,2,"*")
	//result, err := calculate (10,2,"/")

	result, err := calculate(10, 2, "-")

	if err != nil {
		fmt.Println("terjadi error")
	} else {
		fmt.Println(result)
	}

	//test 2
	result2, err2 := calculate(10, 2, "#")
	if err2 != nil {
		fmt.Println("terjadi error di test 2")
	} else {
		fmt.Println(result2)
	}

}

func sum(skors []int) (tot int) {
	temp := 0
	for _, skor := range skors {
		temp += skor
	}
	return
}

func calculate(a int, b int, tanda string) (int, error) {
	total := 0
	var errorResult error
	switch tanda {
	case "-":
		total = a - b
	case "*":
		total = a * b
	case "/":
		total = a / b
	case "+":
		total = a + b
	default:
		total = 0
		errorResult = errors.New("tanda tidak ditemukan")

	}

	return total, errorResult

}
