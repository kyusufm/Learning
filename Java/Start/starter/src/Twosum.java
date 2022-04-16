public class Twosum {
    public int[] twoSum(int[] nums, int target) {
        for(int i = 0; i < nums.length; i++){
            for(int j = i+1; j < nums.length; j++){
                int complement = target - nums[i];

                if (nums[j]==complement){
                    return new int[] {i,j};
                }

            }
        }
        throw new IllegalArgumentException ("No match found");
    }

    public static void main (){
        int[] nums = new int[]{1,2,3,4,5,6,7,8,9};
        int target = 11;
        twoSum(nums, target);
    }
}
