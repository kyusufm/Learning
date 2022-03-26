<?php

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets($a, $b) {
    // Write your code here
    
    //loop i
    $length = count($a);
    $hasil = array();
    $jon = 0;
    $in = 0;
    for ($i = 0; $i < $length; $i++) {
        if ($a[$i]>$b[$i]){
            $jon++;
        }else if($b[$i]>$a[$i]){
            $in++;
        }
    }
    return array($jon,$in);
    //if i>a bob+1 else if a>i elsa+1
    
    //return array [b,]

}

$fptr = fopen(getenv("OUTPUT_PATH"), "w");

$a_temp = rtrim(fgets(STDIN));

$a = array_map('intval', preg_split('/ /', $a_temp, -1, PREG_SPLIT_NO_EMPTY));

$b_temp = rtrim(fgets(STDIN));

$b = array_map('intval', preg_split('/ /', $b_temp, -1, PREG_SPLIT_NO_EMPTY));

$result = compareTriplets($a, $b);

fwrite($fptr, implode(" ", $result) . "\n");

fclose($fptr);
