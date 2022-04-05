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

//embedded struct
type Group struct {
	Name        string
	Admin       User   //tiap grup punya user
	Users       []User //setiap grup bisa punya banyak anggota
	IsAvailable bool   //menjelaskan bahwa grup bisa menerima pendaftaran member
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

	//struct sebagai parameter
	displayUser1 := displayUser(user)
	displayUser2 := displayUser(user4)
	fmt.Println(displayUser1)
	fmt.Println(displayUser2)

	//embedded struct
	users := []User{user, user2, user4}
	//embedded struct
	group := Group{"Gamer", user, users, true}
	displayGroup(group)
}

//struct sebagai parameter
func displayUser(user User) string {
	result := fmt.Sprintf("Name: %s %s, Email: $%s", user.FirstName, user.LastName, user.Email)
	return result
}

//function untuk display goroup
func displayGroup(group Group) {
	fmt.Println("------")
	fmt.Printf("Name: %s", group.Name)
	fmt.Println("")
	fmt.Printf("Member count: %d", len(group.Users))
	fmt.Println("")
	fmt.Println("Users Name")
	for _, user := range group.Users {
		fmt.Println(user.FirstName)
	}
}
