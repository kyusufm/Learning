func gradingStudents(grades []int32) []int32 {
	// Write your code here

	for i := 0; i < len(grades); i++ {
		if grades[i] > 34 && grades[i] <= 100 {
			if grades[i]%5 > 2 {
				grades[i] = grades[i] + (5 - (grades[i] % 5))
			}
		}

	}
	return grades
}