package main

func main() {
	number := [4]int{1, 2, 3, 4}
	TwoSum({1,2,3,4,5}, 5)
}

func TwoSum(nums []int, target int) []int {
	n := len(nums)
	for i := 0; i < n-1; i++ {
		for j := i + 1; j < n; j++ {
			if nums[i]+nums[j] == target {
				return []int{i, j}
			}
		}
	}
	return []int{}
}
