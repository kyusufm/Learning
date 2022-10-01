/*
Enter your query here.
*/
DELIMITER $$
CREATE PROCEDURE P(R INT)
BEGIN
    DECLARE hitung INT DEFAULT 1;
    WHILE R > 0 DO 
        SELECT REPEAT("* ", R);
        SET R = R-1;
    END WHILE;
END$$

CALL P(20)
