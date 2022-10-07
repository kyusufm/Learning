function modifyArray(nums) {
    let not = [];
    for (var i=0; i<nums.length; i++){
        if (nums[i]%2==0){
            not.push(nums[i]*2)
        }else{
            not.push(nums[i]*3)
        } 
    }
    return not;
}
