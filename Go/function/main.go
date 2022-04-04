package main

import "fmt"

func main() {
	printMyResult()
	printSecResult("Saya sudah belajar lagi, belajar golang")
	printSecResult("Saya sudah belajar bos, belajar java")

	fmt.Println(printThirdResult("Saya lagi apa ?"))
}

func printMyResult() {
	fmt.Println("saya belajar lagi")
}

func printSecResult(sentence string) {
	fmt.Println(sentence)
}

//fungsi, input, outpu
func printThirdResult(sentence string) string {
	newSentence := sentence + "Belajar golang oglang"
	//kembalikan nilai proses
	return newSentence
}

//input string
//proses stri
//output
