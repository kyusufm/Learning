package main

import "fmt"

//seperti struktur tabel di mysql
type User struct {
	ID        int
	FirstName string
	LastName  string
	Email     string
	isActive  bool
}

func main() {
	//initiate struct jadi variabel
	user := User{}
	user.ID = 1
	user.FirstName = "Jayabara"
	user.LastName = "Jonjon"
	user.Email = "jjonjon@mail.com"
	user.isActive = true
	fmt.Println(user)

	//initiate user 2
	user2 := User{}
	user2.ID = 2
	user2.FirstName = "Kotlin"
	user2.LastName = "van Java"
	user2.Email = "kotlin@mail.com"
	user2.isActive = true
	fmt.Println(user2)

	//cara initiate langsung Isi
	user3 := User{ID: 3, FirstName: "jimbe", LastName: "monogosuke", Email: "jimbe@mgial.com", isActive: true}
	fmt.Println(user3)

	user5 := User{5, "lima", "kamonofo", "lima@mgial.com", true}
	fmt.Println(user5)

	user4 := User{
		ID:        4,
		FirstName: "lufy",
		LastName:  "blacklagg",
		Email:     "glekleg@mgial.com",
		isActive:  true}
	fmt.Println(user4)
}
