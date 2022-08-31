func hurdleRace(k int32, height []int32) int32 {
	// Write your code here
	var potion int32 = 0
	//get highest value in array.
	var max int32 = 0

	for i := 0; i < len(height); i++ {
		if max < height[i] {
			max = height[i]
		}
	}
	potion = max - k
	if potion < 0 {
		potion = 0
	}
	return (potion)

}