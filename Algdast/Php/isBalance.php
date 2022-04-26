<?php
function isBalanced($s) {
    // Write your code here
    $s = str_split($s);
    $stack = array();
    foreach($s as $key=>$val){
        switch($val){
            case '(': array_push($stack,0); break;
            case ')':
                if(array_pop($stack) !== 0) return "NO"; break;
            case '[': array_push($stack,1); break;
            case ']':
                if(array_pop($stack) !== 1) return "NO"; break;
            case '{': array_push($stack,2); break;
            case '}':
                if(array_pop($stack) !== 2) return "NO"; break;
            default: break;
        }
    }
    if (empty($stack)==1){
        return "YES";
    }
}

?>