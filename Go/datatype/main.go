package main

import "fmt"

func main() {

	//deklarasi array manual
	var languages [5]string

	languages[0] = "ruy"
	languages[1] = "ruy1"
	languages[2] = "ruy2"
	languages[3] = "ruy3"
	languages[4] = "ruy4"

	//deklarasi array versi 2
	countries := [5]string{"ruby", "indonesia", "japan", "endland", "romaniaß"}

	//deklarasi array v3
	peoples := [...]string{
		"en",
		"un",
		"jack",
		"jonathan",
	}

	//cek array length
	length := len(languages)

	lengthPeoples := len(peoples)

	//array looping with index
	//index otomatis, deklar range = i nya
	for index, lang := range languages {
		fmt.Println("index: ", index, "languages :", lang)
	}

	fmt.Println(length)
	fmt.Println("people length:", lengthPeoples)
	fmt.Println(countries)
	fmt.Println(languages)
	fmt.Println(peoples)

	//Slice
	var gamingConsoles []string
	gamingConsoles = append(gamingConsoles, "Playstation")
	gamingConsoles = append(gamingConsoles, "nintendoone")
	fmt.Println(gamingConsoles)

	//Map
	//array index berupa angka (keynya = angka)
	//kalau map keynya bisa kita tentukan sendiri tipe datanya.

	var petaKu map[string]int
	//membuat variabel petaku, dengan tipe data map, dan berisi index dengan tipe data string

	petaKu = map[string]int{}
	petaKu["ruby"] = 9
	petaKu["python"] = 9
	petaKu["java"] = 9

	//ganti value sesuai key, disini misal ruby jadi 11
	petaKu["ruby"] = 11

	fmt.Println(petaKu)

	//tampilkan sesuai key
	fmt.Println(petaKu["ruby"])

	//full input
	petaKuDua := map[string]string{"ruby": "is beautiful", "go": "is supa fast"}
	fmt.Println(petaKuDua)

	//for map
	petakuTiga := map[string]string{
		"indo":    "beautiful",
		"indodua": "beauty too",
		"indofut": "mari makan",
	}

	for key, isi := range petakuTiga {
		fmt.Println("Keynya:", key, "Isinya:", isi)
	}

	//delete map
	fmt.Println("----------------------------------------------------------------")
	delete(petakuTiga, "indodua")

	for key, isi := range petakuTiga {
		fmt.Println("Keynya:", key, "Isinya:", isi)
	}

	//cara menentukan suatu map mengandung key tertentu
	tampilin := petakuTiga["indo"]

	fmt.Println(tampilin)

	//return boolean
	tampilinDong, isAvailable := petakuTiga["dugdug"]
	fmt.Println(isAvailable)
	fmt.Println(tampilinDong)

	//Slice of Map
	siswa := []map[string]string{
		{"name": "agung", "score": "A"},
		{"name": "joko", "score": "B"},
		{"name": "tole", "score": "C"},
	}
	fmt.Println(siswa)

	for _, siswa := range siswa {
		fmt.Println(siswa)
	}

	for _, siswa := range siswa {
		fmt.Println("namanya:", siswa["name"], siswa["score"])
	}

}
