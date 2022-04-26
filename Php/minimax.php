<?php
function miniMaxSum($arr) {
    // Write your code here
    sort($arr);
    $arrmin = $arrmax = $arr;
    
     array_pop($arrmin);
     array_shift($arrmax);
    
    print(array_sum($arrmin)." ".array_sum($arrmax));

}

$arr_temp = rtrim(fgets(STDIN));

$arr = array_map('intval', preg_split('/ /', $arr_temp, -1, PREG_SPLIT_NO_EMPTY));

miniMaxSum($arr);

?>