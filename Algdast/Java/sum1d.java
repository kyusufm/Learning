class Solution {
    public int[] runningSum(int[] nums) {
        int[] total = new int[nums.length];
        total[0] = nums[0];
        for (int i=1; i<nums.length; i++){
            total[i] = nums[i]+total[i-1];
        }
        return total;
    }
}