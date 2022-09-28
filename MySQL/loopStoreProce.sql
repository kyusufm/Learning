/*
Loop per input function to display:
ex:
p(3)
result:
*
* *
* * *
*/
DELIMITER $$
CREATE PROCEDURE P(R INT)
BEGIN
    DECLARE hitung INT Default 1;
    WHILE hitung <= R DO
        SELECT REPEAT ("* ", hitung);
        SET hitung = hitung +1;
    END WHILE;
END$$

CALL P(20);