int binarySearch(int[] nums, int target) {
    int l = 0, r = nums.length;
    while (l < r) {
        int m = (l + r) / 2;
        if (nums[m] < target) l = m + 1;
        else r = m;
    }
    return l;
}